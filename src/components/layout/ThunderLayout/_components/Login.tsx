import { useEffect, useState } from 'react';
import { disablePageScroll } from 'scroll-lock';

import { Text } from '@/components/common';
import LoginPannel from '@/components/shared/LoginPannel';

const Login = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      disablePageScroll();
    }
  }, [showModal]);

  return (
    <>
      <Text size="sm" color="gray" onClick={() => setShowModal(true)}>
        로그인 / 회원가입
      </Text>
      {showModal && (
        <div
          className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-gray-400/50"
          onClick={() => setShowModal(false)}
        >
          <LoginPannel />
        </div>
      )}
    </>
  );
};

export default Login;
