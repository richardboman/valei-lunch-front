import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Button for sorting ASC/DESC on a property
const SortButton = ({ text, className, onClick, icon }) => {
  return (
    <div className={className} onClick={onClick}>
      {text}
      <FontAwesomeIcon className="sort-icon" icon={icon} />
    </div>
  );
};

export default SortButton;
