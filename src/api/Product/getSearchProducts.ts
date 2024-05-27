import { fakerKO as faker } from '@faker-js/faker';

import { Product } from '@/types';
import { getMockProductData } from '@/utils/ProductMock';

type getSearchProductsProps = {
  query: string;
  fromPage: number;
  toPage: number;
};

export async function getSearchProducts({
  query,
  fromPage,
  toPage,
}: getSearchProductsProps) {
  const data: Product[] = Array.from({ length: (toPage - fromPage) * 10 }).map(
    () =>
      getMockProductData({
        title: `${query} - ${faker.commerce.productName()}`,
      }),
  );

  return Promise.resolve({ data });
}
