/**
 * Global Site Configuration
 * Handles dynamic site URL resolution for production, staging, and custom domains.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://astroachariyadebdutta.com");
