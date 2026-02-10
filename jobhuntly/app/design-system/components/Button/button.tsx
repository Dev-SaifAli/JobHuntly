// Button.tsx
import {colors} from '../../tokens/colors';
import { typography } from '../../tokens/typography';


type ButtonVariant = "primary" | "secondary" | "danger";
type ButtonSize = "large" | "normal" | "small";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  size: ButtonSize;
  icon?: React.ReactNode;
}

export function Button({ variant, size, icon, children, style, ...props }: ButtonProps) {
  // 1. Move logic outside the return for readability
  const variantStyle = {
    primary: { backgroundColor: colors.brand.primary, color: colors.neutrals[50] },
    secondary: { backgroundColor: colors.brand.secondary, color: colors.neutrals[900] },
    danger: { backgroundColor: colors.accents.red, color: colors.neutrals[50] },
  }[variant];

  const sizeStyle = typography.button[size];

  return (
    <button
      {...props} // 2. Spread props so 'type="submit"' or 'disabled' still works
      style={{
        ...variantStyle,
        ...sizeStyle,
        display: "inline-flex", // inline-flex is usually better for buttons
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        padding: size === "large" ? "12px 24px" : "8px 16px", // Dynamic padding based on size
        borderRadius: "6px",
        border: "none",
        cursor: props.disabled ? "not-allowed" : "pointer",
        opacity: props.disabled ? 0.6 : 1,
        ...style, // 3. Allow style overrides if absolutely necessary
      }}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
}