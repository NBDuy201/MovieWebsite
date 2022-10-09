import React from "react";
import PropTypes from "prop-types";

const Button = ({ onClick, className, type = "button", children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-primary rounded-lg ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.any,
};

export default Button;
