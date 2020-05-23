import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
const Button = ({ id, text, isDisabled = false, onClick, className }) => {
  return (
    <button
      id={id}
      disabled={isDisabled}
      onClick={onClick}
      className={className}
    >
      {!isDisabled ? (
        text
      ) : (
        <FontAwesomeIcon className={"fa-spin fa-lg"} icon={faSpinner} />
      )}
    </button>
  );
};

export default Button;
