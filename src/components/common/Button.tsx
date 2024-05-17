import { cva } from 'class-variance-authority';

import Spinner from './Spinner';

import { cn } from '@/utils/style';

type ButtonProps = {
  /**
   * 버튼 크기를 지정합니다, 기본값 (md)
   */
  size?: 'xs' | 'sm' | 'md';
  /**
   * 버튼 색을 지정합니다, 기본값 (black)
   */
  color?: 'black' | 'gray' | 'orange' | 'red';
  /**
   * 버튼 내부 색상이 칠해져 있는지 여부를 지정합니다
   */
  outline?: boolean;
  /**
   * 사용자 인터렉션이 진행중인지 여부를 정합니다.
   */
  isLoading?: boolean;
  /**
   * 버튼의 넓이가 100%인 경우 사용합니다.
   */
  fullWidth?: boolean;
  /**
   * 버튼의 자식요소 이름
   */
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<'button'>;

const ButtonVariants = cva('relative disabled:opacity-50', {
  variants: {
    size: {
      xs: 'px-2 text-xs',
      sm: 'px-3 py-1 text-sm',
      md: 'px-5 py-2 text-base',
    },
    fullWidth: {
      true: 'w-full',
    },
    outline: {
      true: 'text-black',
      false: 'text-white',
    },
    color: {
      black: '',
      gray: '',
      orange: '',
      red: '',
    },
  },
  compoundVariants: [
    {
      outline: true,
      color: 'black',
      className: 'border border-black',
    },
    {
      outline: true,
      color: 'gray',
      className: 'border border-slate-300',
    },
    {
      outline: true,
      color: 'orange',
      className: 'border border-orange-500',
    },
    {
      outline: true,
      color: 'red',
      className: 'border border-red-700',
    },
    { outline: false, color: 'black', className: 'bg-black' },
    { outline: false, color: 'gray', className: 'bg-slate-300' },
    { outline: false, color: 'orange', className: 'bg-orange-500' },
    { outline: false, color: 'red', className: 'bg-red-500' },
  ],
  defaultVariants: {
    size: 'md',
    color: 'black',
    outline: false,
  },
});

const Button = ({
  size,
  color,
  outline,
  isLoading,
  fullWidth,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={isLoading || props.disabled}
      {...props}
      className={cn(
        ButtonVariants({ size, fullWidth, outline, color }),
        props.className,
      )}
    >
      {isLoading ? (
        <>
          <div
            className={cn(
              'absolute left-0 top-0 flex size-full items-center justify-center',
              ButtonVariants({ size }),
            )}
          >
            <Spinner size="md" />
          </div>
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
