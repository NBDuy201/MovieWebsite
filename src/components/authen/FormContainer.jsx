import React from "react";

// eslint-disable-next-line react/prop-types
const FormContainer = ({ children, extendH }) => {
  return (
    <div
      className={`bg-secondary flex items-center justify-center rounded-2xl px-8 py-6 page-container m-auto
      text-white w-3/5 max-w-[800px] h-[500px]`}
    >
      {children}
    </div>
  );
};

export default FormContainer;
