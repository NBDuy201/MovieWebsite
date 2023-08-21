import { authPaths, moviePaths } from "./page-path";
import { lazy } from "react";

// Layout
const BasicLayout = lazy(() => import("~/layout/BasicLayout"));
const NoHeaderLayout = lazy(() => import("~/layout/NoHeaderLayout"));

// Movie page
const HomePage = lazy(() => import("~/pages/MoviePage/HomePage"));
const MoviesPage = lazy(() => import("~/pages/MoviePage/MoviesPage"));
const DetailPage = lazy(() => import("~/pages/MoviePage/DetailPage"));
const SearchPage = lazy(() => import("~/pages/MoviePage/SearchPage"));

// Authen page
const LoginPage = lazy(() => import("~/pages/AuthenPage/LoginPage"));
const RegisterPage = lazy(() => import("~/pages/AuthenPage/RegisterPage"));

const movieRoutes = [
  { path: moviePaths.HOME, component: HomePage, layout: BasicLayout },
  { path: moviePaths.MOVIE_LIST, component: MoviesPage, layout: BasicLayout },
  { path: moviePaths.MOVIE_DETAIL, component: DetailPage, layout: BasicLayout },
  { path: moviePaths.MOVIE_SEARCH, component: SearchPage, layout: BasicLayout },
];

const authRoutes = [
  { path: authPaths.LOGIN, component: LoginPage, layout: NoHeaderLayout },
  { path: authPaths.REGISTER, component: RegisterPage, layout: NoHeaderLayout },
];

export { movieRoutes, authRoutes };
