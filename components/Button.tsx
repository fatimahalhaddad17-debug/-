import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-[#3e004a] text-white hover:bg-[#2d0036] focus:ring-[#3e004a] shadow-lg shadow-purple-900/20",
    secondary: "bg-[#D8E59C] text-[#3e004a] hover:bg-[#cddb8b] focus:ring-[#D8E59C] shadow-lg shadow-lime-200",
    outline: "border-2 border-[#3e004a] text-[#3e004a] hover:bg-[#3e004a] hover:text-white focus:ring-[#3e004a]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;