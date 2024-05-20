import { forwardRef } from 'react';

import { cn } from '@/utils/style';

type ShopProfileImageProps = {
  /** 상점 프로필 이미지 */
  imageUrl?: string;
  /** 추가 스타일 설정 */
  className?: string;
};

const ShopProfileImage = forwardRef(function ShopProfileImage(
  { imageUrl, className, ...props }: ShopProfileImageProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  if (!imageUrl) {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-full bg-slate-200 size-14 flex justify-center items-center',
          className,
        )}
        {...props}
      >
        <span className="material-symbols-outlined text-slate-500">
          storefront
        </span>
      </div>
    );
  }

  return (
    <div
      className={cn(className, 'rounded-full size-14 bg-cover bg-center')}
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
  );
});

export default ShopProfileImage;
