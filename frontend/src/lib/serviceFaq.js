import { serviceAnswers, STUDIO_LOCATION_ANSWER } from '../data/serviceAnswers';

const formatPriceList = (pricing) =>
  pricing.map(({ duration, price }) => `${duration.replace(' min', ' Min.')} ${price} €`).join(', ');

/**
 * Builds the visible FAQ list for a service page (also used for FAQPage schema,
 * so markup always matches on-page content).
 * @param {{ title: string, slug: string, pricing?: Array<{duration: string, price: number}>, faq?: Array<{question: string, answer: string}> }} service
 * @returns {Array<{question: string, answer: string}>}
 */
export const buildServiceFaq = (service) => {
  const existing = service.faq ?? [];
  const hasPriceQuestion = existing.some((f) => /kostet|preis/i.test(f.question));
  const priceFaq = !hasPriceQuestion && service.pricing?.length
    ? [{
        question: `Was kostet eine ${service.title} in Hamburg?`,
        answer: `Bei Prakun Thai Massage in Hamburg kostet die ${service.title}: ${formatPriceList(service.pricing)}. Termine buchen Sie online oder telefonisch unter 040 22697033.`,
      }]
    : [];
  const suitable = serviceAnswers[service.slug]?.suitableFor;
  const suitableFaq = suitable
    ? [{ question: `Für wen eignet sich eine ${service.title}?`, answer: suitable }]
    : [];
  const locationFaq = [{ question: `Wo kann ich eine ${service.title} in Hamburg buchen?`, answer: STUDIO_LOCATION_ANSWER }];
  return [...priceFaq, ...suitableFaq, ...existing, ...locationFaq];
};
