import React from "react";

interface Props {
  children: string;
  color?: "primary" | "success" | "danger"; // The question mark indicates that it is optional.
  onClick: () => void;
}

const Button = ({ children, onClick, color = "success" }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
