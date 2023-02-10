import React from "react";
import Header from "./Header";

// eslint-disable-next-line react/prop-types
const BasicLayout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <div className="content">{children}</div>
    </>
  );
};

export default BasicLayout;
