import { authPaths, moviePaths } from "./page-path";
import { lazy } from "react";

// Movie page
const HomePage = lazy(() => import("~/pages/MoviePage/HomePage"));
const MoviesPage = lazy(() => import("~/pages/MoviePage/MoviesPage"));
const DetailPage = lazy(() => import("~/pages/MoviePage/DetailPage"));
const SearchPage = lazy(() => import("~/pages/MoviePage/SearchPage"));

// Authen page
const LoginPage = lazy(() => import("~/pages/AuthenPage/LoginPage"));
const RegisterPage = lazy(() => import("~/pages/AuthenPage/RegisterPage"));

const movieRoutes = [
  { path: moviePaths.HOME, component: HomePage },
  { path: moviePaths.MOVIE_LIST, component: MoviesPage },
  { path: moviePaths.MOVIE_DETAIL, component: DetailPage },
  { path: moviePaths.MOVIE_SEARCH, component: SearchPage },
];

const authRoutes = [
  { path: authPaths.LOGIN, component: LoginPage },
  { path: authPaths.REGISTER, component: RegisterPage },
];

export { movieRoutes, authRoutes };
