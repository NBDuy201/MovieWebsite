import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import PropTypes from "prop-types";
import LoadingSkeleton from "./../LoadingSkeleton/LoadingSkeleton";
import { tmdbApi } from "../../config/config";
import { moviePaths } from "~/routes/page-path";
import { useAuth } from "~/context/auth-context";

// MUI icon
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import StarIcon from "@mui/icons-material/Star";
import { addFavMovie, removeFavMovie } from "~/utils/api-call/favorite-api";

const MovieItem = ({ data }) => {
  const { title, vote_average, release_date, poster_path, id } = data;
  const navigate = useNavigate();
  const { userInfo, authInfo, getUserData } = useAuth();

  async function addFavorite(movieData) {
    try {
      await addFavMovie(movieData, authInfo.uid);
    } catch (error) {
      console.log(error);
    }
  }

  async function removeFavorite(movieData) {
    try {
      await removeFavMovie(movieData, authInfo.uid);
    } catch (error) {
      console.log(error);
    }
  }

  function favBtnClick() {
    const movieData = data;
    userInfo?.favMovie?.find((item) => item.id === id)
      ? removeFavorite(movieData)
      : addFavorite(movieData);
    getUserData();
  }

  return (
    <div className="movie-item rounded-md bg-slate-800 p-4 text-white select-none relative">
      <button className="absolute right-2 top-3" onClick={favBtnClick}>
        <BookmarkIcon className="text-secondary text-[70px] opacity-50 hover:opacity-100" />
        {userInfo?.favMovie?.find(item => item.id === id) ? (
          <FavoriteIcon className="text-white absolute right-[22px] top-5 pointer-events-none" />
        ) : (
          <FavoriteBorderIcon className="absolute right-[22px] top-5 pointer-events-none" />
        )}
      </button>
      <img
        src={tmdbApi.getImage(poster_path, "w500") || "/notFound.png"}
        alt="no image"
        className={`w-full h-[300px] ${
          poster_path ? "object-scaledown" : "object-cover"
        } rounded-md mb-4`}
      />
      <h3 className="text-xl truncate">{title}</h3>
      <div className="flex justify-between text-subtitle mb-5">
        <span>{new Date(release_date).getFullYear()}</span>
        <span className="flex items-center gap-x-1">
          <StarIcon className="text-yellow-500 text-lg" /> {vote_average}
        </span>
      </div>
      <Button
        className="w-full p-3 mt-auto"
        onClick={() => navigate(`${moviePaths.MOVIE_LIST}/${id}`)}
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
