import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { moviePaths } from "~/routes/page-path";

const PageLogo = ({ wrapperClass }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(moviePaths.HOME)}
      className={`flex items-center gap-x-2 cursor-pointer hover:opacity-80 ${wrapperClass}`}
    >
      <img src="logo.png" alt="page_logo" className="rounded-md w-8 h-8" />
      <h4 className="text-2xl">Pixol</h4>
    </div>
  );
};

PageLogo.propTypes = {
  wrapperClass: PropTypes.string,
};

export default PageLogo;
