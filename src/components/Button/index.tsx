import React, { useRef } from 'react';

interface ButtonProps {
  className?: string; // Optional className for custom styling
  href?: string; // Optional URL for navigation
  children?: React.ReactNode; // Optional child elements for button content
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined; // Optional onClick handler
}

const Button: React.FC<ButtonProps> = ({
  className,
  href,
  children = 'Button Text',
  onClick,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (href) {
      window.location.href = href;
    }
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button className={className} ref={buttonRef} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
