import React from "react";

// 1. Interface ko theek se define kiya gaya hai
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "white";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
}

export default function Button({ 
  children, 
  variant = "primary", 
  size = "md", 
  icon, 
  className = "", 
  ...props 
}: ButtonProps) { 
  
  const baseStyles = "inline-flex items-center justify-center font-body font-bold transition-all active:scale-95 disabled:opacity-50 cursor-pointer";
  
  // Design System Colors mapping
  const variants = {
    primary: "bg-brand-primary text-white hover:brightness-110",
    secondary: "border border-brand-primary text-white bg-transparent hover:bg-brand-primary/5",
    tertiary: "text-brand-primary bg-transparent hover:bg-brand-primary/10",
    white: "bg-white text-brand-primary hover:bg-white/95 shadow-xl hover:shadow-2xl",
  };

  const sizes = {
    sm: "px-4 py-2 text-body-sm",
    md: "px-6 py-3 text-body-nm",
    lg: "px-10 py-4 text-body-nm",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
}