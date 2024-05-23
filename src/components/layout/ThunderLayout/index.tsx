import Aside from './_components/Aside';
import Footer from './_components/Footer';
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
      <Aside />
      <main style={{ minHeight: 'calc(100vh - 28px - 108px - 65px )' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default ThunderLayout;
