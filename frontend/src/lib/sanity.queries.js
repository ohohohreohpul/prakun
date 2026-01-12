// GROQ Queries for Sanity CMS

// Services/Massages
export const servicesQuery = `
  *[_type == "service"] | order(isPopular desc, order asc) {
    _id,
    title,
    titleEn,
    slug,
    subtitle,
    shortDescription,
    description,
    duration,
    priceFrom,
    pricing,
    benefits,
    category,
    isPopular,
    "heroImage": heroImage.asset->url,
    "cardImage": cardImage.asset->url,
  }
`;

export const singleServiceQuery = `
  *[_type == "service" && slug.current == $slug][0] {
    _id,
    title,
    titleEn,
    slug,
    subtitle,
    shortDescription,
    description,
    duration,
    priceFrom,
    pricing,
    benefits,
    category,
    isPopular,
    "heroImage": heroImage.asset->url,
    "cardImage": cardImage.asset->url,
  }
`;

// About Page
export const aboutQuery = `
  *[_type == "about"][0] {
    _id,
    title,
    intro,
    story,
    mission,
    stats,
    values,
    "teamImage": teamImage.asset->url,
  }
`;

// Contact Information
export const contactQuery = `
  *[_type == "contact"][0] {
    _id,
    phone,
    email,
    address,
    city,
    zipCode,
    hoursOfOperation,
    socialMedia,
    "mapEmbedUrl": mapEmbedUrl,
  }
`;

// FAQ
export const faqQuery = `
  *[_type == "faq"] | order(order asc) {
    _id,
    question,
    answer,
    category,
  }
`;

// Testimonials
export const testimonialsQuery = `
  *[_type == "testimonial" && isPublished == true] | order(order asc) {
    _id,
    clientName,
    content,
    rating,
    serviceReceived,
    isVideo,
    videoUrl,
    "clientImage": clientImage.asset->url,
  }
`;

// Gift Vouchers
export const giftVouchersQuery = `
  *[_type == "giftVoucher" && isActive == true] | order(order asc) {
    _id,
    amount,
    description,
    isFeatured,
  }
`;

// Site Settings (global)
export const siteSettingsQuery = `
  *[_type == "siteSettings"][0] {
    _id,
    siteName,
    siteDescription,
    "logo": logo.asset->url,
    "favicon": favicon.asset->url,
  }
`;

// Benefits Section
export const benefitsQuery = `
  *[_type == "benefit"] | order(order asc) {
    _id,
    title,
    description,
    "image": image.asset->url,
  }
`;

// Packages (Wellness Pakete)
export const packagesQuery = `
  *[_type == "package"] | order(order asc) {
    _id,
    title,
    price,
    description,
    isNew,
    "image": image.asset->url,
  }
`;
