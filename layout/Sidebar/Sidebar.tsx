import styles from "./Layout.module.css";
import { LayoutProps } from "./Sidebar.props";
import cn from "classnames";

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />

      <div>
        <Sidebar />
        <div>{children}</div>
      </div>

      <Footer />
    </>
  );
};
