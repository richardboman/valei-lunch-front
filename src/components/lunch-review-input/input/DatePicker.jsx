import React from "react";

const DatePicker = ({ id, placeholder, value, onChange }) => {
  return (
    <input
      type="date"
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
};

export default DatePicker;
