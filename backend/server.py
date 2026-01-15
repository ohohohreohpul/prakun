from fastapi import FastAPI, APIRouter, HTTPException, Depends, UploadFile, File, Form
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from fastapi.staticfiles import StaticFiles
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional, Dict, Any
import uuid
from datetime import datetime, timezone, timedelta
import bcrypt
from jose import jwt, JWTError
import shutil

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ.get('DB_NAME', 'prakun_massage')]

# Create uploads directory
UPLOAD_DIR = ROOT_DIR / "uploads"
UPLOAD_DIR.mkdir(exist_ok=True)

# JWT Settings
SECRET_KEY = os.environ.get('JWT_SECRET', 'prakun-thai-massage-secret-key-2024')
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_HOURS = 24

# Default admin credentials (password: admin123)
DEFAULT_ADMIN_USERNAME = "admin"
DEFAULT_ADMIN_PASSWORD_HASH = bcrypt.hashpw("admin123".encode(), bcrypt.gensalt()).decode()

# Create the main app
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Security
security = HTTPBearer()

# ============ Models ============

class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class AdminLogin(BaseModel):
    username: str
    password: str

class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"

class AdminUser(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    username: str
    password_hash: str

class SiteImage(BaseModel):
    id: str
    category: str  # e.g., 'services', 'benefits', 'studio', 'giftProducts', 'hero'
    item_id: str   # e.g., service slug or benefit id
    image_type: str  # e.g., 'heroImage', 'cardImage', 'image'
    image_url: str
    original_name: Optional[str] = None
    updated_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class SiteSettings(BaseModel):
    id: str = "site_settings"
    phone: str = "040 22697033"
    email: str = "info@prakunmassage.de"
    address: str = "Winterhuder Weg 24"
    city: str = "22085 Hamburg"
    updated_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class UpdateSettingsRequest(BaseModel):
    phone: Optional[str] = None
    email: Optional[str] = None
    address: Optional[str] = None
    city: Optional[str] = None

# ============ Helper Functions ============

def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.now(timezone.utc) + timedelta(hours=ACCESS_TOKEN_EXPIRE_HOURS)
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

def verify_token(token: str):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except JWTError:
        return None

async def get_current_admin(credentials: HTTPAuthorizationCredentials = Depends(security)):
    token = credentials.credentials
    payload = verify_token(token)
    if not payload:
        raise HTTPException(status_code=401, detail="Invalid or expired token")
    return payload

async def init_admin():
    """Initialize default admin user if not exists"""
    admin = await db.admins.find_one({"username": DEFAULT_ADMIN_USERNAME})
    if not admin:
        await db.admins.insert_one({
            "id": str(uuid.uuid4()),
            "username": DEFAULT_ADMIN_USERNAME,
            "password_hash": DEFAULT_ADMIN_PASSWORD_HASH
        })
        logging.info("Default admin user created")

async def init_site_settings():
    """Initialize default site settings if not exists"""
    settings = await db.site_settings.find_one({"id": "site_settings"})
    if not settings:
        await db.site_settings.insert_one({
            "id": "site_settings",
            "phone": "040 22697033",
            "email": "info@prakunmassage.de",
            "address": "Winterhuder Weg 24",
            "city": "22085 Hamburg",
            "updated_at": datetime.now(timezone.utc).isoformat()
        })
        logging.info("Default site settings created")

# ============ Status Routes ============

@api_router.get("/")
async def root():
    return {"message": "Prakun Thai Massage API"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks

# ============ Admin Auth Routes ============

@api_router.post("/admin/login", response_model=TokenResponse)
async def admin_login(login: AdminLogin):
    """Admin login endpoint"""
    admin = await db.admins.find_one({"username": login.username})
    if not admin:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    if not bcrypt.checkpw(login.password.encode(), admin['password_hash'].encode()):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    token = create_access_token({"sub": admin['username'], "admin_id": admin['id']})
    return TokenResponse(access_token=token)

@api_router.get("/admin/verify")
async def verify_admin(admin = Depends(get_current_admin)):
    """Verify admin token is valid"""
    return {"valid": True, "username": admin['sub']}

@api_router.post("/admin/change-password")
async def change_admin_password(
    current_password: str = Form(...),
    new_password: str = Form(...),
    admin = Depends(get_current_admin)
):
    """Change admin password"""
    admin_user = await db.admins.find_one({"username": admin['sub']})
    if not admin_user:
        raise HTTPException(status_code=404, detail="Admin not found")
    
    if not bcrypt.checkpw(current_password.encode(), admin_user['password_hash'].encode()):
        raise HTTPException(status_code=401, detail="Current password is incorrect")
    
    new_hash = bcrypt.hashpw(new_password.encode(), bcrypt.gensalt()).decode()
    await db.admins.update_one(
        {"username": admin['sub']},
        {"$set": {"password_hash": new_hash}}
    )
    return {"message": "Password changed successfully"}

# ============ Site Settings Routes ============

@api_router.get("/settings")
async def get_site_settings():
    """Get site settings (public)"""
    settings = await db.site_settings.find_one({"id": "site_settings"}, {"_id": 0})
    if not settings:
        return {
            "id": "site_settings",
            "phone": "040 22697033",
            "email": "info@prakunmassage.de",
            "address": "Winterhuder Weg 24",
            "city": "22085 Hamburg"
        }
    return settings

@api_router.put("/admin/settings")
async def update_site_settings(
    settings: UpdateSettingsRequest,
    admin = Depends(get_current_admin)
):
    """Update site settings (admin only)"""
    update_data = {k: v for k, v in settings.model_dump().items() if v is not None}
    update_data['updated_at'] = datetime.now(timezone.utc).isoformat()
    
    await db.site_settings.update_one(
        {"id": "site_settings"},
        {"$set": update_data},
        upsert=True
    )
    return {"message": "Settings updated successfully"}

# ============ Image Management Routes ============

@api_router.get("/images")
async def get_all_images():
    """Get all site images (public)"""
    images = await db.site_images.find({}, {"_id": 0}).to_list(1000)
    return images

@api_router.get("/images/{category}")
async def get_images_by_category(category: str):
    """Get images by category"""
    images = await db.site_images.find({"category": category}, {"_id": 0}).to_list(1000)
    return images

@api_router.post("/admin/upload")
async def upload_image(
    file: UploadFile = File(...),
    category: str = Form(...),
    item_id: str = Form(...),
    image_type: str = Form(...),
    admin = Depends(get_current_admin)
):
    """Upload an image (admin only)"""
    # Validate file type
    allowed_types = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
    if file.content_type not in allowed_types:
        raise HTTPException(status_code=400, detail="Invalid file type. Allowed: JPEG, PNG, WebP, GIF")
    
    # Generate unique filename
    file_ext = file.filename.split('.')[-1] if '.' in file.filename else 'jpg'
    unique_filename = f"{category}_{item_id}_{image_type}_{uuid.uuid4().hex[:8]}.{file_ext}"
    file_path = UPLOAD_DIR / unique_filename
    
    # Save file
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    
    # Generate URL
    image_url = f"/api/uploads/{unique_filename}"
    
    # Create image record ID
    image_id = f"{category}_{item_id}_{image_type}"
    
    # Store in database (upsert to allow updating)
    image_doc = {
        "id": image_id,
        "category": category,
        "item_id": item_id,
        "image_type": image_type,
        "image_url": image_url,
        "original_name": file.filename,
        "updated_at": datetime.now(timezone.utc).isoformat()
    }
    
    await db.site_images.update_one(
        {"id": image_id},
        {"$set": image_doc},
        upsert=True
    )
    
    return {"message": "Image uploaded successfully", "image_url": image_url, "id": image_id}

@api_router.delete("/admin/images/{image_id}")
async def delete_image(image_id: str, admin = Depends(get_current_admin)):
    """Delete an image (admin only)"""
    image = await db.site_images.find_one({"id": image_id})
    if not image:
        raise HTTPException(status_code=404, detail="Image not found")
    
    # Delete file if it's a local upload
    if image['image_url'].startswith('/api/uploads/'):
        filename = image['image_url'].split('/')[-1]
        file_path = UPLOAD_DIR / filename
        if file_path.exists():
            file_path.unlink()
    
    await db.site_images.delete_one({"id": image_id})
    return {"message": "Image deleted successfully"}

@api_router.put("/admin/images/{image_id}/url")
async def update_image_url(
    image_id: str,
    image_url: str = Form(...),
    admin = Depends(get_current_admin)
):
    """Update image URL directly (admin only)"""
    # Parse image_id to get category, item_id, image_type
    parts = image_id.split('_', 2)
    if len(parts) < 3:
        raise HTTPException(status_code=400, detail="Invalid image_id format")
    
    category, item_id, image_type = parts[0], parts[1], '_'.join(parts[2:])
    
    image_doc = {
        "id": image_id,
        "category": category,
        "item_id": item_id,
        "image_type": image_type,
        "image_url": image_url,
        "original_name": None,
        "updated_at": datetime.now(timezone.utc).isoformat()
    }
    
    await db.site_images.update_one(
        {"id": image_id},
        {"$set": image_doc},
        upsert=True
    )
    
    return {"message": "Image URL updated successfully", "image_url": image_url}

# ============ Content Categories Info ============

@api_router.get("/admin/image-categories")
async def get_image_categories(admin = Depends(get_current_admin)):
    """Get list of all image categories and their items for the admin panel"""
    categories = {
        "services": {
            "label": "Services (Massagen)",
            "items": [
                {"id": "teilkoerpermassage", "label": "Teilkörpermassage", "types": ["heroImage", "cardImage"]},
                {"id": "ganzkoerpermassage", "label": "Ganzkörpermassage", "types": ["heroImage", "cardImage"]},
                {"id": "aromaoel-massage", "label": "Aromaöl-Massage", "types": ["heroImage", "cardImage"]},
                {"id": "aromakerzen-massage", "label": "Aromakerzen-Massage", "types": ["heroImage", "cardImage"]},
                {"id": "hot-stone-massage", "label": "Hot Stone Massage", "types": ["heroImage", "cardImage"]},
                {"id": "kraeuterstempel-massage", "label": "Kräuterstempel-Massage", "types": ["heroImage", "cardImage"]},
                {"id": "bambus-massage", "label": "Bambus-Massage", "types": ["heroImage", "cardImage"]},
                {"id": "lomi-lomi-massage", "label": "Lomi Lomi Nui Massage", "types": ["heroImage", "cardImage"]},
                {"id": "ayurveda-abhyanga", "label": "Ayurveda Abhyanga", "types": ["heroImage", "cardImage"]},
                {"id": "schwangerschaftsmassage", "label": "Schwangerschaftsmassage", "types": ["heroImage", "cardImage"]},
                {"id": "gesichtsmassage", "label": "Gesichtsmassage", "types": ["heroImage", "cardImage"]},
                {"id": "fussmassage", "label": "Fußmassage", "types": ["heroImage", "cardImage"]},
                {"id": "thai-warrior-massage", "label": "Thai Warrior Massage", "types": ["heroImage", "cardImage"]}
            ]
        },
        "benefits": {
            "label": "Vorteile / Benefits",
            "items": [
                {"id": "1", "label": "Erfahrung seit 2012", "types": ["image"]},
                {"id": "2", "label": "Einfache Online-Buchung", "types": ["image"]},
                {"id": "3", "label": "Zertifizierte Therapeuten", "types": ["image"]},
                {"id": "4", "label": "Wärme, Respekt & Sorgfalt", "types": ["image"]},
                {"id": "5", "label": "Zentrale Lage", "types": ["image"]}
            ]
        },
        "giftProducts": {
            "label": "Wellness Pakete & Extras",
            "items": [
                {"id": "1", "label": "Aromaöl Ganzkörper", "types": ["image"]},
                {"id": "2", "label": "Wellness Paket", "types": ["image"]},
                {"id": "3", "label": "Paar-Massage", "types": ["image"]},
                {"id": "4", "label": "Premium Verwöhnpaket", "types": ["image"]},
                {"id": "5", "label": "Hot Stone Paket", "types": ["image"]},
                {"id": "6", "label": "Kräuterstempel Massage", "types": ["image"]}
            ]
        },
        "studio": {
            "label": "Studio",
            "items": [
                {"id": "main", "label": "Studio Hauptbild", "types": ["image"]}
            ]
        },
        "hero": {
            "label": "Hero Section",
            "items": [
                {"id": "background", "label": "Hero Hintergrundbild", "types": ["image"]}
            ]
        },
        "about": {
            "label": "Über Uns Seite",
            "items": [
                {"id": "main", "label": "Hauptbild", "types": ["image"]},
                {"id": "founder", "label": "Gründer/Team Foto", "types": ["image"]}
            ]
        }
    }
    return categories

# Include the router in the main app
app.include_router(api_router)

# Mount static files for uploads
app.mount("/api/uploads", StaticFiles(directory=str(UPLOAD_DIR)), name="uploads")

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("startup")
async def startup_db_client():
    await init_admin()
    await init_site_settings()
    logger.info("Admin and settings initialized")

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
