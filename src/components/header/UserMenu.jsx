import React from "react";
import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import useMenu from "./../../hooks/useMenu";
import Button from "./../button/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase-config";
import { authPaths } from "~/routes/page-path";

const UserMenu = () => {
  const { anchorEl, handleCloseMenu, handleOpenMenu, open } = useMenu();
  const settings = [{ text: "Logout", onClick: handleLogout }];

  const navigate = useNavigate();

  const { userInfo } = useAuth();
  function handleLogout() {
    try {
      signOut(auth);
      navigate(authPaths.LOGIN);
    } catch (error) {
      console.log(error);
    }
  }

  if (userInfo) {
    return (
      <>
        <Tooltip title={userInfo.displayName} className="max-w-[100px]">
          <div className="flex items-center gap-x-2">
            <IconButton onClick={handleOpenMenu} sx={{ p: 0 }}>
              <Avatar className="bg-primary" alt="Remy Sharp" src="" />
            </IconButton>
            <Typography className="truncate">
              Hi, {userInfo.displayName}
            </Typography>
          </div>
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
      </>
    );
  } else {
    return (
      <Button
        className="p-2 pl-4 pr-4"
        onClick={() => navigate(authPaths.LOGIN)}
      >
        Login
      </Button>
    );
  }
};

export default UserMenu;
