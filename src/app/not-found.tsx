import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import React from 'react';

export default function NotFound() {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <Container className="text-center">
        <p className="text-base font-semibold text-wo-blue">404</p>
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
          Page not found
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button href="/" color="blue">
            Go back home
          </Button>
        </div>
      </Container>
    </main>
  );
}
