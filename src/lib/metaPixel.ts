/**
 * Meta Pixel Utility & Event Helpers
 * Provides type-safe wrappers around window.fbq for client-side event tracking.
 */

export const META_PIXEL_ID =
  process.env.NEXT_PUBLIC_META_PIXEL_ID || "3126379687589468";

/**
 * Tracks a standard PageView event.
 */
export const trackPageView = (): void => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "PageView");
  }
};

/**
 * Tracks a standard Meta Pixel event (e.g., 'Lead', 'Contact', 'Schedule').
 * Note: Never transmit sensitive personal data (PII) such as birth time, Gotra, or full address.
 */
export const trackEvent = (
  eventName: string,
  parameters: Record<string, unknown> = {}
): void => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", eventName, parameters);
  }
};

/**
 * Tracks a custom Meta Pixel event.
 */
export const trackCustomEvent = (
  eventName: string,
  parameters: Record<string, unknown> = {}
): void => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("trackCustom", eventName, parameters);
  }
};

/**
 * Updates consent state with Meta Pixel (for future Cookie Consent integration).
 */
export const setPixelConsent = (granted: boolean): void => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("consent", granted ? "grant" : "revoke");
  }
};
