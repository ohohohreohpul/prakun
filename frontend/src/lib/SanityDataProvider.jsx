import React, { createContext, useContext, useState, useEffect } from 'react';
import { sanityClient } from './sanity.client';
import * as mockData from '../data/mockData';

// Context for Sanity data
const SanityDataContext = createContext(null);

// Check if Sanity has content
async function checkSanityContent() {
  try {
    const count = await sanityClient.fetch(`count(*[_type == "service"])`);
    return count > 0;
  } catch (error) {
    console.warn('Sanity connection check failed:', error);
    return false;
  }
}

export function SanityDataProvider({ children }) {
  const [useSanity, setUseSanity] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkSanityContent().then(hasSanityContent => {
      setUseSanity(hasSanityContent);
      setIsLoading(false);
      if (hasSanityContent) {
        console.log('✅ Using Sanity CMS data');
      } else {
        console.log('📦 Using mock data (Sanity has no content yet)');
      }
    });
  }, []);

  return (
    <SanityDataContext.Provider value={{ useSanity, isLoading }}>
      {children}
    </SanityDataContext.Provider>
  );
}

export function useSanityDataContext() {
  return useContext(SanityDataContext);
}

// Hook that returns data from Sanity or falls back to mock data
export function useDataWithFallback(sanityQuery, mockDataKey, params = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { useSanity } = useSanityDataContext() || { useSanity: false };

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        setLoading(true);
        
        if (useSanity) {
          // Try Sanity first
          const sanityData = await sanityClient.fetch(sanityQuery, params);
          if (isMounted && sanityData && (Array.isArray(sanityData) ? sanityData.length > 0 : true)) {
            setData(sanityData);
            setLoading(false);
            return;
          }
        }
        
        // Fall back to mock data
        if (isMounted) {
          const fallbackData = mockData[mockDataKey];
          setData(fallbackData);
        }
      } catch (err) {
        console.warn('Data fetch error, using mock data:', err);
        if (isMounted) {
          setData(mockData[mockDataKey]);
          setError(err);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [sanityQuery, mockDataKey, useSanity, JSON.stringify(params)]);

  return { data, loading, error };
}

export default SanityDataProvider;
