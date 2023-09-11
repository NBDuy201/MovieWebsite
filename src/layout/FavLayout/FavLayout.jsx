import React from "react";
import FavLayoutHeader from "./FavLayoutHeader";

// eslint-disable-next-line react/prop-types
const FavLayout = ({ children }) => {
  return (
    <div className="page-container">
      <FavLayoutHeader></FavLayoutHeader>
      <div className="content">{children}</div>
    </div>
  );
};

export default FavLayout;
