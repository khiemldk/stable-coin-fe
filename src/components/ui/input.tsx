/* eslint-disable no-nested-ternary */
'use client';

import * as React from 'react';
import { Icons } from '@/assets/icons';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '@/lib/utils';

import { Show } from './show';

export const inputVariants = tv({
  base: cn(
    'border-input border placeholder:text-xs placeholder:text-neutral-04 bg-transparent ring-offset-background peer',
    'focus-visible:ring-transparent focus-visible:border-main flex w-full file:border-0 file:bg-transparent',
    'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
    // 'read-only:bg-readonly read-only:border-readonly-border read-only:cursor-default'
  ),
  variants: {
    variant: {
      default: '!bg-transparent !border-neutral-05 !text-white',
    },
    size: {
      sm: 'h-10 py-2 px-3 text-xs rounded-lg file:text-sm file:font-medium',
      default: 'h-14 px-5 text-md rounded-[.3125rem] font-normal file:text-sm file:font-medium',
      search: '',
    },
  },
  defaultVariants: {
    size: 'default',
    variant: 'default',
  },
});

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  errorClassName?: string;
  suffix?: any;
  wrapClassName?: string;
  suffixClassName?: string;
  fullWidth?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = 'default', fullWidth, suffixClassName, size, type, suffix, id, ...props }, ref) => {
    const [show, setShow] = React.useState(false);
    return (
      <div className={cn('relative w-fit', fullWidth && 'w-full', props.wrapClassName)}>
        <input
          id={id}
          type={type === 'password' ? (show ? 'text' : 'password') : type}
          className={cn(inputVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        />
        <Show when={type !== 'password'}>
          {suffix && (
            <div className={cn('absolute right-[10px] top-1/2 -translate-y-1/2 text-xs font-normal', suffixClassName)}>
              {suffix}
            </div>
          )}
        </Show>
        <Show when={type === 'password'}>
          <div onClick={() => setShow(!show)} className="absolute right-[10px] top-1/2 -translate-y-1/2 cursor-pointer">
            {show ? <Icons.eye /> : <Icons.eyeSlash />}
          </div>
        </Show>
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
