#!/usr/bin/env python3
"""
Backend API Testing for Admin Portal and Image Management System
Tests the following endpoints:
1. POST /api/admin/login - Admin authentication
2. GET /api/admin/verify - Token verification
3. GET /api/settings - Public site settings
4. PUT /api/admin/settings - Update site settings (protected)
5. GET /api/images - Public images endpoint
6. GET /api/admin/image-categories - Admin image categories (protected)
"""

import requests
import json
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv('/app/frontend/.env')

# Get backend URL from environment
BACKEND_URL = os.getenv('REACT_APP_BACKEND_URL', 'http://localhost:8001')
BASE_URL = f"{BACKEND_URL}/api"

print(f"Testing backend at: {BASE_URL}")

# Test credentials
ADMIN_USERNAME = "admin"
ADMIN_PASSWORD = "admin123"

def test_admin_login():
    """Test POST /api/admin/login"""
    print("\n=== Testing Admin Login ===")
    
    url = f"{BASE_URL}/admin/login"
    payload = {
        "username": ADMIN_USERNAME,
        "password": ADMIN_PASSWORD
    }
    
    try:
        response = requests.post(url, json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            if 'access_token' in data:
                print("✅ Login successful - access_token received")
                return data['access_token']
            else:
                print("❌ Login failed - no access_token in response")
                return None
        else:
            print(f"❌ Login failed - HTTP {response.status_code}")
            return None
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Login failed - Network error: {e}")
        return None

def test_admin_verify(token):
    """Test GET /api/admin/verify"""
    print("\n=== Testing Admin Token Verification ===")
    
    if not token:
        print("❌ No token available for verification test")
        return False
    
    url = f"{BASE_URL}/admin/verify"
    headers = {"Authorization": f"Bearer {token}"}
    
    try:
        response = requests.get(url, headers=headers, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get('valid') == True:
                print("✅ Token verification successful")
                return True
            else:
                print("❌ Token verification failed - invalid response")
                return False
        else:
            print(f"❌ Token verification failed - HTTP {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Token verification failed - Network error: {e}")
        return False

def test_get_settings():
    """Test GET /api/settings (public endpoint)"""
    print("\n=== Testing Get Site Settings (Public) ===")
    
    url = f"{BASE_URL}/settings"
    
    try:
        response = requests.get(url, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            required_fields = ['phone', 'email', 'address', 'city']
            
            if all(field in data for field in required_fields):
                print("✅ Settings endpoint working - all required fields present")
                print(f"   Phone: {data.get('phone')}")
                print(f"   Email: {data.get('email')}")
                print(f"   Address: {data.get('address')}")
                print(f"   City: {data.get('city')}")
                return True
            else:
                missing = [f for f in required_fields if f not in data]
                print(f"❌ Settings endpoint missing fields: {missing}")
                return False
        else:
            print(f"❌ Settings endpoint failed - HTTP {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Settings endpoint failed - Network error: {e}")
        return False

def test_update_settings(token):
    """Test PUT /api/admin/settings (protected endpoint)"""
    print("\n=== Testing Update Site Settings (Protected) ===")
    
    if not token:
        print("❌ No token available for settings update test")
        return False
    
    url = f"{BASE_URL}/admin/settings"
    headers = {"Authorization": f"Bearer {token}"}
    payload = {"phone": "040 22697033"}
    
    try:
        response = requests.put(url, json=payload, headers=headers, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            if 'message' in data and 'success' in data['message'].lower():
                print("✅ Settings update successful")
                return True
            else:
                print("❌ Settings update failed - unexpected response")
                return False
        else:
            print(f"❌ Settings update failed - HTTP {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Settings update failed - Network error: {e}")
        return False

def test_get_images():
    """Test GET /api/images (public endpoint)"""
    print("\n=== Testing Get Images (Public) ===")
    
    url = f"{BASE_URL}/images"
    
    try:
        response = requests.get(url, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            if isinstance(data, list):
                print(f"✅ Images endpoint working - returned {len(data)} images")
                return True
            else:
                print("❌ Images endpoint failed - response is not an array")
                return False
        else:
            print(f"❌ Images endpoint failed - HTTP {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Images endpoint failed - Network error: {e}")
        return False

def test_get_image_categories(token):
    """Test GET /api/admin/image-categories (protected endpoint)"""
    print("\n=== Testing Get Image Categories (Protected) ===")
    
    if not token:
        print("❌ No token available for image categories test")
        return False
    
    url = f"{BASE_URL}/admin/image-categories"
    headers = {"Authorization": f"Bearer {token}"}
    
    try:
        response = requests.get(url, headers=headers, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            expected_categories = ['services', 'benefits', 'giftProducts', 'studio', 'hero', 'about']
            
            if all(cat in data for cat in expected_categories):
                print("✅ Image categories endpoint working - all expected categories present")
                for cat in expected_categories:
                    items_count = len(data[cat].get('items', []))
                    print(f"   {cat}: {items_count} items")
                return True
            else:
                missing = [cat for cat in expected_categories if cat not in data]
                print(f"❌ Image categories endpoint missing categories: {missing}")
                return False
        else:
            print(f"❌ Image categories endpoint failed - HTTP {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Image categories endpoint failed - Network error: {e}")
        return False

def main():
    """Run all backend API tests"""
    print("🚀 Starting Backend API Tests")
    print("=" * 50)
    
    results = {}
    
    # Test 1: Admin Login
    token = test_admin_login()
    results['admin_login'] = token is not None
    
    # Test 2: Admin Verify (requires token from login)
    results['admin_verify'] = test_admin_verify(token)
    
    # Test 3: Get Settings (public)
    results['get_settings'] = test_get_settings()
    
    # Test 4: Update Settings (protected)
    results['update_settings'] = test_update_settings(token)
    
    # Test 5: Get Images (public)
    results['get_images'] = test_get_images()
    
    # Test 6: Get Image Categories (protected)
    results['get_image_categories'] = test_get_image_categories(token)
    
    # Summary
    print("\n" + "=" * 50)
    print("📊 TEST RESULTS SUMMARY")
    print("=" * 50)
    
    passed = sum(results.values())
    total = len(results)
    
    for test_name, passed_test in results.items():
        status = "✅ PASS" if passed_test else "❌ FAIL"
        print(f"{test_name.replace('_', ' ').title()}: {status}")
    
    print(f"\nOverall: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 All backend API tests passed!")
        return True
    else:
        print("⚠️  Some backend API tests failed!")
        return False

if __name__ == "__main__":
    success = main()
    exit(0 if success else 1)