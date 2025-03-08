import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { WaveBackground } from '@/components/WaveBackground';
import logoLaravel from '@/public/logos/laravel.svg';
import logoMirage from '@/public/logos/mirage.svg';
import logoStatamic from '@/public/logos/statamic.svg';
import logoStaticKit from '@/public/logos/statickit.svg';
import logoTransistor from '@/public/logos/transistor.svg';
import logoTuple from '@/public/logos/tuple.svg';

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <WaveBackground />
      <div className="relative">
        <Container className="pb-16 pt-20 text-center lg:pt-32">
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
            A new{' '}
            <span className="relative whitespace-nowrap text-wo-blue">
              <span className="relative">swell</span>
            </span>{' '}
            in orthodontic practice management
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
            Intuitive tools designed to simplify operations, boost efficiency,
            and enhance patient care—all in one platform.
          </p>
          <div className="mt-10 justify-center">
            <Button href="/schedule-demo">Schedule a demo</Button>
          </div>
        </Container>
      </div>
    </div>
  );
}
