import { type Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/Button';
import { TextArea, TextField } from '@/components/Fields';
import { Logo } from '@/components/Logo';
import { SlimLayout } from '@/components/SlimLayout';

export const metadata: Metadata = {
  title: 'Contact Us',
};

export default function ContactUs() {
  return (
    <SlimLayout>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <h2 className="mt-20 text-lg font-semibold text-gray-900">Contact us</h2>
      <p className="mt-2 text-sm text-gray-700">
        Our Experts love to answer questions.
      </p>
      <form
        action="#"
        className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
      >
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
          label="Email address"
          name="email"
          type="email"
          autoComplete="email"
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
        <TextArea
          className="col-span-full"
          label="Message"
          description="Max 500 characters"
          name="message"
          rows={5}
          required
        />
        <div className="col-span-full">
          <Button type="submit" variant="solid" color="blue" className="w-full">
            <span>
              Submit <span aria-hidden="true">&rarr;</span>
            </span>
          </Button>
        </div>
        <p className="col-span-full text-sm/6 text-gray-400">
          By submitting this form, you acknowledge that you’ve read and agree to
          our{' '}
          <a href="/privacy-policy" className="font-semibold text-wo-blue">
            privacy&nbsp;policy
          </a>
          .
        </p>
      </form>
    </SlimLayout>
  );
}
