import { Product } from '@/types';
import { getMockProductData } from '@/utils/ProductMock';

export async function getProductsTag(
  tag: string,
): Promise<{ data: Product[] }> {
  const data: Product[] = Array.from({ length: 5 }).map(() =>
    getMockProductData({ tags: [tag] }),
  );

  return Promise.resolve({ data });
}
