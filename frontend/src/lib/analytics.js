export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

export const trackPhoneClick = (source) => {
  trackEvent('phone_click', {
    event_category: 'engagement',
    event_label: source,
    value: 1
  });
};

export const trackBookingClick = (service = 'general') => {
  trackEvent('booking_click', {
    event_category: 'conversion',
    event_label: service,
    value: 1
  });
};

export const trackServiceView = (serviceName) => {
  trackEvent('service_view', {
    event_category: 'engagement',
    event_label: serviceName
  });
};

export const trackFAQInteraction = (question) => {
  trackEvent('faq_interaction', {
    event_category: 'engagement',
    event_label: question
  });
};

export const trackGiftVoucherClick = () => {
  trackEvent('gift_voucher_click', {
    event_category: 'conversion',
    value: 1
  });
};

export const trackFormSubmission = (formType) => {
  trackEvent('form_submission', {
    event_category: 'conversion',
    event_label: formType,
    value: 1
  });
};
