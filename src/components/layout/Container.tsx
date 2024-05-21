import classNames from 'classnames';

import { cn } from '@/utils/style';

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <section
      className={cn(
        classNames('w-full mx-auto px-24 max-w-[1200px]', className),
      )}
    >
      {children}
    </section>
  );
};

export default Container;
