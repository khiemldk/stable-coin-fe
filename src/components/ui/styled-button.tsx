'use client';

import { useButton, type ButtonProps } from '@nextui-org/button';
import { Ripple } from '@nextui-org/ripple';
import { Spinner } from '@nextui-org/spinner';
import { forwardRef } from '@nextui-org/system';

import { cn } from '@/lib/utils';

interface Props extends ButtonProps {}

const StyledButton = forwardRef<'button', Props>((props, ref) => {
  const {
    variant = 'solid',
    fullWidth = false,
    color = 'primary',
    radius = 'lg',
    size = 'lg',
    disabled,
    ...etc
  } = props;

  const {
    Component,
    domRef,
    children,
    styles,
    spinnerSize,
    spinner = <Spinner color="current" size={spinnerSize} />,
    spinnerPlacement,
    startContent,
    endContent,
    isLoading,
    disableRipple,
    getButtonProps,
    getRippleProps,
    isIconOnly,
  } = useButton({ variant, size, fullWidth, radius, color, ...etc, ref });

  return (
    <Component
      ref={domRef}
      className={cn(
        styles,
        'font-normal hover:opacity-100 data-[hover=true]:opacity-100 !rounded-full !border-neutral-02 border',
        {
          '!text-md !font-medium !h-[4.5rem] !px-6 sm:!px-[3.2813rem]': size === 'lg',
          '!text-sm !font-medium !h-[2.75rem]': size === 'md',
          '!text-xs !font-medium !h-[2.5rem]': size === 'sm',
          'border-2 border-primary': variant === 'bordered' && color === 'primary',
          'bg-primary !text-neutral-03': variant === 'solid' && color === 'primary',
          'bg-white !text-primary': variant === 'solid' && color === 'default',
          'border hover:border-black/80 hover:text-black/80 border-black text-black':
            variant === 'bordered' && color === 'default',
          '': variant === 'bordered' && color === 'primary',
          'opacity-50 cursor-not-allowed pointer-events-none': disabled,
        }
      )}
      {...getButtonProps()}
    >
      {startContent}
      {isLoading && spinnerPlacement === 'start' && spinner}
      {isLoading && isIconOnly ? null : children}
      {isLoading && spinnerPlacement === 'end' && spinner}
      {endContent}
      {!disableRipple && <Ripple {...getRippleProps()} />}
    </Component>
  );
});

StyledButton.displayName = 'StyledButton';

export { StyledButton };
