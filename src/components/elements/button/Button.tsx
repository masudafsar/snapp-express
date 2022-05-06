import React from 'react';
import cn from 'classnames';

import styles from './Button.module.scss';

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  size?: 'normal' | 'large';
  variant?: 'fill' | 'outline';
  color?: 'primary' | 'success' | 'danger';
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
  const sizeClass = size === 'normal' ? styles.SizeNormal : size === 'large' ? styles.sizeLarge : '';
  const styleClass = variant === "fill" ? styles.StyleFill : variant === 'outline' ? styles.StyleOutline : '';
  const colorClass = color === "primary" ? styles.ColorPrimary : color === 'success' ? styles.ColorSuccess : color === 'danger' ? styles.ColorDanger : '';
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(styles.Button, sizeClass, styleClass, colorClass, className)}
    >
      {children}
    </button>
  );
}

export default Button;
