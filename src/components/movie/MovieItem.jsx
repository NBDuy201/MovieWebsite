import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import PropTypes from "prop-types";

const MovieItem = ({ data }) => {
  const { title, vote_average, release_date, poster_path, id } = data;
  const navigate = useNavigate();

  return (
    <div className="movie-item rounded-md bg-slate-800 p-4 text-white select-none">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        className="w-full h-[300px] object-cover rounded-md mb-4"
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

MovieItem.propTypes = {
  data: PropTypes.object,
};

export default MovieItem;
