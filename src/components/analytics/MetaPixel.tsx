"use client";

import Script from "next/script";
import { Suspense, useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import {
  META_PIXEL_ID,
  trackPageView,
  trackEvent,
  trackCustomEvent,
  setPixelConsent,
} from "@/lib/metaPixel";

export { trackEvent, trackCustomEvent, trackPageView, setPixelConsent };

interface MetaPixelProps {
  pixelId?: string;
}

/**
 * Handles tracking client-side route transitions in Next.js App Router.
 * Must be wrapped in a <Suspense> boundary due to useSearchParams().
 */
function MetaPixelNavigationTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstRender = useRef(true);
  const lastTrackedUrl = useRef<string | null>(null);

  useEffect(() => {
    const search = searchParams?.toString();
    const currentUrl = search ? `${pathname}?${search}` : pathname;

    // Skip the first render because the base inline script snippet
    // already executed `fbq('track', 'PageView')` on initial page load.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      lastTrackedUrl.current = currentUrl;
      return;
    }

    // Guard against duplicate page-views:
    // Prevents duplicates caused by React Strict Mode remounts,
    // template.tsx remounts, anchor hash changes, or redundant re-renders.
    if (lastTrackedUrl.current === currentUrl) {
      return;
    }

    lastTrackedUrl.current = currentUrl;
    trackPageView();
  }, [pathname, searchParams]);

  return null;
}

/**
 * MetaPixel Component
 * Injects official Meta Pixel base tracking script and listens for App Router navigations.
 */
export default function MetaPixel({
  pixelId = META_PIXEL_ID,
}: MetaPixelProps) {
  if (!pixelId) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "Meta Pixel ID is missing. Please set NEXT_PUBLIC_META_PIXEL_ID in your environment variables."
      );
    }
    return null;
  }

  const baseScript = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${pixelId}');
    fbq('track', 'PageView');
  `;

  return (
    <>
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: baseScript }}
      />
      <Suspense fallback={null}>
        <MetaPixelNavigationTracker />
      </Suspense>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
