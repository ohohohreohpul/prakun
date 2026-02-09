export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Prakun Thai Massage Hamburg",
  "image": "https://prakunthaimassage.de/og-image.jpg",
  "@id": "https://prakunthaimassage.de",
  "url": "https://prakunthaimassage.de",
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
    "url": "https://prakunthaimassage.de"
  },
  "description": service.description,
  "url": `https://prakunthaimassage.de/massage/${service.slug}`,
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

export const reviewSchema = (reviews: Array<{
  author: string;
  rating: number;
  text: string;
  date?: string;
}>) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Prakun Thai Massage Hamburg",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length,
    "reviewCount": reviews.length,
    "bestRating": 5,
    "worstRating": 1
  },
  "review": reviews.map((review, index) => ({
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
    "datePublished": review.date || new Date().toISOString().split('T')[0]
  }))
});
