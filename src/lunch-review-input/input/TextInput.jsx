import React from "react";

const TextInput = ({ id, placeholder, value, onChange }) => {
  return (
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
};

export default TextInput;
