import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useEffect, useState } from 'react';

import SearchShopItem from './_components/SearchShopItem';

import getSearchShops from '@/api/Shop/getSearchShops';
import { getSearchShopsCount } from '@/api/Shop/getSearchShopsCount';
import { Pagination, Text } from '@/components/common';
import Container from '@/components/layout/Container';
import Wrapper from '@/components/layout/Wrapper';
import { Shop } from '@/types';

export const getServerSideProps: GetServerSideProps<{
  shops: Shop[];
  query: string;
  count: number;
}> = async (context) => {
  const originalQuery = context.query.query as string | undefined;
  if (!originalQuery) {
    throw new Error('검색어가 없습니다');
  }

  const query = decodeURIComponent(originalQuery);
  const { data: shops } = await getSearchShops({
    query,
    fromPage: 0,
    toPage: 1,
  });
  const { data: count } = await getSearchShopsCount(query);

  return { props: { shops, query, count } };
};

const SearchShop = ({
  shops: initialShops,
  query,
  count,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [shops, setShops] = useState<Shop[]>(initialShops);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    (async () => {
      const { data: shops } = await getSearchShops({
        query,
        fromPage: currentPage - 1,
        toPage: currentPage,
      });
      setShops(shops);
    })();
  }, [currentPage, query]);

  useEffect(() => {
    setCurrentPage(1);
  }, [initialShops]);

  return (
    <Wrapper>
      <Container>
        <div className="my-7">
          <Text size="lg">검색결과</Text>
          <Text size="lg" color="gray" className="ml-1">
            {count.toLocaleString()}개
          </Text>
        </div>
        <div className="flex flex-col gap-3">
          {shops.length === 0 ? (
            <Text>검색 결과가 없습니다.</Text>
          ) : (
            shops.map(({ id, name, imageUrl }) => (
              <SearchShopItem
                key={id}
                id={id}
                name={name}
                profileImageUrl={imageUrl || undefined}
              />
            ))
          )}
        </div>
        <div className="flex w-full items-center justify-center">
          <Pagination
            currentPage={currentPage}
            count={count}
            handlePageChange={(pageIndex) => setCurrentPage(pageIndex)}
          />
        </div>
      </Container>
    </Wrapper>
  );
};

export default SearchShop;
