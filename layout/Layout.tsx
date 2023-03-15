import { LayoutProps } from "./Layout.props";
import styles from "./Layout.module.css";
import cn from "classnames";
import React from "react";
import { Header } from "./Header/Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { Footer } from "./Footer/Footer";

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
