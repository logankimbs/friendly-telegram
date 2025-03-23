'use client';

import Script from 'next/script';

const NODE_ENV = process.env.NODE_ENV;
const SOCIAL_INTENTS_ID = process.env.NEXT_PUBLIC_SOCIAL_INTENTS_ID;

export default function SocialIntents() {
  if (NODE_ENV !== 'production' || !SOCIAL_INTENTS_ID) return null;

  return (
    <Script
      src={`https://www.socialintents.com/api/socialintents.1.3.js#${SOCIAL_INTENTS_ID}`}
      type="text/javascript"
      strategy="afterInteractive"
    />
  );
}
