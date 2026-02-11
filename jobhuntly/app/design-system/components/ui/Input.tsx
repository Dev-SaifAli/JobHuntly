import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  error?: string;
}

export default function Input({ 
  icon, 
  error,
  className = "", 
  ...props 
}: InputProps) {
  return (
    <div className="w-full">
      <div className="relative flex items-center">
        {icon && (
          <div className="absolute left-4 text-neutral-60 pointer-events-none">
            {icon}
          </div>
        )}
        
        <input
          className={`
            w-full outline-none bg-transparent font-body text-lg
            text-neutral-100
            placeholder:text-neutral-40
            ${icon ? 'pl-12 pr-4' : 'px-4'}
            py-4
            ${className}
          `}
          {...props}
        />
      </div>
      
      {error && <p className="mt-1 text-sm text-accent-red">{error}</p>}
    </div>
  );
}