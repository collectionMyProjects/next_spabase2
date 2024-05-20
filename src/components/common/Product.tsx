import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { forwardRef } from 'react';

import Text from './Text';

type ProductProps = {
  /** 상품 이름 */
  title: string;
  /** 상품 가격 */
  price: number;
  /** 상품 등록 시간 */
  createdAt: string;
  /** 상품 대표 이미지 주소 */
  imageUrl: string;
  /** 상품 판매 여부 */
  isSoldOut?: boolean;
};

dayjs.extend(relativeTime);

const Product = forwardRef(function Product(
  { title, price, createdAt, imageUrl, isSoldOut }: ProductProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <div ref={ref} className="relative flex flex-col border border-slate-300">
      {isSoldOut && (
        <div className="absolute left-0 top-0 flex size-full items-center justify-center bg-slate-900 opacity-70">
          <Text color="white">판매 완료</Text>
        </div>
      )}
      <div
        className="h-36 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="flex h-20 flex-col justify-center px-3">
        <Text className="block truncate">{title}</Text>
        <div className="flex flex-wrap items-center justify-between">
          <div>
            <Text weight="bold"> {price.toLocaleString()} </Text>
            <Text weight="bold" size="sm">
              원
            </Text>
          </div>
          <Text weight="light" color="gray" size="sm">
            {dayjs(createdAt).fromNow()}
          </Text>
        </div>
      </div>
    </div>
  );
});

export default Product;
