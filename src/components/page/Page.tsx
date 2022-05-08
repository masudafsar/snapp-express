import React from "react";

import styles from "./Page.module.scss";
import Header from "../header/Header";
import Footer from "../footer/Footer";

interface PageProps {
  children: React.ReactNode,
}

const Page: React.FC<PageProps> = ({children}) => {
  return (
    <div className={styles.Page}>
      <Header/>
      <div className={styles.Container}>{children}</div>
      <Footer/>
    </div>
  );
}

export default Page;
