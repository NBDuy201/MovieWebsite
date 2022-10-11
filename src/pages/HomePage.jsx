import React, { Fragment } from "react";
import { tmdbApi } from "../config/config";
import Banner from "./../components/Banner/Banner";
import MovieList from "./../components/movie/MovieList";
import { listType } from "./../config/config";

const HomePage = () => {
  return (
    <Fragment>
      {/* Banner */}
      <Banner></Banner>
      {/* Movie list */}
      <MovieList
        title="New Releases"
        api={tmdbApi.getMovieList(listType.NOW_PLAYING)}
      ></MovieList>
      <MovieList
        title="Top Rated"
        api={tmdbApi.getMovieList(listType.TOP_RATED)}
      ></MovieList>
      <MovieList
        title="Trending"
        api={tmdbApi.getMovieList(listType.TRENDING)}
      ></MovieList>
    </Fragment>
  );
};

export default HomePage;
