import React from "react";

// MUI icon
// import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { Avatar, IconButton, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase-config";
import { authPaths } from "~/routes/page-path";
import useClickOutside from "~/hooks/useClickOutSide";
import Button from "../button/Button";

const UserMenu = () => {
  const { userInfo } = useAuth();
  const navigate = useNavigate();
  const { show, setShow, nodeRef } = useClickOutside("button", false);

  function handleLogout() {
    try {
      signOut(auth);
      navigate(authPaths.LOGIN);
    } catch (error) {
      console.log(error);
    }
  }

  const settings = [
    // {
    //   onClick: () => console.log("Profile page"),
    //   text: "Profile",
    //   icon: <PersonOutlineOutlinedIcon />,
    // },
    {
      onClick: () => console.log("Favorite"),
      text: "Favorite",
      icon: <FavoriteBorderIcon />,
    },
    {
      onClick: handleLogout,
      text: "Sign out",
      icon: <ExitToAppIcon />,
      className: "!text-red-500 border-t",
    },
  ];

  if (userInfo) {
    return (
      <div ref={nodeRef} className="hidden sm:block">
        <div className="relative">
          <Tooltip title={`${userInfo.displayName}`} placement="left">
            <IconButton
              onClick={() => setShow((prv) => !prv)}
              className="user-nav !p-0 !border-none !rounded-full hover:!bg-none"
            >
              {/* Default & google avatar */}
              <Avatar
                alt={userInfo.displayName}
                src={userInfo?.picture}
                className="bg-primary"
              />
            </IconButton>
          </Tooltip>
          {show ? (
            <>
              <div
                className="absolute z-10 right-0 top-12 bg-white border border-gray-200 rounded-md 
              min-w-[220px] max-w-[240px] text-black"
              >
                {/* Account info */}
                <div className="p-4 border-b flex gap-x-2 items-center">
                  <Avatar
                    alt={userInfo.displayName}
                    src={userInfo?.picture}
                    className="bg-primary"
                  />
                  <div className="flex-1 overflow-hidden">
                    <p className="font-semibold truncate">
                      {userInfo.displayName}
                    </p>
                    <p className="text-xs text-subtitle truncate">
                      {userInfo.email}
                    </p>
                  </div>
                </div>

                {/* General settings */}
                {settings.map((setting, index) => {
                  const lastItem = settings.length - 2;
                  const firstItem = 0;
                  return (
                    <button
                      key={setting.text}
                      onClick={() => {
                        setShow(false);
                        setting.onClick();
                      }}
                      className={`flex items-center  gap-x-2 px-4 py-2 w-full hover:bg-slate-100
                      ${index === lastItem ? "mb-2" : ""}
                      ${index === firstItem ? "mt-2" : ""}
                      ${setting.className}`}
                    >
                      <div>{setting.icon}</div>
                      <div>{setting.text}</div>
                    </button>
                  );
                })}
              </div>
            </>
          ) : null}
        </div>
      </div>
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
