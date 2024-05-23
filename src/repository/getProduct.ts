import { Product } from '@/types';
import { getMockProductData } from '@/utils/ProductMock';

export async function getProduct(id: string): Promise<{
  data: Product;
}> {
  const data: Product = getMockProductData({ id });
  return Promise.resolve({ data });
}
