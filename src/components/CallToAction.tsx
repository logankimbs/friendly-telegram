import { Button } from '@/components/Button';
import { Container } from '@/components/Container';

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-wo-blue py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get started today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-wo-blue-50">
            Streamline your workflow, and simplify your day-to-day operations.
            Don’t wait—your practice deserves the best.
          </p>
          <Button href="/schedule-demo" color="white" className="mt-10">
            Schedule a demo
          </Button>
        </div>
      </Container>
    </section>
  );
}
