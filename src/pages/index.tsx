import ProductList from './_components/ProductList';

import Container from '@/components/layout/Container';
import ThunderLayout from '@/components/layout/ThunderLayout';
import Wrapper from '@/components/layout/Wrapper';

const Home = () => {
  return (
    <ThunderLayout>
      <Wrapper>
        <Container>
          <ProductList />
        </Container>
      </Wrapper>
    </ThunderLayout>
  );
};
export default Home;
