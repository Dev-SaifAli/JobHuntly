interface BadgeProps {
  label?: string;
  color?: "yellow" | "green" | "red" | "purple" | "blue";
  variant?: "filled" | "outline";
  shape?: "pill" | "rounded";  // ← ADD THIS
}

export function Badge({
  label = "Caption",
  color = "yellow",
  variant = "filled",
  shape = "pill",              // ← default pill
}: BadgeProps) {
  const colors = {
    yellow: {
      filled: "bg-accent-yellow/20 text-accent-yellow",
      outline: "border-2 border-accent-yellow text-accent-yellow bg-transparent",
    },
    green: {
      filled: "bg-accent-green/20 text-accent-green",
      outline: "border-2 border-accent-green text-accent-green bg-transparent",
    },
    red: {
      filled: "bg-accent-red/20 text-accent-red",
      outline: "border-2 border-accent-red text-accent-red bg-transparent",
    },
    purple: {
      filled: "bg-accent-purple/20 text-accent-purple",
      outline: "border-2 border-brand-primary text-primary bg-transparent",
    },
    blue: {
      filled: "bg-accent-blue/20 text-accent-blue",
      outline: "border-2 border-accent-blue text-accent-blue bg-transparent",
    },
  };

  return (
    <span
      className={`
        inline-flex items-center justify-center
        px-4 py-1.5 text-sm font-semibold font-body
        transition-all duration-200
        ${shape === "pill" ? "rounded-full" : ""}
        ${colors[color][variant]}
      `}
    >
      {label}
    </span>
  );
}