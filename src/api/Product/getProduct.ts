import { Product } from '@/types';
import { getMockProductData, timeout } from '@/utils/ProductMock';

type Params = {
  fromPage?: number;
  toPage?: number;
};

export async function getProducts({
  fromPage = 0,
  toPage = 1,
}: Params): Promise<{ data: Product[] }> {
  const data: Product[] = Array.from({
    length: (toPage - fromPage) * 10,
  }).map(() => getMockProductData({ purchaseBy: null }));

  await timeout();
  return Promise.resolve({ data });
}
