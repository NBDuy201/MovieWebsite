import React from "react";
import PropTypes from "prop-types";
import { CircularProgress } from "@mui/material";

const Button = ({
  onClick,
  className,
  type = "button",
  children,
  isLoading = false,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-primary rounded-lg ${className} ${
        isLoading ? "bg-opacity-50" : null
      }`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <CircularProgress
          size={25}
          className="text-white flex m-auto"
        ></CircularProgress>
      ) : (
        children
      )}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.any,
  isLoading: PropTypes.bool,
  props: PropTypes.any,
};

export default Button;
