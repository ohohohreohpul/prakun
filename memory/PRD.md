# Prakun Thai Massage Website - PRD

## Original Problem Statement
Clone the website `https://newsoul.de/` and rebrand it for "Prakun Thai Massage" - a professional Thai massage studio in Hamburg. The site should feature:
- Premium glassmorphism design
- Framer/webflow-level smooth animations
- Individual service pages with SEO-ready content
- Mega menu navigation
- Embedded YouTube videos

## User Personas
- Primary: Potential massage clients in Hamburg seeking professional Thai massage services
- Secondary: Existing clients looking to book appointments or purchase gift vouchers

## Core Requirements
- [x] Website clone of newsoul.de structure
- [x] Rebranding to "Prakun Thai Massage"
- [x] Glassmorphism design with framer-motion animations
- [x] Service pages with detailed descriptions and pricing
- [x] Mega menu navigation
- [x] YouTube video integration (hero + testimonials)
- [x] Dark transparent sticky header
- [x] Clean video player UI (no title/duration)
- [x] Symmetrical testimonials layout
- [x] Removed external branding badge
- [x] Responsive header (hamburger on right for mobile)
- [x] Booking page with Planity widget integration
- [x] All booking buttons linked to /buchen
- [x] Gutscheine buttons linked to external shop
- [x] Gift Voucher section with €49, €62, €92, €114 amounts
- [x] Wellness Pakete & Extras section (renamed from gift cards)
- [x] Über uns (About) page
- [x] Kontakt (Contact) page with form and Google Maps
- [x] SEO meta tags, Open Graph, Twitter Cards
- [x] Structured data (Schema.org - LocalBusiness, Service)
- [x] sitemap.xml and robots.txt
- [x] Leistungen (Services overview) page with all massages

## Tech Stack
- Frontend: React + Tailwind CSS + framer-motion
- Backend: FastAPI (not yet integrated)
- Database: MongoDB (not yet integrated)
- Styling: Glassmorphism design pattern
- External: Planity booking widget

## What's Been Implemented

### January 2025
- Created booking page (`/buchen`) with Planity widget embedded
- All "Termin buchen" buttons now link to `/buchen`
- All "Gutscheine" buttons link to `https://shop.prakunthaimassage.de/hamburg`
- Fixed STANDORT card logo stretching issue
- Replaced sauna/pool images with massage/wellness images
- Fixed header logo centering using CSS grid
- Mobile hamburger menu moved to right side
- **NEW: Gift Voucher Section** - Premium dark design with €49, €62, €92, €114 amounts
- **Renamed:** Gift cards carousel → "Wellness Pakete & Extras" section
- **NEW: Über uns page** (`/ueber-uns`) - Company story, stats, values
- **NEW: Kontakt page** (`/kontakt`) - Contact form, Google Maps, info cards
- **NEW: Leistungen page** (`/leistungen`) - All services overview with categories
- "Pakete entdecken" button now links to `/buchen`
  - Comprehensive meta tags (title, description, keywords)
  - Open Graph & Twitter Card meta tags
  - Structured data (Schema.org LocalBusiness & Service)
  - sitemap.xml with all pages
  - robots.txt
  - Google Analytics & Search Console placeholders ready

### December 2025
- Full site clone and rebrand completed
- Glassmorphism design with smooth animations
- Service pages template (`/massage/:slug`)
- Mega menu with service categories
- YouTube video modals in Hero and Testimonials sections
- Dark transparent sticky header with gold border
- Centered logo with grouped navigation
- Clean video player UI (removed title/duration)
- Symmetrical 3-column testimonials grid
- Removed "Made with Emergent" badge

## Data Strategy
All content is currently MOCKED via `/app/frontend/src/data/mockData.js`

## External Integrations
- **Planity**: Booking widget embedded on `/buchen` page
- **Framer Motion**: Used for animations
- **YouTube**: Videos embedded for hero and testimonial sections

## Prioritized Backlog

### P0 (Critical)
- None currently

### P1 (High Priority)
- SEO keyword integration (awaiting user's keywords)
- Backend API integration (when user requests)

### P2 (Medium Priority)
- Contact form with email integration
- Database models for services/bookings

## Known Limitations
- YouTube videos show "unavailable" in sandboxed test environments (works on deployed site)
- All data is mocked - no backend persistence yet

## Files of Reference
- `/app/frontend/src/components/BookingPage.jsx` - Planity booking page
- `/app/frontend/src/components/GiftVoucherSection.jsx` - Gift voucher amounts (€49-€114)
- `/app/frontend/src/components/GiftBestsellers.jsx` - Wellness packages carousel
- `/app/frontend/src/components/AboutPage.jsx` - Über uns page
- `/app/frontend/src/components/ContactPage.jsx` - Kontakt page
- `/app/frontend/src/data/mockData.js` - All content/data
- `/app/frontend/src/components/Header.jsx` - Navigation/mega menu
- `/app/frontend/src/components/ServicePage.jsx` - Service page template
- `/app/frontend/src/components/HeroSection.jsx` - Hero with video
- `/app/frontend/src/components/Testimonials.jsx` - Testimonials grid
- `/app/frontend/src/components/StudioLocations.jsx` - Studio card
- `/app/frontend/src/App.js` - Routes including /buchen, /ueber-uns, /kontakt
- `/app/frontend/public/index.html` - SEO meta tags, structured data
- `/app/frontend/public/sitemap.xml` - XML sitemap for search engines
- `/app/frontend/public/robots.txt` - Crawler directives
