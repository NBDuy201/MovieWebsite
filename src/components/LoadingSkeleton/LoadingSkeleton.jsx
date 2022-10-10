import React from "react";
import { PropTypes } from "prop-types";

const LoadingSkeleton = (props) => {
  return <div className={`skeleton ${props.className}`}></div>;
};

LoadingSkeleton.propTypes = {
  props: PropTypes.object,
  className: PropTypes.string,
};

export default LoadingSkeleton;
