import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import useMenu from "./../hooks/useMenu";

const Header = () => {
  const { anchorEl, handleCloseMenu, handleOpenMenu, open } = useMenu();
  const settings = [{ text: "Logout", onClick: handleLogout }];

  function handleLogout() {
    console.log("Logout");
  }

  return (
    <>
      <header className="header text-white page-container flex">
        <div className="flex py-10 text-xl gap-5 mx-auto">
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
        </div>

        <div className="flex self-center">
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenMenu} sx={{ p: 0 }}>
              <Avatar className="bg-primary" alt="Remy Sharp" src="" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleCloseMenu}
          >
            {settings.map((setting) => (
              <MenuItem
                key={setting.text}
                onClick={() => {
                  handleCloseMenu();
                  setting.onClick();
                }}
              >
                <Typography textAlign="center">{setting.text}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </div>
      </header>
    </>
  );
};

export default Header;
