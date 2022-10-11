import React, { Fragment } from "react";
import MovieList from "./../components/movie/MovieList";
import useSWR from "swr";
import { fetcher, tmdbApi } from "../config/config";

const MoviesPage = () => {
  const { data, error } = useSWR(tmdbApi.getGenreList(), fetcher);
  const genre = data?.genres || [];
  const genreType = genre.slice(0, 4);

  return (
    <Fragment>
      {genreType.map((item) => (
        <MovieList
          key={item.id}
          title={item.name}
          api={tmdbApi.getMovieWithGenre(item.id)}
        ></MovieList>
      ))}
    </Fragment>
  );
};

export default MoviesPage;
