import '@/styles/tailwind.css';
import { rootMetadata } from '@/utils/metadata';
import clsx from 'clsx';
import { type Metadata } from 'next';
import { Inter, Lexend } from 'next/font/google';
import Script from 'next/script';
import React from 'react';

export const metadata: Metadata = rootMetadata;

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">{children}</body>

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-134344710-1"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'UA-134344710-1');
        `}
      </Script>

      {/* Social Intents */}
      <Script
        src="https://www.socialintents.com/api/socialintents.1.3.js#2c9fa5636221129d01622c450abf06ee"
        type="text/javascript"
        strategy="afterInteractive"
      />
    </html>
  );
}
