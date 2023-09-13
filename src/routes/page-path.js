const moviePaths = {
  HOME: "/",
  MOVIE_LIST: "/movies",
  MOVIE_DETAIL: (movieId) =>
    movieId ? `/movies/${movieId}` : "/movies/:movieId",
  MOVIE_SEARCH: "/discover",
  FAV_MOVIES: "/favourite",
};

const authPaths = {
  LOGIN: "/login",
  REGISTER: "/register",
};

export { moviePaths, authPaths };
