import React from "react";

// eslint-disable-next-line react/prop-types
const TextInput = ({ className, type = "text", name, ...props }) => {
  return (
    <input
      type={type}
      name={name}
      className={`rounded-md p-2 bg-transparent outline-none ${className}`}
      {...props}
    />
  );
};

export default TextInput;
