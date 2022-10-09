import React, { Fragment } from "react";
import Banner from "./../components/Banner/Banner";
import MovieList from "./../components/movie/MovieList";

const listType = {
  NOW_PLAYING: "now_playing",
  TOP_RATED: "top_rated",
  Trending: "popular",
};

const HomePage = () => {
  return (
    <Fragment>
      {/* Banner */}
      <Banner></Banner>
      {/* Movie list */}
      <MovieList
        title="New Releases"
        api={`https://api.themoviedb.org/3/movie/${listType.NOW_PLAYING}?api_key=607dd9711e27d5eec5db5fac9e8e2414`}
      ></MovieList>
      <MovieList
        title="Top Rated"
        api={`https://api.themoviedb.org/3/movie/${listType.TOP_RATED}?api_key=607dd9711e27d5eec5db5fac9e8e2414`}
      ></MovieList>
      <MovieList
        title="Trending"
        api={`https://api.themoviedb.org/3/movie/${listType.Trending}?api_key=607dd9711e27d5eec5db5fac9e8e2414`}
      ></MovieList>
    </Fragment>
  );
};

export default HomePage;
