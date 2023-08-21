import React from "react";

// eslint-disable-next-line react/prop-types
const NoHeaderLayout = ({ children }) => {
  return <div className="content page-container h-screen flex">{children}</div>;
};

export default NoHeaderLayout;
