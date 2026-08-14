import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'medium', children, ...props }) => {
  const baseStyles = 'rounded focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantStyles = variant === 'primary' 
    ? 'bg-blue-600 text-white hover:bg-blue-700' 
    : 'bg-gray-700 text-white hover:bg-gray-600';
  const sizeStyles = size === 'small' 
    ? 'px-2 py-1 text-sm' 
    : size === 'large' 
    ? 'px-4 py-2 text-lg' 
    : 'px-3 py-2';

  return (
    <button className={`${baseStyles} ${variantStyles} ${sizeStyles}`} {...props}>
      {children}
    </button>
  );
};

export default Button;