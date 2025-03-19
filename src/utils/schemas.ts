import { ScheduleDemoFormFields } from '@/components/ScheduleDemoForm';
import validator from 'validator';
import { z, ZodType } from 'zod';

export const scheduleDemoFormSchema: ZodType<ScheduleDemoFormFields> = z.object(
  {
    email: z.string().nonempty('Email is required').email('Email is invalid'),
    firstName: z.string().nonempty('First name is required'),
    lastName: z.string().nonempty('Last name is required'),
    phone: z
      .string()
      .optional()
      .refine((val) => !val || validator.isMobilePhone(val), {
        message: 'Phone number is invalid',
      }),
  },
);
