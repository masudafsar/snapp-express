import sizeStyles from './Button.Size.module.scss';
import variantStyles from './Button.Variant.module.scss';
import colorStyles from './Button.Color.module.scss';

import {
  ButtonColorType,
  ButtonSizeType,
  ButtonVariantType
} from "./IButtonProps";

export const getSizeClass = (size: ButtonSizeType) => {
  return {
    normal: sizeStyles.SizeNormal,
    large: sizeStyles.sizeLarge,
  }[size];
}

export const getVariantClass = (variant: ButtonVariantType) => {
  return {
    fill: variantStyles.VariantFill,
    outline: variantStyles.VariantOutline,
  }[variant];
}

export const getColorClasses = (color: ButtonColorType) => {
  return {
    primary: colorStyles.ColorPrimary,
    light: colorStyles.ColorLight,
    dark: colorStyles.ColorDark,
    success: colorStyles.ColorSuccess,
    danger: colorStyles.ColorDanger,
  }[color];
}
