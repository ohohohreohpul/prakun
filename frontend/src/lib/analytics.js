export const trackEvent = (eventName, eventParams = {}) => {
  // window.prakunTrack (ConsentAndTracking.astro) only sends with cookie consent
  if (typeof window !== 'undefined' && typeof window.prakunTrack === 'function') {
    window.prakunTrack(eventName, eventParams);
  }
};

export const trackServiceView = (serviceName) => {
  trackEvent('service_view', {
    service_name: serviceName
  });
};
