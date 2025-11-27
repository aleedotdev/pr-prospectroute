import { PropsWithChildren } from "react";
import Header from "../ui/header";
import Footer from "../ui/footer";

const MainLayout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <main>
    <Header />
    {children}
    <Footer />
    </main>
  );
};

export default MainLayout;