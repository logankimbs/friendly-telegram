import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ScheduleDemoForm } from '@/components/ScheduleDemoForm';
import { scheduleDemoMetadata } from '@/utils/metadata';
import { Metadata } from 'next';

export const metadata: Metadata = scheduleDemoMetadata;

export default function ScheduleDemo() {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-white to-slate-50">
        <Container className="relative grid grid-cols-1 items-start gap-8 pb-20 md:grid-cols-2">
          <div className="mt-10 gap-x-6 gap-y-8 sm:grid-cols-2">
            <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
              Schedule a demo with WaveOrtho
            </h2>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              Discover how we can streamline your practice. Whether you have
              questions about our features, pricing, or the best solution for
              your needs, we’re here to help.
            </p>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              Let’s make things easy—schedule your demo today!
            </p>
          </div>

          <ScheduleDemoForm />
        </Container>
      </main>
      <Footer />
    </>
  );
}
