import React from "react";
import "./HeaderButton.css";

type HeaderButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  className: string;
};

const HeaderButton = ({ children, onClick, className }: HeaderButtonProps) => {
  return (
    <button className={`${className}`} onClick={onClick}>
      <span>{children}</span>
      <svg
        viewBox="-5 -5 110 110"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,0 C0,0 100,0 100,0 C100,0 100,100 100,100 C100,100 0,100 0,40 C0,100 0,0 0,0" />
      </svg>
    </button>
  );
};

export default HeaderButton;
