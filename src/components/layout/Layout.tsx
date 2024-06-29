import Sider from "@/components/layout/Sider";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-stretch min-w-full">
      <Sider />
      <div className="grow ml-[260px] min-h-screen flex flex-col bg-primary text-secondary overflow-y-scroll">
        <Container>
          {children}
        </Container>
        <Footer />
      </div>
    </div>
  )
}
