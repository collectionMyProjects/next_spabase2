import { cva } from 'class-variance-authority';

import { cn } from '@/utils/style';

type SpinnerProps = {
  /**
   * 스피너의 크기를 지정, 기본값 (md)
   */
  size?: 'xs' | 'sm' | 'md';
};

const SpinnerVariants = cva(
  'animate-spin rounded-full border-2 border-gray-500 border-t-white',
  {
    variants: {
      size: {
        xs: 'size-3',
        sm: 'size-3.5',
        md: 'size-7',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
);

const Spinner = ({ size }: SpinnerProps) => {
  return (
    <div className="flex items-center justify-center">
      <span className={cn(SpinnerVariants({ size }))} />
    </div>
  );
};

export default Spinner;
