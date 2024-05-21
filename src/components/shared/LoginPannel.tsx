import { useState } from 'react';

import Login from './Login';
import SignUp from './SignUp';

import Button from '@/components/common/Button';
import Text from '@/components/common/Text';

const LoginPannel = () => {
  const [type, setType] = useState<undefined | 'login' | 'signup'>();
  return (
    <div
      className="flex w-96 flex-col items-center justify-center gap-2 rounded bg-slate-50 p-10"
      onClick={(e) => e.stopPropagation()}
    >
      <Text size="lg">중고장터 시작하기</Text>
      <Text weight="light">간편하게 가입하고 상품을 확인하세요</Text>
      {type === 'login' ? (
        <Login handleSetType={(type) => setType(type)} />
      ) : type === 'signup' ? (
        <SignUp handleSetType={(type) => setType(type)} />
      ) : (
        <div className="flex w-full flex-col gap-2">
          <Button onClick={() => setType('login')}>로그인</Button>
          <Button onClick={() => setType('signup')}>회원가입</Button>
        </div>
      )}
    </div>
  );
};

export default LoginPannel;
