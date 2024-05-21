import Button from '@/components/common/Button';
import Input from '@/components/common/Input';

interface SignUpProps {
  handleSetType: (type?: 'login' | 'signup') => void;
}

const SignUp = ({ handleSetType }: SignUpProps) => {
  return (
    <form className="my-2 flex w-full flex-col gap-2">
      <Input type="email" placeholder="이메일" required />
      <Input type="password" placeholder="비밀번호" required />

      <div className="flex w-full flex-col gap-2">
        <Button onClick={() => handleSetType('login')}>로그인</Button>
        <Button outline>회원가입</Button>
      </div>
    </form>
  );
};

export default SignUp;
