import { InferGetServerSidePropsType } from 'next';

import Banner from './_components/Banner';
import ProductList from './_components/ProductList';

import { getProducts } from '@/api/Product';
import Container from '@/components/layout/Container';
import Wrapper from '@/components/layout/Wrapper';

export const getServerSideProps = async () => {
  const { data } = await getProducts({ fromPage: 0, toPage: 2 });

  return {
    props: { products: data },
  };
};

const Home = ({
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Wrapper>
      <Container>
        <Banner />
        <ProductList initialProducts={products} />
      </Container>
    </Wrapper>
  );
};
export default Home;
