import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { WaveBackground } from '@/components/WaveBackground';

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <WaveBackground />
      <div className="relative">
        <Container className="pb-16 pt-20 text-center lg:pt-32 mb-36 lg:mb-44">
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
