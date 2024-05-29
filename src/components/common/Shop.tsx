import classNames from 'classnames';
import { ForwardedRef, forwardRef } from 'react';

import ShopProfileImage from './ShopProfileImage';
import Text from './Text';

import { cn } from '@/utils/style';

type ShopProps = {
  /** 상점 이름 */
  name: string;
  /** 상점 프로필 이미지 */
  profileImageUrl?: string;
  /** 상점에 등록된 상품 수 */
  productCount: number;
  /** 상점을 팔로우 하는 팔로워 수 */
  followerCount: number;
  /** 상점 컴포넌트 뷰 타입 */
  type?: 'row' | 'column';
};

const Shop = forwardRef(function Shop(
  {
    name,
    profileImageUrl,
    productCount,
    followerCount,
    type,
    ...props
  }: ShopProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div
      ref={ref}
      className={cn(
        classNames(
          'flex',
          type === 'row' ? 'flex-row' : 'flex-col gap-1 items-center',
        ),
      )}
      {...props}
    >
      <div className="w-14">
        <ShopProfileImage imageUrl={profileImageUrl} />
      </div>
      <div
        className={cn(
          'flex flex-col overflow-hidden',
          type === 'row' ? 'ml-3 justify-around' : 'w-full',
        )}
      >
        <div className={cn('truncate', type === 'column' && 'text-center')}>
          <Text>{name}</Text>
        </div>
        <Text
          size="sm"
          color={type === 'row' ? 'gray' : 'black'}
          className={classNames(
            'flex gap-2',
            type === 'column' && 'justify-center',
          )}
        >
          <div>상품 {productCount}</div> | <div>팔로워 {followerCount}</div>
        </Text>
      </div>
    </div>
  );
});

export default Shop;
