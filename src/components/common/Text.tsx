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
} & React.ComponentPropsWithoutRef<'span'>;

const sizeClasses = {
  '4xl': 'text-4xl',
  '3xl': 'text-3xl',
  '2xl': 'text-2xl',
  xl: 'text-xl',
  lg: 'text-lg',
  md: 'text-base',
  sm: 'text-sm',
  xs: 'text-xs',
};

const colorClasses = {
  black: 'text-black',
  gray: 'text-gray-400',
  red: 'text-red-500',
  white: 'text-white',
};

const weightClasses = {
  light: 'font-light',
  normal: 'font-normal',
  bold: 'font-bold',
};

/**
 * 일반적인 텍스트를 설명하기 위한 컴포넌트
 */
const Text = ({
  size = 'md',
  color = 'black',
  weight = 'normal',
  ...props
}: TextProps) => {
  return (
    <span
      className={cn(
        sizeClasses[size],
        colorClasses[color],
        weightClasses[weight],
      )}
      {...props}
    />
  );
};

export default Text;
