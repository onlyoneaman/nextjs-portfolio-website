import Sider from "@/components/layout/Sider";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import {ReactNode, useState, useEffect} from "react";
import AvatarBox from "@/components/layout/Sider/AvatarBox";

type LayoutProps = {
  children: ReactNode;
};

function Layout({children}: LayoutProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 680);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white text-primary dark:bg-primary dark:text-oldsilver">
      {isMobile && (
        <header className="bg-secondary dark:bg-slate z-10 p-4">
          <AvatarBox/>
        </header>
      )}
      <div className={`flex flex-1 flex-col justify-between ${isMobile ? '' : 'ml-60'}`}>
        {!isMobile && <Sider/>}
        <Container isMobile={isMobile}>
          {children}
        </Container>
        <Footer isMobile={isMobile}/>
      </div>
      {isMobile && <Sider isMobile={true}/>}
    </div>
  );
};

export default Layout;
