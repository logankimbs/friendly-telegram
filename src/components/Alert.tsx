import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';

const styles = {
  success: {
    background: 'bg-green-50',
    title: 'text-green-800',
    description: 'text-green-700',
    icon: (
      <CheckCircleIcon aria-hidden="true" className="size-5 text-green-400" />
    ),
  },
  error: {
    background: 'bg-red-50',
    title: 'text-red-800',
    description: 'text-red-700',
    icon: <XCircleIcon aria-hidden="true" className="size-5 text-red-400" />,
  },
};

export type AlertProps = {
  status: keyof typeof styles;
  title: string;
  description: string;
  className?: string;
};

export function Alert({ status, title, description, className }: AlertProps) {
  return (
    <div
      className={clsx('rounded-md p-4', styles[status].background, className)}
    >
      <div className="flex">
        <div className="shrink-0">{styles[status].icon}</div>
        <div className="ml-3">
          <h3 className={clsx('text-sm font-medium', styles[status].title)}>
            {title}
          </h3>
          <div className={clsx('mt-2 text-sm', styles[status].title)}>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
