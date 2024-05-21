import { Text } from '@/components/common';
import Container from '@/components/layout/Container';
import Wrapper from '@/components/layout/Wrapper';

const Footer = () => {
  return (
    <Wrapper>
      <aside className="border-t border-slate-300">
        <Container>
          <div className="flex gap-5 py-5">
            <Text>회사소개</Text>|<Text>이용약관</Text>|<Text>운영정책</Text>
          </div>
        </Container>
      </aside>
    </Wrapper>
  );
};

export default Footer;
