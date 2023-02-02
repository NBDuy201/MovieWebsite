import React from "react";
import { NavLink } from "react-router-dom";

const PageNav = () => {
  return (
    <>
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
    </>
  );
};

export default PageNav;
