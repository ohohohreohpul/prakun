// ============================================================
// Structured Data / JSON-LD schemas for Prakun Thai Massage
// Hamburg – optimised for SEO, GEO (AI Search) and AEO
// ============================================================

import { servicesDetailed } from '../data/mockData';

export const SITE_URL = "https://www.prakunthaimassage.de";
export const BUSINESS_ID = `${SITE_URL}/#business`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

const DEFAULT_IMAGE = "/prakun-thai-massage-hamburg-og.jpg";

const toAbsolute = (path: string): string => (path.startsWith("http") ? path : `${SITE_URL}${path}`);

// ---- 1. LocalBusiness (HealthAndBeautyBusiness) – the single brand entity every page points to ----
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HealthAndBeautyBusiness", "DaySpa"],
  "@id": "https://www.prakunthaimassage.de/#business",
  "name": "Prakun Thai Massage Hamburg",
  "alternateName": ["Prakun Massage Winterhude", "Prakun Thaimassage Hamburg"],
  "founder": {
    "@type": "Person",
    "@id": "https://www.prakunthaimassage.de/#founder",
    "name": "Ailadda Sonnabend"
  },
  "description": "Thai-Massage-Studio in Hamburg-Uhlenhorst an der Grenze zu Winterhude, 5 Gehminuten von der U3 Mundsburg. Seit 2012 traditionelle Thai-Massage, Ganzkörper- und Teilkörpermassage, Aromaöl, Hot Stone, Kräuterstempel, Ayurveda Abhyanga, Lomi Lomi, Fuß- und Schwangerschaftsmassage – auf Wunsch ohne Öl.",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.prakunthaimassage.de/icon-512.png",
    "width": 512,
    "height": 512
  },
  "image": [
    {
      "@type": "ImageObject",
      "url": "https://www.prakunthaimassage.de/prakun-thai-massage-hamburg-studio.jpg",
      "caption": "Wellness-Ambiente – Prakun Thai Massage Hamburg",
      "width": 2048,
      "height": 2048
    },
    {
      "@type": "ImageObject",
      "url": "https://www.prakunthaimassage.de/prakun-thai-massage-hamburg-behandlung.jpg",
      "caption": "Thai-Massage – Prakun Thai Massage Hamburg",
      "width": 2048,
      "height": 2048
    },
    "https://www.prakunthaimassage.de/prakun-thai-massage-hamburg-og.jpg"
  ],
  "url": "https://www.prakunthaimassage.de",
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
    "latitude": 53.57182,
    "longitude": 10.02554
  },
  "hasMap": "https://maps.google.com/?cid=13843017141683311872",
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
    },
    {
      "@type": "Place",
      "name": "Hohenfelde"
    },
    {
      "@type": "Place",
      "name": "Eilbek"
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
      "opens": "11:00",
      "closes": "18:00"
    }
  ],
  "knowsAbout": [
    "Thai Massage",
    "Thaimassage",
    "Wellness Massage",
    "Aromatherapie",
    "Hot Stone Massage",
    "Ayurveda Massage",
    "Schwangerschaftsmassage",
    "Lomi Lomi Massage",
    "Kräuterstempel Massage"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Massage-Angebote Hamburg",
    "itemListElement": Object.values(servicesDetailed).map((service) => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": `${service.title} Hamburg`,
        "url": `https://www.prakunthaimassage.de/massage/${service.slug}/`
      },
      "priceSpecification": {
        "@type": "PriceSpecification",
        "minPrice": service.priceFrom,
        "priceCurrency": "EUR"
      }
    }))
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+49-40-22697033",
    "contactType": "customer service",
    "availableLanguage": ["German", "English", "Thai"],
    "areaServed": "DE"
  },
  "potentialAction": {
    "@type": "ReserveAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.prakunthaimassage.de/buchen/",
      "inLanguage": "de-DE",
      "actionPlatform": [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform"
      ]
    },
    "result": {
      "@type": "Reservation",
      "name": "Massage-Termin buchen"
    }
  },
  "sameAs": [
    "https://www.instagram.com/prakunmassage",
    "https://www.facebook.com/prakunmassage",
    "https://g.page/prakunthaimassage",
    "https://www.yelp.com/biz/prakun-thai-massage-hamburg",
    "https://www.treatwell.de/ort/prakun-thai-massage/"
  ]
};

// ---- 2a. WebSite entity (brand/site identity for search and AI engines) ----
export const siteLinksSearchBoxSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.prakunthaimassage.de/#website",
  "url": "https://www.prakunthaimassage.de",
  "name": "Prakun Thai Massage Hamburg",
  "description": "Professionelle Thai-Massage im Herzen von Hamburg seit 2012.",
  "inLanguage": "de-DE",
  "publisher": {
    "@id": "https://www.prakunthaimassage.de/#business"
  }
};

// ---- 2. Organization – same entity as the LocalBusiness (one @id, so AI engines see one brand) ----
export const organizationSchema = localBusinessSchema;

// ---- 3. Founder / Person schema ----
export const founderSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.prakunthaimassage.de/#founder",
  "name": "Ailadda Sonnabend",
  "jobTitle": "Gründerin & Inhaberin",
  "worksFor": {
    "@id": "https://www.prakunthaimassage.de/#business"
  },
  "description": "Ailadda Sonnabend brachte das Wissen und die Leidenschaft für traditionelle Thai-Massage direkt aus Thailand nach Hamburg. Sie gründete Prakun Thai Massage im Jahr 2012 mit der Mission, authentische Heilkunst nach Winterhude zu bringen.",
  "knowsAbout": ["Thai Massage", "Thaimassage", "Traditionelle Heilkunst", "Aromatherapie", "Wellness"],
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
  image?: string;
  pricing?: Array<{ duration: string; price: number }>;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `https://www.prakunthaimassage.de/massage/${service.slug}/#service`,
  "name": `${service.title} Hamburg`,
  "serviceType": service.title,
  "description": service.description,
  "url": `https://www.prakunthaimassage.de/massage/${service.slug}/`,
  ...(service.image ? { "image": toAbsolute(service.image) } : {}),
  "provider": {
    "@id": "https://www.prakunthaimassage.de/#business"
  },
  "areaServed": {
    "@type": "City",
    "name": "Hamburg"
  },
  // Full price ladder so AI/search parsers see every duration tier, not just the cheapest
  "offers": (service.pricing && service.pricing.length > 0)
    ? service.pricing.map((tier) => ({
        "@type": "Offer",
        "name": `${service.title} ${tier.duration}`,
        "price": tier.price,
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "url": "https://www.prakunthaimassage.de/buchen/"
      }))
    : {
        "@type": "Offer",
        "price": service.priceFrom,
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "url": "https://www.prakunthaimassage.de/buchen/"
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

// ---- 8. ItemList schema (services index) ----
export const serviceListSchema = (services: Array<{ title: string; slug: string; description: string }>) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Thai Massage Angebote Hamburg – Prakun Thai Massage",
  "description": "Alle Massage-Behandlungen bei Prakun Thai Massage Hamburg: Thai-Massage, Aromatherapie, Hot Stone, Ayurveda und mehr.",
  "url": "https://www.prakunthaimassage.de/leistungen/",
  "numberOfItems": services.length,
  "itemListElement": services.map((service, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": `${service.title} Hamburg`,
    "description": service.description,
    "url": `https://www.prakunthaimassage.de/massage/${service.slug}/`
  }))
});

// ---- 9. BlogPosting (blog articles) ----
export const blogPostingSchema = (post: {
  url: string;
  title: string;
  description: string;
  datePublished: Date;
  dateModified?: Date;
  image?: string;
  keywords?: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "@id": `${post.url}#article`,
  "headline": post.title,
  "description": post.description,
  "url": post.url,
  "mainEntityOfPage": { "@id": `${post.url}#webpage` },
  "datePublished": post.datePublished.toISOString().slice(0, 10),
  "dateModified": (post.dateModified ?? post.datePublished).toISOString().slice(0, 10),
  "inLanguage": "de-DE",
  "image": toAbsolute(post.image ?? DEFAULT_IMAGE),
  ...(post.keywords?.length ? { "keywords": post.keywords.join(", ") } : {}),
  "author": { "@id": BUSINESS_ID },
  "publisher": { "@id": BUSINESS_ID },
  "about": { "@id": BUSINESS_ID }
});

// ---- 10. @graph builder – one connected entity graph per page ----
type SchemaNode = Record<string, unknown>;

interface PageGraphInput {
  url: string;
  title: string;
  description: string;
  image: string;
  nodes: SchemaNode[];
  pageType?: string;
  dateModified?: string;
}

const NODE_ID_SUFFIX: Record<string, string> = {
  BreadcrumbList: "#breadcrumb",
  FAQPage: "#faq",
  ItemList: "#itemlist",
  Service: "#service",
};

const withoutContext = ({ "@context": _context, ...rest }: SchemaNode): SchemaNode => rest;

const assignId = (node: SchemaNode, url: string): SchemaNode => {
  if (node["@id"]) return node;
  const suffix = NODE_ID_SUFFIX[String(node["@type"])];
  return suffix ? { ...node, "@id": `${url}${suffix}` } : node;
};

const dedupeById = (nodes: SchemaNode[]): SchemaNode[] => {
  const seen = new Set<unknown>();
  return nodes.filter((node) => {
    const id = node["@id"];
    if (!id) return true;
    if (seen.has(id)) return false;
    seen.add(id);
    return true;
  });
};

/**
 * Wraps a page's schema nodes in a single @graph together with the site-wide
 * WebSite + LocalBusiness entities and a WebPage node that links them all.
 * AI search engines resolve the whole page as one connected entity this way.
 */
export const buildPageGraph = ({ url, title, description, image, nodes, pageType = "WebPage", dateModified }: PageGraphInput) => {
  const pageNodes = nodes.map((node) => assignId(withoutContext(node), url));
  const breadcrumb = pageNodes.find((node) => node["@type"] === "BreadcrumbList");
  const faq = pageNodes.find((node) => node["@type"] === "FAQPage");
  const linkedFaq = faq ? { ...faq, "isPartOf": { "@id": `${url}#webpage` } } : undefined;

  const webPage: SchemaNode = {
    "@type": pageType,
    "@id": `${url}#webpage`,
    "url": url,
    "name": title,
    "description": description,
    "inLanguage": "de-DE",
    "isPartOf": { "@id": WEBSITE_ID },
    "about": { "@id": BUSINESS_ID },
    "primaryImageOfPage": { "@type": "ImageObject", "url": toAbsolute(image) },
    ...(dateModified ? { "dateModified": dateModified } : {}),
    ...(breadcrumb ? { "breadcrumb": { "@id": breadcrumb["@id"] } } : {}),
  };

  const graph = dedupeById([
    withoutContext(siteLinksSearchBoxSchema),
    withoutContext(localBusinessSchema),
    webPage,
    ...pageNodes.map((node) => (node === faq && linkedFaq ? linkedFaq : node)),
  ]);

  return { "@context": "https://schema.org", "@graph": graph };
};

