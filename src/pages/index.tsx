import { InferGetServerSidePropsType } from 'next';

import ProductList from './_components/ProductList';

import { getProducts } from '@/api/Product';
import Container from '@/components/layout/Container';
import ThunderLayout from '@/components/layout/ThunderLayout';
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
    <ThunderLayout>
      <Wrapper>
        <Container>
          <ProductList initialProducts={products} />
        </Container>
      </Wrapper>
    </ThunderLayout>
  );
};
export default Home;
