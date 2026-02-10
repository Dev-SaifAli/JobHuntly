// Input.tsx
import {colors} from '../../tokens/colors';
import { typography } from '../../tokens/typography';

type InputVariant = "default" | "search" | "error" | "focus";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: InputVariant;
  placeholder?: string;
  icon?: React.ReactNode;
}

export function Input({ variant = "default", placeholder, icon, ...props }: InputProps) {
  const styles = {
    default: {
      border: `1px solid ${colors.neutrals[200]}`,
    },
    search: {
      border: `1px solid ${colors.neutrals[200]}`,
    },
    focus: {
      border: `1px solid ${colors.brand.primary}`,
    },
    error: {
      border: `1px solid ${colors.accents.red}`,
    },
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      {icon && <span>{icon}</span>}
      <input
        {...props}
        placeholder={placeholder}
        style={{
          ...styles[variant],
          fontFamily: typography.body.normal.regular.fontFamily,
          fontSize: typography.body.normal.regular.fontSize,
          padding: "8px 12px",
          borderRadius: "6px",
          outline: "none",
          flex: 1,
        }}
      />
    </div>
  );
}