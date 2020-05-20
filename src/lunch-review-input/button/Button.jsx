import React from "react";

const Button = ({ id, text, onClick, className }) => {
  return (
    <button id={id} className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
