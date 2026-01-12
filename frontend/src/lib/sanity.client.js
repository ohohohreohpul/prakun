import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Sanity client configuration
export const sanityClient = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: process.env.REACT_APP_SANITY_DATASET || 'production',
  apiVersion: process.env.REACT_APP_SANITY_API_VERSION || '2024-01-01',
  useCdn: true, // Use CDN for faster responses
  token: process.env.REACT_APP_SANITY_TOKEN, // For authenticated requests
});

// Image URL builder
const builder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
  return builder.image(source);
}

// Helper to fetch data with error handling
export async function sanityFetch(query, params = {}) {
  try {
    const data = await sanityClient.fetch(query, params);
    return data;
  } catch (error) {
    console.error('Sanity fetch error:', error);
    throw error;
  }
}

export default sanityClient;
