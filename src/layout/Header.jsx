import React from "react";
import UserMenu from "./../components/header/UserMenu";
import PageNav from "./../components/header/PageNav";

const Header = () => {
  return (
    <>
      <header className="header text-white page-container flex">
        <div className="flex py-10 text-xl gap-5 mx-auto">
          <PageNav />
        </div>

        <div className="flex self-center">
          <UserMenu />
        </div>
      </header>
    </>
  );
};

export default Header;
