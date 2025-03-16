'use client';

import { Alert, AlertProps } from '@/components/Alert';
import { Button } from '@/components/Button';
import { TextField } from '@/components/Fields';
import { submitScheduleDemoForm } from '@/utils/api';
import { FormEvent, useState } from 'react';

const SUCCESS_ALERT = {
  status: 'success',
  title: 'Successfully submitted',
  description:
    "Thank you for scheduling a demo with us! We'll be in touch soon with the details.",
} satisfies AlertProps;

const ERROR_ALERT = {
  status: 'error',
  title: 'Submission failed',
  description: 'There was an error processing your request. Please try again.',
} satisfies AlertProps;

export function DemoForm() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [alert, setAlert] = useState<AlertProps | null>(null);

  const handleSubmitForm = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // todo: validate data

    try {
      setIsSubmitting(true);
      await submitScheduleDemoForm(data);
      setAlert(SUCCESS_ALERT);

      form.reset();
    } catch (error) {
      setIsSubmitting(false);
      setAlert(ERROR_ALERT);
    }
  };

  return (
    <div>
      {alert && <Alert {...alert} className="mt-10" />}
      <form
        onSubmit={handleSubmitForm}
        className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
      >
        <TextField
          className="col-span-full"
          label="Email address"
          name="email"
          type="email"
          autoComplete="email"
          disabled={isSubmitting}
          required
        />
        <TextField
          label="First name"
          name="first-name"
          type="text"
          autoComplete="given-name"
          disabled={isSubmitting}
          required
        />
        <TextField
          label="Last name"
          name="last-name"
          type="text"
          autoComplete="family-name"
          disabled={isSubmitting}
          required
        />
        <TextField
          className="col-span-full"
          label="Phone number"
          description="Optional"
          name="phone"
          type="tel"
          autoComplete="phone"
          disabled={isSubmitting}
        />
        <div className="col-span-full">
          <Button
            type="submit"
            variant="solid"
            color="blue"
            className="w-full"
            disabled={isSubmitting}
          >
            <span>Submit</span>
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
    </div>
  );
}
