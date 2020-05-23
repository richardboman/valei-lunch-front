import React from "react";

const TextArea = ({ id, placeholder, value, onChange }) => {
  return (
    <textarea
      type="text"
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
};

export default TextArea;
