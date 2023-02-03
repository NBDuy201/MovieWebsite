import React from "react";

// eslint-disable-next-line react/prop-types
const FormContainer = ({ children, extendH }) => {
  return (
    <div
      className={`bg-secondary flex items-center justify-center rounded-2xl p-3 page-container m-auto
      text-white h-[60%] w-3/5 max-w-[800px] ${
        extendH ? "min-h-[500px]" : "min-h-[400px]"
      }`}
    >
      {children}
    </div>
  );
};

export default FormContainer;
