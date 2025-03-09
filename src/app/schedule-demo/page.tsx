import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { TextField } from '@/components/Fields';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Schedule Demo',
};

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

          <form
            action="#"
            className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
          >
            <TextField
              className="col-span-full"
              label="Email address"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
            <TextField
              label="First name"
              name="first_name"
              type="text"
              autoComplete="given-name"
              required
            />
            <TextField
              label="Last name"
              name="last_name"
              type="text"
              autoComplete="family-name"
              required
            />
            <TextField
              className="col-span-full"
              label="Practice name"
              name="practice_name"
              type="text"
              required
            />
            <TextField
              className="col-span-full"
              label="Phone number"
              description="Optional"
              name="phone_number"
              type="tel"
              autoComplete="phone"
            />
            <div className="col-span-full">
              <Button
                type="submit"
                variant="solid"
                color="blue"
                className="w-full"
              >
                <span>Submit</span>
              </Button>
            </div>
            <p className="col-span-full text-sm/6 text-gray-400">
              By submitting this form, you acknowledge that you’ve read and
              agree to our{' '}
              <a href="/privacy-policy" className="font-semibold text-wo-blue">
                privacy&nbsp;policy
              </a>
              .
            </p>
          </form>
        </Container>
      </main>
      <Footer />
    </>
  );
}
