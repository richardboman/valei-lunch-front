import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";

const SortButton = ({ text, className, onClick, sortByAsc }) => {
  const icon = sortByAsc ? faSortDown : faSortUp;
  return (
    <>
      <span className={className} onClick={onClick}>
        {text}
        <FontAwesomeIcon className="sort-icon" icon={icon} />
      </span>
    </>
  );
};

export default SortButton;
