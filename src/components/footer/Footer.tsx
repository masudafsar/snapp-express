import React from "react";
import styles from './Footer.module.scss'
import Pagination from "./Pagination";

interface Props {
}

const Footer: React.FC<Props> = () => {
  return (
    <div className={styles.Footer}>
      <Pagination/>
    </div>
  )
}

export default Footer;
