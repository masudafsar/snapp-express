import React from 'react';
import cn from 'classnames';
import {Icon, IconifyIcon} from '@iconify/react';

import styles from './IconButton.module.scss';
import {IButtonProps} from "./IButtonProps";
import {getColorClasses, getSizeClass, getVariantClass} from "./button.utils";

interface Props extends IButtonProps {
  icon: IconifyIcon | string;
}

const IconButton: React.FC<Props> = (
  {
    size = 'normal',
    variant = 'fill',
    color = 'primary',
    icon,
    className,
    onClick,
  }
) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        cn(
          styles.IconButton,
          getSizeClass(size),
          getVariantClass(variant),
          getColorClasses(color),
          className)
      }
    >
      <Icon icon={icon}/>
    </button>
  );
}

export default IconButton;
