import React from "react";
import Header from "./Header";

// eslint-disable-next-line react/prop-types
const BasicLayout = ({ children }) => {
  return (
    <div className="page-container">
      <Header></Header>
      <div className="content">{children}</div>
    </div>
  );
};

export default BasicLayout;
