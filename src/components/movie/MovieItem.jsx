import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import PropTypes from "prop-types";
import LoadingSkeleton from "./../LoadingSkeleton/LoadingSkeleton";
import { tmdbApi } from "../../config/config";

const MovieItem = ({ data }) => {
  const { title, vote_average, release_date, poster_path, id } = data;
  const navigate = useNavigate();

  return (
    <div className="movie-item rounded-md bg-slate-800 p-4 text-white select-none">
      <img
        src={
          tmdbApi.getImage(poster_path, "w500") ||
          "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"
        }
        alt="no image"
        className={`w-full h-[300px] ${
          poster_path ? "object-scaledown" : "object-cover"
        } rounded-md mb-4`}
      />
      <h3 className="text-xl truncate">{title}</h3>
      <div className="flex justify-between text-gray-600 mb-5">
        <span>{new Date(release_date).getFullYear()}</span>
        <span>{vote_average}</span>
      </div>
      <Button
        className="w-full p-3 mt-auto"
        onClick={() => navigate(`/movies/${id}`)}
      >
        Watch Now
      </Button>
    </div>
  );
};

const MovieItemLoadingSkeleton = () => {
  return (
    <div className="movie-item rounded-md bg-slate-800 p-4 text-white select-none">
      {/* Image */}
      <LoadingSkeleton className="w-full h-[300px] rounded-md mb-4"></LoadingSkeleton>
      {/* Title */}
      <LoadingSkeleton className="w-[40%] h-[10px] rounded-md mb-4"></LoadingSkeleton>
      {/* Score + year */}
      <div className="flex justify-between mb-5">
        <span>
          <LoadingSkeleton className="w-[30px] h-[10px] rounded-lg"></LoadingSkeleton>
        </span>
        <span>
          <LoadingSkeleton className="w-[30px] h-[10px] rounded-lg"></LoadingSkeleton>
        </span>
      </div>
      {/* Button */}
      <LoadingSkeleton className="w-full h-[40px] p-3 mt-auto rounded-lg"></LoadingSkeleton>
    </div>
  );
};

MovieItem.propTypes = {
  data: PropTypes.object,
};

export default MovieItem;
export { MovieItemLoadingSkeleton };
