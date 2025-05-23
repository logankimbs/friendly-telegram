import clsx from 'clsx';
import Link from 'next/link';

const baseStyles = {
  solid:
    'group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 disabled:bg-gray-100 disabled:text-gray-400',
  outline:
    'group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none',
};

const variantStyles = {
  solid: {
    slate:
      'bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900',
    'light-blue':
      'bg-wo-light-blue-500 text-white hover:bg-wo-light-blue-400 active:bg-wo-light-blue-600 focus-visible:outline-wo-light-blue-500',
    blue: 'bg-wo-blue-500 text-white hover:bg-wo-blue-400 active:bg-wo-blue-600 focus-visible:outline-wo-blue-500',
    'dark-blue':
      'bg-wo-dark-blue-500 text-white hover:bg-wo-dark-blue-400 active:bg-wo-dark-blue-600 focus-visible:outline-wo-dark-blue-500',
    'lime-green':
      'bg-wo-lime-green-500 text-white hover:bg-wo-lime-green-400 active:bg-wo-lime-green-600 focus-visible:outline-wo-lime-green-500',
    white:
      'bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white',
  },
  outline: {
    slate:
      'ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300',
    white:
      'ring-slate-300 text-slate-300 hover:ring-slate-50 hover:text-slate-50 active:ring-slate-400 active:text-slate-400 focus-visible:outline-white',
  },
};

type ButtonProps = (
  | {
      variant?: 'solid';
      color?: keyof typeof variantStyles.solid;
    }
  | {
      variant: 'outline';
      color?: keyof typeof variantStyles.outline;
    }
) &
  (
    | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'color'>
    | (Omit<React.ComponentPropsWithoutRef<'button'>, 'color'> & {
        href?: undefined;
      })
  );

export function Button({ className, ...props }: ButtonProps) {
  props.variant ??= 'solid';
  props.color ??= 'slate';

  className = clsx(
    baseStyles[props.variant],
    props.variant === 'outline'
      ? variantStyles.outline[props.color]
      : props.variant === 'solid'
        ? variantStyles.solid[props.color]
        : undefined,
    className,
  );

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  );
}
