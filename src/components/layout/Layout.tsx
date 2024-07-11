import Sider from "@/components/layout/Sider";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";
import {ReactNode} from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen items-stretch min-w-full bg-primary text-oldsilver">
      <Sider />
      <div className="flex-1 flex flex-col ml-60">
        <Container>
          {children}
        </Container>
        <Footer />
      </div>
    </div>
  )
}
