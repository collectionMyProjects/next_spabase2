import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useEffect, useState } from 'react';

import { getSearchPRoductsCount } from '@/api/Product';
import { getSearchProducts } from '@/api/Product/getSearchProducts';
import { Pagination, Product, Text } from '@/components/common';
import Container from '@/components/layout/Container';
import Wrapper from '@/components/layout/Wrapper';
import { Product as TProduct } from '@/types';

export const getServerSideProps: GetServerSideProps<{
  products: TProduct[];
  query: string;
  count: number;
}> = async (context) => {
  const originalQuery = context.query.query as string | undefined;
  if (!originalQuery) {
    throw new Error('검색어가 없습니다');
  }

  const query = decodeURIComponent(originalQuery);
  const { data: products } = await getSearchProducts({
    query,
    fromPage: 0,
    toPage: 1,
  });

  const { data: count } = await getSearchPRoductsCount(query);

  return { props: { products, query, count } };
};

const Search = ({
  products: initialProducts,
  query,
  count,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [products, setProducts] = useState<TProduct[]>(initialProducts);
  // 사용자에게 보이는 페이지는 1부터 시작
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [initialProducts]);

  useEffect(() => {
    (async () => {
      const { data: products } = await getSearchProducts({
        query,
        // 서버에서 처리되는 페이지는 0부터 시작
        fromPage: currentPage - 1,
        toPage: currentPage,
      });
      setProducts(products);
    })();
  }, [currentPage, query]);

  return (
    <Wrapper>
      <Container>
        <div className="my-7">
          <Text size="lg" color="red">
            {query}
          </Text>
          <Text size="lg">의 검색 결과</Text>
        </div>
        <div className="my-3 grid grid-cols-5 gap-4">
          {products.length === 0 ? (
            <Text>검색 결과가 없습니다.</Text>
          ) : (
            products.map(({ id, title, price, createdAt, imageUrls }) => (
              <div key={id}>
                <Product
                  title={title}
                  price={price}
                  createdAt={createdAt}
                  imageUrl={imageUrls[0]}
                />
              </div>
            ))
          )}
        </div>
        <div className="my-6 flex w-full items-center justify-center">
          <Pagination
            currentPage={currentPage}
            count={count}
            handlePageChange={(pageNumber) => {
              setCurrentPage(pageNumber);
            }}
          />
        </div>
      </Container>
    </Wrapper>
  );
};

export default Search;
