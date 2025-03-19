import clsx from 'clsx';
import React, { forwardRef, useId } from 'react';

const baseStyle =
  'block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-wo-blue focus:bg-white focus:outline-none focus:ring-wo-blue sm:text-sm';

const variantStyles = {
  error:
    'border-red-200 bg-red-50 text-red-900 focus:text-gray-900 focus:border-red-600 focus:ring-red-600',
  disabled: 'bg-gray-100 text-gray-400',
};

type LabelProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

function Label({ id, children, className }: LabelProps) {
  return (
    <label
      htmlFor={id}
      className={clsx(
        'mb-3 block text-sm font-medium text-gray-700',
        className,
      )}
    >
      {children}
    </label>
  );
}

type TextAreaProps = Omit<React.ComponentPropsWithoutRef<'textarea'>, 'id'> & {
  label: string;
  required?: boolean;
  rows?: number;
  error?: string;
};

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, required = false, rows = 4, className, ...props }, ref) => {
    const id = useId();
    const textAreaClassName = clsx(
      baseStyle,
      props.error ? variantStyles.error : '',
      props.disabled ? variantStyles.disabled : '',
    );

    return (
      <div className={className}>
        <div className="flex justify-between">
          {label && <Label id={id}>{label}</Label>}
          {!required && (
            <Label className="font-normal text-gray-400">Optional</Label>
          )}
        </div>
        <textarea
          id={id}
          rows={rows}
          ref={ref}
          className={clsx(textAreaClassName, 'resize-none', className)}
          {...props}
        />
        {props.error && (
          <p className="mt-2 text-sm text-red-600 ">{props.error}</p>
        )}
      </div>
    );
  },
);

type TextFieldProps = Omit<React.ComponentPropsWithoutRef<'input'>, 'id'> & {
  label: string;
  required?: boolean;
  error?: string;
};

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, type = 'text', required = false, className, ...props }, ref) => {
    const id = useId();
    const inputClassName = clsx(
      baseStyle,
      props.error ? variantStyles.error : '',
      props.disabled ? variantStyles.disabled : '',
    );

    return (
      <div className={className}>
        <div className="flex justify-between">
          <Label id={id}>{label}</Label>
          {!required && (
            <Label className="font-normal text-gray-400">Optional</Label>
          )}
        </div>
        <input
          id={id}
          type={type}
          ref={ref}
          className={inputClassName}
          aria-invalid={!!props.error}
          {...props}
        />
        {props.error && (
          <p className="mt-2 text-sm text-red-600 ">{props.error}</p>
        )}
      </div>
    );
  },
);

type SelectFieldProps = Omit<React.ComponentPropsWithoutRef<'select'>, 'id'> & {
  label: string;
  error?: string;
};

export const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ label, className, ...props }, ref) => {
    let id = useId();
    const selectClassName = clsx(
      baseStyle,
      props.error ? variantStyles.error : '',
      props.disabled ? variantStyles.disabled : '',
    );

    return (
      <div className={className}>
        {label && <Label id={id}>{label}</Label>}
        <select
          id={id}
          {...props}
          ref={ref}
          className={clsx(selectClassName, 'pr-8')}
        />
        {props.error && (
          <p className="mt-2 text-sm text-red-600 ">{props.error}</p>
        )}
      </div>
    );
  },
);
