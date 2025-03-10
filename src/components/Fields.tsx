import clsx from 'clsx';
import React, { useId } from 'react';

const formClasses =
  'block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-wo-blue focus:bg-white focus:outline-none focus:ring-wo-blue sm:text-sm disabled:bg-gray-100 disabled:text-gray-400';

function Label({
  id,
  children,
  className,
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
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

export function TextArea({
  label,
  description,
  rows = 4,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<'textarea'>, 'id'> & {
  label: string;
  description?: string;
}) {
  const id = useId();
  const descriptionId = `${id}-description`;

  return (
    <div className={className}>
      <div className="flex justify-between">
        {label && <Label id={id}>{label}</Label>}
        {description && (
          <Label id={descriptionId} className="font-normal text-gray-400">
            {description}
          </Label>
        )}
      </div>
      <textarea
        id={id}
        rows={rows}
        aria-describedby={description ? descriptionId : undefined}
        className={clsx(formClasses, 'resize-none', className)}
        {...props}
      />
    </div>
  );
}

export function TextField({
  label,
  description,
  type = 'text',
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<'input'>, 'id'> & {
  label: string;
  description?: string;
}) {
  let id = useId();
  const descriptionId = `${id}-description`;

  return (
    <div className={className}>
      <div className="flex justify-between">
        {label && <Label id={id}>{label}</Label>}
        {description && (
          <Label id={descriptionId} className="font-normal text-gray-400">
            {description}
          </Label>
        )}
      </div>
      <input id={id} type={type} {...props} className={formClasses} />
    </div>
  );
}

export function SelectField({
  label,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<'select'>, 'id'> & { label: string }) {
  let id = useId();

  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <select id={id} {...props} className={clsx(formClasses, 'pr-8')} />
    </div>
  );
}
