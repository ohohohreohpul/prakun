// Build-time review loader for the homepage carousel.
// With GOOGLE_PLACES_API_KEY + GOOGLE_PLACE_ID set, pulls the latest Google
// reviews (Places API New, max 5 per request) on every build. Without them,
// or if the request fails, it falls back to the curated list in mockData.js.
import { testimonials, studio } from '../data/mockData';

const PLACES_ENDPOINT = 'https://places.googleapis.com/v1/places';
const FIELD_MASK = 'rating,userRatingCount,googleMapsUri,reviews';
const MIN_RATING = 4;
const MIN_TEXT_LENGTH = 40;
const REQUEST_TIMEOUT_MS = 8000;

const toReview = (raw, index) => ({
  id: `google-${index}`,
  text: (raw.originalText?.text || raw.text?.text || '').trim(),
  author: raw.authorAttribution?.displayName || 'Google-Nutzer',
  authorUrl: raw.authorAttribution?.uri || null,
  source: 'Google',
  rating: Math.round(raw.rating || 0),
  date: raw.publishTime ? raw.publishTime.slice(0, 10) : null,
});

const isShowable = (review) =>
  review.rating >= MIN_RATING && review.text.length >= MIN_TEXT_LENGTH;

const fallback = () => ({
  reviews: testimonials,
  rating: studio.rating,
  ratingCount: null,
  mapsUrl: null,
  isLive: false,
});

async function fetchGooglePlace(apiKey, placeId) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  try {
    const res = await fetch(`${PLACES_ENDPOINT}/${encodeURIComponent(placeId)}?languageCode=de`, {
      headers: { 'X-Goog-Api-Key': apiKey, 'X-Goog-FieldMask': FIELD_MASK },
      signal: controller.signal,
    });
    if (!res.ok) {
      throw new Error(`Places API ${res.status}: ${(await res.text()).slice(0, 200)}`);
    }
    return await res.json();
  } finally {
    clearTimeout(timer);
  }
}

export async function getReviews() {
  const apiKey = import.meta.env.GOOGLE_PLACES_API_KEY;
  const placeId = import.meta.env.GOOGLE_PLACE_ID;
  if (!apiKey || !placeId) return fallback();

  try {
    const place = await fetchGooglePlace(apiKey, placeId);
    const live = (place.reviews || []).map(toReview).filter(isShowable);
    // Newest Google reviews first, then curated ones so the carousel never runs short.
    const curated = testimonials.filter((t) => !live.some((l) => l.author === t.author));
    return {
      reviews: [...live, ...curated],
      rating: place.rating ?? studio.rating,
      ratingCount: place.userRatingCount ?? null,
      mapsUrl: place.googleMapsUri ?? null,
      isLive: live.length > 0,
    };
  } catch (error) {
    console.warn(`[reviews] Google reviews unavailable, using curated list: ${error.message}`);
    return fallback();
  }
}
