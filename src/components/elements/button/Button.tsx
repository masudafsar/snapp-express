import React from 'react';
import cn from 'classnames';

import styles from './Button.module.scss';
import {IButtonProps} from "./IButtonProps";
import {getColorClasses, getSizeClass, getVariantClass} from "./button.utils";

interface Props extends IButtonProps {
  children?: React.ReactNode;
}

const Button: React.FC<Props> = (
  {
    children,
    size = 'normal',
    variant = 'fill',
    color = 'primary',
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
          styles.Button,
          getSizeClass(size),
          getVariantClass(variant),
          getColorClasses(color),
          className)
      }
    >
      {children}
    </button>
  );
}

export default Button;
