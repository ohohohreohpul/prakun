import { useState, useEffect, useCallback } from 'react';
import { sanityClient } from './sanity.client';

/**
 * Custom hook for fetching data from Sanity CMS
 * @param {string} query - GROQ query string
 * @param {object} params - Query parameters
 * @param {object} options - Options like skip
 * @returns {object} - { data, loading, error, refetch }
 */
export function useSanityData(query, params = {}, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(!options.skip);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    if (options.skip) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const result = await sanityClient.fetch(query, params);
      setData(result);
    } catch (err) {
      console.error('Sanity fetch error:', err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [query, JSON.stringify(params), options.skip]);

  useEffect(() => {
    let isMounted = true;

    const doFetch = async () => {
      if (options.skip) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const result = await sanityClient.fetch(query, params);
        if (isMounted) {
          setData(result);
        }
      } catch (err) {
        if (isMounted) {
          console.error('Sanity fetch error:', err);
          setError(err);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    doFetch();

    return () => {
      isMounted = false;
    };
  }, [query, JSON.stringify(params), options.skip]);

  return { data, loading, error, refetch: fetchData };
}

/**
 * Hook for fetching a single service by slug
 */
export function useService(slug) {
  const query = `
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
  
  return useSanityData(query, { slug }, { skip: !slug });
}

/**
 * Hook for fetching all services
 */
export function useServices() {
  const query = `
    *[_type == "service"] | order(isPopular desc, order asc) {
      _id,
      title,
      slug,
      subtitle,
      shortDescription,
      duration,
      priceFrom,
      category,
      isPopular,
      "cardImage": cardImage.asset->url,
    }
  `;
  
  return useSanityData(query);
}

/**
 * Hook for fetching testimonials
 */
export function useTestimonials() {
  const query = `
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
  
  return useSanityData(query);
}

/**
 * Hook for fetching FAQ items
 */
export function useFAQ() {
  const query = `
    *[_type == "faq"] | order(order asc) {
      _id,
      question,
      answer,
      category,
    }
  `;
  
  return useSanityData(query);
}

/**
 * Hook for fetching gift vouchers
 */
export function useGiftVouchers() {
  const query = `
    *[_type == "giftVoucher" && isActive == true] | order(order asc) {
      _id,
      amount,
      description,
      isFeatured,
    }
  `;
  
  return useSanityData(query);
}

/**
 * Hook for fetching contact info
 */
export function useContact() {
  const query = `
    *[_type == "contact"][0] {
      _id,
      phone,
      email,
      address,
      city,
      zipCode,
      hoursOfOperation,
      socialMedia,
      mapEmbedUrl,
    }
  `;
  
  return useSanityData(query);
}

/**
 * Hook for fetching about page content
 */
export function useAbout() {
  const query = `
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
  
  return useSanityData(query);
}

export default useSanityData;
