import { ReactNode } from "react";
import Footer from "./footer/footer";
import Header from "./navigation/header";
interface Props {
  children?: ReactNode;
  classes?: string;
}

const Layout = ({ classes, children }: Props) => {
  return (
    <>
      <Header />
      <div className={classes}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
