import { useEffect, useState } from 'react';

import ThunderLayout from '@/components/layout/ThunderLayout';
import { getProduct } from '@/repository/getProduct';
import { Product } from '@/types';

const Home = () => {
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    getProduct('id').then((res) => setProduct(res.data));
  }, []);

  return (
    <ThunderLayout>
      <div>Sample Product</div>
      {product && <div>{JSON.stringify(product)}</div>}
    </ThunderLayout>
  );
};
export default Home;
