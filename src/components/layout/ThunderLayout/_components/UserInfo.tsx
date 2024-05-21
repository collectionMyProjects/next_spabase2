import Login from './Login';

import Container from '@/components/layout/Container';
import Wrapper from '@/components/layout/Wrapper';

const UserInfo = () => {
  return (
    <Wrapper>
      <aside className="border-b border-slate-300">
        <Container>
          <div className="flex justify-end py-1">
            <Login />
          </div>
        </Container>
      </aside>
    </Wrapper>
  );
};

export default UserInfo;
