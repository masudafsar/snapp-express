import React from 'react';
import cn from 'classnames';
import {Icon, IconifyIcon} from '@iconify/react';

import styles from './IconButton.module.scss';

interface Props {
  icon: IconifyIcon | string;
  onClick?: () => void;
  className?: string;
  size?: 'normal' | 'large';
  variant?: 'fill' | 'outline';
  color?: 'primary' | 'success' | 'danger';
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
  const sizeClass = size === 'normal' ? styles.SizeNormal : size === 'large' ? styles.sizeLarge : '';
  const styleClass = variant === "fill" ? styles.StyleFill : variant === 'outline' ? styles.StyleOutline : '';
  const colorClass = color === "primary" ? styles.ColorPrimary : color === 'success' ? styles.ColorSuccess : color === 'danger' ? styles.ColorDanger : '';
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(styles.IconButton, sizeClass, styleClass, colorClass, className)}
    >
      <Icon icon={icon}/>
    </button>
  );
}

export default IconButton;
