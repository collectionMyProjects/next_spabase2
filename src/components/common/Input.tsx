import { forwardRef } from 'react';

import { cn } from '@/utils/style';

type inputProps = React.ComponentPropsWithoutRef<'input'>;

const Input = forwardRef(function Input(
  { ...props }: inputProps,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  return (
    <input
      {...props}
      ref={ref}
      className={cn(
        'border text-base p-2 outline-none text-black disabled:opacity-50',
        props.className,
      )}
    />
  );
});

export default Input;
