import React, { Fragment } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10 text-xl">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-primary" : "")}
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
          Movies
        </NavLink>
        <NavLink
          to="/discover"
          className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
          Discover
        </NavLink>
      </header>
    </Fragment>
  );
};

export default Header;
