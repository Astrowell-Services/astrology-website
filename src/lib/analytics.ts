declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * Push custom tracking events to Google Tag Manager dataLayer
 */
export function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      timestamp: new Date().toISOString(),
      ...params,
    });
  }
}
