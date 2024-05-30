import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { getProducts } from '@/api/Product';
import { Spinner } from '@/components/common';
import Product from '@/components/common/Product';
import { Product as TProduct } from '@/types';

export default function ProductList({
  initialProducts,
}: {
  initialProducts: TProduct[];
}) {
  const [products, setProducts] = useState<TProduct[]>(initialProducts);

  const { ref, inView } = useInView({ threshold: 1 });
  const [isLoading, setIsLoading] = useState(false);
  const [isLastPage, setIsLastPage] = useState(false);

  const handleGetProducts = async ({
    fromPage,
    toPage,
  }: {
    fromPage: number;
    toPage: number;
  }) => {
    try {
      setIsLoading(true);
      const { data } = await getProducts({ fromPage, toPage });
      setProducts((prevProducts) => [...prevProducts, ...data]);

      if (data.length === 0) {
        setIsLastPage(true);
        return;
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetProducts({ fromPage: 0, toPage: 2 });
  }, []);

  const [page, setPage] = useState(1);

  useEffect(() => {
    if (inView) {
      // inView가 true가 되면 새로운 페이지를 불러온다
      (async () => {
        handleGetProducts({ fromPage: page, toPage: page + 1 });
        setPage(page + 1);
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <div className="my-8">
      <div className="grid grid-cols-5 gap-4">
        {products?.map(({ id, title, price, imageUrls, createdAt }) => (
          <Link key={id} href={`/products/${id}`}>
            <Product
              title={title}
              price={price}
              imageUrl={imageUrls[0]}
              createdAt={createdAt}
            />
          </Link>
        ))}
      </div>
      {isLoading && (
        <div className="mt-2 text-center">
          <Spinner size="sm" />
        </div>
      )}
      {!isLastPage && !!products.length && products.length < 100 && (
        <div ref={ref} />
      )}
    </div>
  );
}
