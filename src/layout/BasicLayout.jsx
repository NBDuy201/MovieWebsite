import React from "react";
import { Fragment } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const BasicLayout = () => {
  return (
    <Fragment>
      <Header></Header>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default BasicLayout;
