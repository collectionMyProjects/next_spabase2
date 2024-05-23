import { cva } from 'class-variance-authority';
import { forwardRef } from 'react';

import { cn } from '@/utils/style';

type TextProps = {
  /**
   * 텍스트 크기 설정, 기본값 (md)
   */
  size?: '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
  /**
   * 텍스트 색상 설정, 기본값 (black)
   */
  color?: 'black' | 'gray' | 'red' | 'white';
  /**
   * 텍스트 굵기 설정, 기본값 (normal)
   */
  weight?: 'light' | 'normal' | 'bold';
  /**
   * 추가 스타일 요소
   */
  className?: string;
  /**
   * 텍스트의 자식요소 이름
   */
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<'span'>;

const TextVariants = cva('', {
  variants: {
    size: {
      '4xl': 'text-4xl',
      '3xl': 'text-3xl',
      '2xl': 'text-2xl',
      xl: 'text-xl',
      lg: 'text-lg',
      md: 'text-base',
      sm: 'text-sm',
      xs: 'text-xs',
    },
    color: {
      black: 'text-black',
      gray: 'text-gray-400',
      red: 'text-red-500',
      white: 'text-white',
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      bold: 'font-bold',
    },
    defaultVariants: {
      size: 'md',
      color: 'black',
      weight: 'normal',
    },
  },
});

/**
 * 일반적인 텍스트를 설명하기 위한 컴포넌트
 */

const Text = forwardRef(function Text(
  { size, color, weight, children, className, ...props }: TextProps,
  ref: React.ForwardedRef<HTMLSpanElement>,
) {
  return (
    <span
      ref={ref}
      className={cn(TextVariants({ size, color, weight }), className)}
      {...props}
    >
      {children}
    </span>
  );
});

export default Text;
