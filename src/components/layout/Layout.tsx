import Sider from "@/components/layout/Sider";
import Footer from "@/components/layout/Footer";
import Container from "@/components/layout/Container";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen items-stretch min-w-full bg-primary text-oldsilver">
      <Sider />
      <div className="flex-1 flex flex-col ml-64">
        <Container>
          {children}
        </Container>
        <Footer />
      </div>
    </div>
  )
}
