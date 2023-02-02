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

const UserMenu = () => {
  const { anchorEl, handleCloseMenu, handleOpenMenu, open } = useMenu();
  const settings = [{ text: "Logout", onClick: handleLogout }];

  const [isLogin, setIslogin] = React.useState(false);

  function handleLogout() {
    console.log("Logout");
  }

  if (isLogin) {
    return (
      <>
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
      </>
    );
  } else {
    return <Button className="p-2">Login</Button>;
  }
};

export default UserMenu;
