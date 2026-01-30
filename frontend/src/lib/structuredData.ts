export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Prakun Thai Massage Hamburg",
  "image": "https://prakunmassage.de/og-image.jpg",
  "@id": "https://prakunmassage.de",
  "url": "https://prakunmassage.de",
  "telephone": "+49-40-22697033",
  "priceRange": "€€",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Winterhuder Weg 24",
    "addressLocality": "Hamburg",
    "postalCode": "22085",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 53.5753,
    "longitude": 10.0153
  },
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
  "sameAs": [
    "https://www.facebook.com/prakunmassage",
    "https://www.instagram.com/prakunmassage"
  ]
};

export const createServiceSchema = (service: {
  title: string;
  slug: string;
  description: string;
  priceFrom: number;
  duration: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": service.title,
  "provider": {
    "@type": "LocalBusiness",
    "name": "Prakun Thai Massage Hamburg",
    "url": "https://prakunmassage.de"
  },
  "description": service.description,
  "url": `https://prakunmassage.de/massage/${service.slug}`,
  "offers": {
    "@type": "Offer",
    "price": service.priceFrom,
    "priceCurrency": "EUR"
  }
});

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
