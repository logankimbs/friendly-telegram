import GoogleAnalytics from '@/components/GoogleAnalytics';
import SocialIntents from '@/components/SocialIntents';
import '@/styles/tailwind.css';
import { rootMetadata } from '@/utils/metadata';
import clsx from 'clsx';
import { type Metadata } from 'next';
import { Inter, Lexend } from 'next/font/google';
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

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const htmlClasses = clsx(
    'h-full scroll-smooth bg-white antialiased',
    inter.variable,
    lexend.variable,
  );

  return (
    <html lang="en" className={htmlClasses}>
      <body className="flex h-full flex-col">{children}</body>
      <GoogleAnalytics />
      <SocialIntents />
    </html>
  );
}
