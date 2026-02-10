// Button.tsx
import {colors} from '../../tokens/colors';
import { typography } from '../../tokens/typography';

type ButtonVariant = "primary" | "secondary" | "danger";
type ButtonSize = "large" | "normal" | "small";

interface ButtonProps {
  variant: ButtonVariant;
  size: ButtonSize;
  icon?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({ variant, size, icon, children, onClick }: ButtonProps) {
  const styles = {
    primary: {
      backgroundColor: colors.brand.primary,
      color: colors.neutrals[50],
    },
    secondary: {
      backgroundColor: colors.brand.secondary,
      color: colors.neutrals[900],
    },
    danger: {
      backgroundColor: colors.accents.red,
      color: colors.neutrals[50],
    },
  };

  const sizes = {
    large: typography.button.large,
    normal: typography.button.normal,
    small: typography.button.small,
  };

  return (
    <button
      onClick={onClick}
      style={{
        ...styles[variant],
        fontFamily: sizes[size].fontFamily,
        fontWeight: sizes[size].fontWeight,
        fontSize: sizes[size].fontSize,
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "8px 16px",
        borderRadius: "6px",
        border: "none",
        cursor: "pointer",
      }}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
}