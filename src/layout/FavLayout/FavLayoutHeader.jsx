import React from "react";
import UserMenu from "~/components/header/UserMenu";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Button from "~/components/button/Button";
import { useNavigate } from "react-router-dom";
import { moviePaths } from "~/routes/page-path";

const FavLayoutHeader = () => {
  const navigate = useNavigate();
  return (
    <header className="header text-white flex justify-between">
      <div className="flex py-10 text-xl">
        <Button
          icon={<ArrowBackIosIcon />}
          className="p-2 px-4"
          onClick={() => navigate(moviePaths.HOME)}
        >
          Back
        </Button>
      </div>

      <div className="flex self-center">
        <UserMenu />
      </div>
    </header>
  );
};

export default FavLayoutHeader;
