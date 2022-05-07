export type ButtonSizeType = 'normal' | 'large';
export type ButtonVariantType = 'fill' | 'outline';
export type ButtonColorType = 'primary' | 'light' | 'dark' | 'success' | 'danger';

export interface IButtonProps {
  onClick?: () => void;
  className?: string;
  size?: ButtonSizeType;
  variant?: ButtonVariantType;
  color?: ButtonColorType;
}
