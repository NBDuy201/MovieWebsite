import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { tmdbApi } from "~/config/config";

import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import StarIcon from "@mui/icons-material/Star";
import { moviePaths } from "~/routes/page-path";
import { useAuth } from "~/context/auth-context";
import { removeFavMovie } from "~/utils/api-call/favorite-api";

const MovieCard = ({ data = {} }) => {
  const {
    title,
    vote_average,
    release_date,
    poster_path,
    id,
    overview,
    genre_ids,
  } = data;
  const navigate = useNavigate();
  const { authInfo, getUserData } = useAuth();

  async function removeFavorite(movieData) {
    try {
      await removeFavMovie(movieData, authInfo.uid);
    } catch (error) {
      console.log(error);
    }
  }

  function handleRemoveFav() {
    const movieData = data;

    removeFavorite(movieData);
    getUserData();
  }

  return (
    <div className="movie-card rounded-md bg-secondary p-4 relative flex gap-x-4">
      <button className="absolute left-2 top-3 z-10" onClick={handleRemoveFav}>
        <BookmarkIcon className="text-secondary text-[70px] opacity-50 hover:opacity-100" />
        <FavoriteIcon className="text-white absolute right-[22px] top-5 pointer-events-none" />
      </button>
      <img
        src={tmdbApi.getImage(poster_path, "w500") || "/notFound.png"}
        alt="no image"
        onClick={() => navigate(moviePaths.MOVIE_DETAIL(id))}
        className={`w-1/5 min-w-[120px] max-h-[300px] object-cover rounded-md cursor-pointer hover:opacity-80`}
      />
      {/* ${poster_path ? "object-scale-down" : "object-cover"} */}
      <div className="flex-1">
        <h2 className="">{title}</h2>
        <p className="text-subtitle text-sm flex">
          <span className="after:content-['|'] after:px-2">
            {new Date(release_date).getFullYear()}
          </span>
          <span className="">
            {genre_ids
              ?.map((genreId) => tmdbApi.getGenreName(genreId))
              ?.join(", ")}
          </span>
        </p>
        <div className="flex items-center gap-x-1">
          <StarIcon className="text-yellow-500 text-lg" /> {vote_average}
        </div>
        <p className="line-clamp-4">{overview}</p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  data: PropTypes.object,
};

export default MovieCard;
