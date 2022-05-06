import React from "react";
import {Icon} from "@iconify/react";
import backIcon from '@iconify/icons-ic/twotone-arrow-forward-ios';

import Button from "../elements/button/Button";
import styles from "./Header.module.scss";
import IconButton from "../elements/icon-button/IconButton";

interface Props {

}

const Header: React.FC<Props> = ({}) => {
  return (
    <div className={styles.Header}>
      <IconButton icon={backIcon}/>
      <h1 className={styles.Title}>اسنپ اکسپرس</h1>
    </div>
  );
}

export default Header;
