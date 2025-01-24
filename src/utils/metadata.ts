import { Metadata } from 'next';

export const rootMetadata: Metadata = {
  title: {
    template: '%s - WaveOrtho',
    default: 'WaveOrtho - Orthodontic practice management',
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
    url: 'https://www.waveortho.com/',
    title: 'Orthodontic Practice Management Software',
    description:
      'WaveOrtho is the most comprehensive orthodontic practice management software for managing and growing your practice.',
    images: [],
    siteName: 'WaveOrtho',
    type: 'website',
  },
  icons: {},
};
