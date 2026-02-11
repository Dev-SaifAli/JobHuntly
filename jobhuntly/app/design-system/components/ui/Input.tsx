import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}


export default function Input({ 
  label, 
  error, 
  icon, 
  className = "", 
  ...props 
}: InputProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {/* 2. Optional Label using typography tokens */}
      {label && (
        <label className="text-body-sm font-weight-semibold text-neutrals-900 font-body">
          {label}
        </label>
      )}

      <div className="relative flex items-center">
        {/* 3. Icon Positioning */}
        {icon && (
          <div className="absolute left-4 text-neutrals-500 z-10">
            {icon}
          </div>
        )}

        {/* 4. The actual Input with conditional styling */}
        <input
          className={`
            w-full py-4 px-4 bg-white border outline-none transition-all font-body text-body-nm
            ${icon ? "pl-12" : "pl-4"}
            ${error ? "border-accents-red" : "border-neutrals-200 focus:border-brand-primary"}
            ${className}
          `}
          {...props}
        />
      </div>

      {/* 5. Error Message Section */}
      {error && (
        <span className="text-body-sm text-accents-red font-body">
          {error}
        </span>
      )}
    </div>
  );
}