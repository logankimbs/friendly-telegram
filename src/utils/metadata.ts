import { Metadata } from 'next';

export const rootMetadata: Metadata = {
  title: {
    template: '%s - WaveOrtho',
    default: 'Orthodontic practice management - WaveOrtho',
  },
  description:
    'WaveOrtho is the most comprehensive orthodontic practice management software for managing and growing your practice.',
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-video-preview': -1,
    'max-image-preview': 'large',
  },
  keywords: [
    'orthodontic office management software',
    'orthodontic practice management software',
    'orthodontic business management software',
  ],
  openGraph: {
    title: 'Orthodontic practice management software',
    description:
      'WaveOrtho is the most comprehensive orthodontic practice management software for managing and growing your practice.',
    url: 'https://www.waveortho.com',
    siteName: 'WaveOrtho',
    locale: 'en_US',
    type: 'website',
    images: {
      url: 'https://www.waveortho.com/open-graph/waveortho.jpg',
      width: 1200,
      height: 630,
      alt: 'WaveOrtho orthodontic practice management software',
    },
  },
};

export const scheduleDemoMetadata: Metadata = {
  title: 'Schedule demo',
  description: 'Schedule a demo with WaveOrtho',
  openGraph: {
    title: 'Schedule demo',
    description: 'Discover how we can streamline your orthodontic practice.',
    url: 'https://www.waveortho.com/shedule-demo',
    siteName: 'WaveOrtho',
    locale: 'en_US',
    type: 'website',
    images: {
      url: 'https://www.waveortho.com/open-graph/waveortho.jpg',
      width: 1200,
      height: 630,
      alt: 'WaveOrtho orthodontic practice management software',
    },
  },
};
