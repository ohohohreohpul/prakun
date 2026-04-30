// ============================================================
// Structured Data / JSON-LD schemas for Prakun Thai Massage
// Hamburg – optimised for SEO, GEO (AI Search) and AEO
// ============================================================

// ---- 1. LocalBusiness (HealthAndBeautyBusiness) ----
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HealthAndBeautyBusiness"],
  "@id": "https://prakunthaimassage.de/#business",
  "name": "Prakun Thai Massage Hamburg",
  "alternateName": "Prakun Massage Winterhude",
  "description": "Professionelle Thai-Massage im Herzen von Hamburg. Seit 2012 bieten wir authentische Thai-Massagen, Aromaöl-Massagen, Hot Stone, Ayurveda und Wellness-Pakete in Winterhude. Über 10.000 zufriedene Kunden, 4,9 Sterne bei Google.",
  "image": [
    "https://prakunthaimassage.de/og-image.jpg"
  ],
  "url": "https://prakunthaimassage.de",
  "telephone": "+49-40-22697033",
  "email": "info@prakunthaimassage.de",
  "priceRange": "€€",
  "currenciesAccepted": "EUR",
  "paymentAccepted": "Cash, Credit Card, EC-Karte",
  "foundingDate": "2012",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "minValue": 5,
    "maxValue": 15
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Winterhuder Weg 24",
    "addressLocality": "Hamburg",
    "addressRegion": "Hamburg",
    "postalCode": "22085",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 53.5753,
    "longitude": 10.0153
  },
  "hasMap": "https://maps.google.com/?q=Winterhuder+Weg+24,+22085+Hamburg",
  "areaServed": [
    {
      "@type": "City",
      "name": "Hamburg"
    },
    {
      "@type": "Place",
      "name": "Winterhude"
    },
    {
      "@type": "Place",
      "name": "Barmbek"
    },
    {
      "@type": "Place",
      "name": "Uhlenhorst"
    },
    {
      "@type": "Place",
      "name": "Eppendorf"
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "10:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "10:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Sunday"],
      "opens": "11:00",
      "closes": "17:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "200",
    "bestRating": "5",
    "worstRating": "1"
  },
  "knowsAbout": [
    "Thai Massage",
    "Wellness Massage",
    "Aromatherapie",
    "Hot Stone Massage",
    "Ayurveda Massage",
    "Schwangerschaftsmassage",
    "Lomi Lomi Massage",
    "Kräuterstempel Massage"
  ],
  "sameAs": [
    "https://www.instagram.com/prakunmassage",
    "https://www.facebook.com/prakunmassage",
    "https://g.page/prakunthaimassage"
  ]
};

// ---- 2a. SiteLinksSearchBox (signals Google: homepage is canonical brand page) ----
export const siteLinksSearchBoxSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://prakunthaimassage.de/#website",
  "url": "https://prakunthaimassage.de",
  "name": "Prakun Thai Massage Hamburg",
  "description": "Professionelle Thai-Massage im Herzen von Hamburg seit 2012.",
  "publisher": {
    "@id": "https://prakunthaimassage.de/#business"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://prakunthaimassage.de/leistungen?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

// ---- 2. Organization schema (brand entity for AI engines) ----
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://prakunthaimassage.de/#organization",
  "name": "Prakun Thai Massage Hamburg",
  "alternateName": "Prakun Massage",
  "url": "https://prakunthaimassage.de",
  "logo": {
    "@type": "ImageObject",
    "url": "https://prakunthaimassage.de/og-image.jpg",
    "width": 1200,
    "height": 630
  },
  "description": "Prakun – das Thai-Wort für Dankbarkeit – steht für authentische Thai-Massage in Hamburg seit 2012. Gegründet mit der Vision, traditionelle Heilkunst aus Thailand nach Hamburg zu bringen.",
  "foundingDate": "2012",
  "foundingLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hamburg",
      "addressCountry": "DE"
    }
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+49-40-22697033",
    "contactType": "customer service",
    "availableLanguage": ["German", "English", "Thai"],
    "areaServed": "DE"
  },
  "sameAs": [
    "https://www.instagram.com/prakunmassage",
    "https://www.facebook.com/prakunmassage"
  ]
};

// ---- 3. Founder / Person schema ----
export const founderSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Prakun-Gründerin",
  "jobTitle": "Gründerin & Inhaberin",
  "worksFor": {
    "@id": "https://prakunthaimassage.de/#organization"
  },
  "description": "Brachte das Wissen und die Leidenschaft für traditionelle Thai-Massage direkt aus Thailand nach Hamburg. Gründete Prakun Thai Massage im Jahr 2012 mit der Mission, authentische Heilkunst nach Winterhude zu bringen.",
  "knowsAbout": ["Thai Massage", "Traditionelle Heilkunst", "Aromatherapie", "Wellness"],
  "alumniOf": {
    "@type": "Organization",
    "name": "Traditionelle Thai-Massage-Schule",
    "addressCountry": "TH"
  }
};

// ---- 4. Service schema ----
export const createServiceSchema = (service: {
  title: string;
  slug: string;
  description: string;
  priceFrom: number;
  duration: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `https://prakunthaimassage.de/massage/${service.slug}#service`,
  "name": `${service.title} Hamburg`,
  "serviceType": service.title,
  "description": service.description,
  "url": `https://prakunthaimassage.de/massage/${service.slug}`,
  "provider": {
    "@id": "https://prakunthaimassage.de/#business"
  },
  "areaServed": {
    "@type": "City",
    "name": "Hamburg"
  },
  "offers": {
    "@type": "Offer",
    "price": service.priceFrom,
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock",
    "url": "https://prakunthaimassage.de/buchen"
  }
});

// ---- 5. BreadcrumbList schema ----
export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

// ---- 6. FAQPage schema ----
export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// ---- 7. Review schema (aggregateRating lives on localBusinessSchema only) ----
export const reviewSchema = (reviews: Array<{
  author: string;
  rating: number;
  text: string;
  date?: string;
}>) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://prakunthaimassage.de/#business",
  "name": "Prakun Thai Massage Hamburg",
  "review": reviews.map((review) => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating,
      "bestRating": 5,
      "worstRating": 1
    },
    "reviewBody": review.text,
    "datePublished": review.date
  }))
});

// ---- 8. ItemList schema (services index) ----
export const serviceListSchema = (services: Array<{ title: string; slug: string; description: string }>) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Thai Massage Angebote Hamburg – Prakun Thai Massage",
  "description": "Alle Massage-Behandlungen bei Prakun Thai Massage Hamburg: Thai-Massage, Aromatherapie, Hot Stone, Ayurveda und mehr.",
  "url": "https://prakunthaimassage.de/leistungen",
  "numberOfItems": services.length,
  "itemListElement": services.map((service, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": `${service.title} Hamburg`,
    "description": service.description,
    "url": `https://prakunthaimassage.de/massage/${service.slug}`
  }))
});

// ---- 9. HowTo schema (for service pages) ----
export const createHowToSchema = (service: {
  title: string;
  slug: string;
  steps?: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": `${service.title} buchen in Hamburg`,
  "description": `So buchen Sie Ihre ${service.title} bei Prakun Thai Massage Hamburg in Winterhude.`,
  "step": (service.steps || [
    "Wählen Sie Ihre gewünschte Behandlungsdauer auf unserer Website aus.",
    "Klicken Sie auf 'Termin buchen' und wählen Sie Ihr bevorzugtes Datum und Uhrzeit.",
    "Bestätigen Sie Ihre Buchung – die Bestätigung erhalten Sie sofort per E-Mail.",
    "Kommen Sie entspannt zu uns: Winterhuder Weg 24, 22085 Hamburg.",
    "Genießen Sie Ihre Behandlung – unser zertifiziertes Team kümmert sich um alles."
  ]).map((stepText, index) => ({
    "@type": "HowToStep",
    "position": index + 1,
    "name": stepText
  })),
  "tool": [
    {
      "@type": "HowToTool",
      "name": "Online-Buchungssystem unter prakunthaimassage.de/buchen"
    }
  ],
  "supply": [
    {
      "@type": "HowToSupply",
      "name": "Komfortable Kleidung oder Massagekleidung wird gestellt"
    }
  ]
});
