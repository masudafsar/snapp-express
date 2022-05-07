import React from "react";
import {Icon} from "@iconify/react";
import backIcon from "@iconify/icons-ic/twotone-keyboard-arrow-right";
import caretIcon from "@iconify/icons-ic/twotone-keyboard-arrow-down";
import searchIcon from "@iconify/icons-ic/twotone-search";

import IconButton from "../elements/button/IconButton";

import styles from './MainHeader.module.scss';

interface Props {

}

const MainHeader: React.FC<Props> = () => {
  return (
    <div className={styles.MainHeader}>
      <div className={styles.Container}>
        <IconButton icon={backIcon} color="light" size="large"/>
        <h1 className={styles.Title}>
          سوپرمارکت
          <Icon icon={caretIcon} inline={true}/>
        </h1>
        <IconButton icon={searchIcon} color="light" size="large"/>
      </div>
    </div>
  );
}

export default MainHeader;
