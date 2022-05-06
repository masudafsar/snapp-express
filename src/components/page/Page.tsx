import React from "react";

import styles from "./Page.module.scss";
import Header from "../header/Header";

interface PageProps {
  children: React.ReactNode,
}

const Page: React.FC<PageProps> = ({children}) => {
  return (
    <div className={styles.Page}>
      <Header/>
      {children}
    </div>
  );
}

export default Page;
