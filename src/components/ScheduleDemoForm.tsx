'use client';

import { Alert, AlertProps } from '@/components/Alert';
import { Button } from '@/components/Button';
import { TextField } from '@/components/Fields';
import { submitScheduleDemoForm } from '@/utils/api';
import { scheduleDemoFormSchema } from '@/utils/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

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

export type ScheduleDemoFormFields = {
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
};

export function ScheduleDemoForm() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [alert, setAlert] = useState<AlertProps | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ScheduleDemoFormFields>({
    mode: 'onTouched',
    resolver: zodResolver(scheduleDemoFormSchema),
  });

  const onSubmit: SubmitHandler<ScheduleDemoFormFields> = async (data) => {
    try {
      setIsSubmitting(true);
      await submitScheduleDemoForm(data);
      setAlert(SUCCESS_ALERT);
    } catch (error) {
      setIsSubmitting(false);
      setAlert(ERROR_ALERT);
    }
  };

  return (
    <div>
      {alert && <Alert {...alert} className="mt-10" />}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2"
      >
        <TextField
          className="col-span-full"
          label="Email address"
          type="email"
          autoComplete="email"
          disabled={isSubmitting}
          error={errors.email?.message}
          {...register('email')}
          required
        />
        <TextField
          label="First name"
          type="text"
          autoComplete="given-name"
          disabled={isSubmitting}
          error={errors.firstName?.message}
          {...register('firstName')}
          required
        />
        <TextField
          label="Last name"
          type="text"
          autoComplete="family-name"
          disabled={isSubmitting}
          error={errors.lastName?.message}
          {...register('lastName')}
          required
        />
        <TextField
          className="col-span-full"
          label="Phone number"
          type="tel"
          autoComplete="phone"
          disabled={isSubmitting}
          error={errors.phone?.message}
          {...register('phone')}
        />
        <Button
          className="w-full col-span-full"
          type="submit"
          variant="solid"
          color="blue"
          disabled={isSubmitting}
        >
          <span>Submit</span>
        </Button>
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
