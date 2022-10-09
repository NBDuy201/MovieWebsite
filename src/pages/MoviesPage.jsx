import React, { Fragment } from "react";
import MovieList from "./../components/movie/MovieList";
import useSWR from "swr";
import { fetcher, tmdbApi } from "../config/config";

// Genre list: https://api.themoviedb.org/3/genre/movie/list?api_key=607dd9711e27d5eec5db5fac9e8e2414
// Movie with genre: https://api.themoviedb.org/3/discover/movie?api_key=607dd9711e27d5eec5db5fac9e8e2414&with_genres=28

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
