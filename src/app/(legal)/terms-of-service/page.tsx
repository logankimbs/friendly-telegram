import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
};

export default function TermsOfService() {
  return (
    <>
      <Header />
      <main>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-[37.5rem] pb-24 pt-20 text-center">
            <h1 className="font-display text-4xl tracking-tight text-slate-900 sm:text-5xl">
              Terms of service
            </h1>
            <p className="mt-4 text-base/7 text-slate-600">
              Last updated on November 26, 2024
            </p>
          </div>
        </div>

        <div className="relative px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[40rem]">...</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
