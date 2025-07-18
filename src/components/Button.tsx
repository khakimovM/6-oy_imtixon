import type React from "react";
import "../styles/button.css";
import type { HTMLAttributes, JSX } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  size: "medium" | "small" | "large";
  variant: "romb" | "rectangle";
  color: "orange" | "blur1" | "whiter";
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<Props> = ({
  size,
  variant,
  color,
  children,
  className = "",
  ...rest
}): JSX.Element => {
  return (
    <button
      className={`btn ${size} ${variant} ${color} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
