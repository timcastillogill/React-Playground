import React from "react";
import "./HeaderButton.css";

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
  className: string;
}

const HeaderButton: React.FC<Props> = ({ children, onClick, className }) => {
  return (
    <button className={`${className} button`} onClick={onClick}>
      {children}
    </button>
  );
};

export default HeaderButton;
