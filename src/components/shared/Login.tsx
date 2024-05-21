import Button from '@/components/common/Button';
import Input from '@/components/common/Input';

type LoginProps = {
  handleSetType: (type?: 'login' | 'signup') => void;
};

const Login = ({ handleSetType }: LoginProps) => {
  return (
    <form className="my-2 flex w-full flex-col gap-2">
      <Input type="email" placeholder="이메일" required />
      <Input type="password" placeholder="비밀번호" required />

      <div className="flex w-full flex-col gap-2">
        <Button outline>로그인</Button>
        <Button onClick={() => handleSetType('signup')}>회원가입</Button>
      </div>
    </form>
  );
};

export default Login;
