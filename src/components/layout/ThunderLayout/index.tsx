import Header from './_components/Header';
import UserInfo from './_components/UserInfo';

type ThunderLayoutProps = {
  children: React.ReactNode;
};

const ThunderLayout = ({ children }: ThunderLayoutProps) => {
  return (
    <div className="min-w-[1000px]">
      <UserInfo />
      <Header />
      {children}
    </div>
  );
};

export default ThunderLayout;
