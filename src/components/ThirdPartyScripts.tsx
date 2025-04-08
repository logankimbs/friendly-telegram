'use client';

import Script from 'next/script';

const NODE_ENV = process.env.NODE_ENV;
const GOOGLE_ANALYTICS_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
const SOCIAL_INTENTS_ID = process.env.NEXT_PUBLIC_SOCIAL_INTENTS_ID;

function GoogleAnalytics() {
  if (NODE_ENV !== 'production' || !GOOGLE_ANALYTICS_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ANALYTICS_ID}');
        `}
      </Script>
    </>
  );
}

function SocialIntents() {
  if (NODE_ENV !== 'production' || !SOCIAL_INTENTS_ID) return null;

  return (
    <Script
      src={`https://www.socialintents.com/api/socialintents.1.3.js#${SOCIAL_INTENTS_ID}`}
      type="text/javascript"
      strategy="afterInteractive"
    />
  );
}

export function ThirdPartyScripts() {
  return (
    <>
      <GoogleAnalytics />
      <SocialIntents />
      {/* todo: add google recaptcha */}
    </>
  );
}
