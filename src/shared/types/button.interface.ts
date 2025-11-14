import type { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger' | 'success';
type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps {
  to?: string;
  href?: string;
  onClick?: () => void;

  variant?: ButtonVariant;
  size?: ButtonSize;

  title?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}
