import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import BasicLayout from "./layout/BasicLayout";
import { AuthProvider } from "./context/auth-context";
import { authRoutes, movieRoutes } from "./common/page-routes";

// Movie page
const HomePage = lazy(() => import("./pages/MoviePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviePage/MoviesPage"));
const DetailPage = lazy(() => import("./pages/MoviePage/DetailPage"));
const SearchPage = lazy(() => import("./pages/MoviePage/SearchPage"));

// Authen page
const LoginPage = lazy(() => import("./pages/AuthenPage/LoginPage"));
const RegisterPage = lazy(() => import("./pages/AuthenPage/RegisterPage"));

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<></>}>
        <Routes>
          {/* Header */}
          <Route element={<BasicLayout></BasicLayout>}>
            {/* Movie page */}
            <Route path={movieRoutes.HOME} element={<HomePage></HomePage>} />
            <Route
              path={movieRoutes.MOVIE_LIST}
              element={<MoviesPage></MoviesPage>}
            />
            <Route
              path={movieRoutes.MOVIE_DETAIL}
              element={<DetailPage></DetailPage>}
            />
            <Route
              path={movieRoutes.MOVIE_SEARCH}
              element={<SearchPage></SearchPage>}
            />

            {/* Authen page */}
            <Route
              path={authRoutes.LOGIN}
              element={<LoginPage></LoginPage>}
            ></Route>
            <Route
              path={authRoutes.REGISTER}
              element={<RegisterPage></RegisterPage>}
            ></Route>
          </Route>
          {/* Footer */}
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}

export default App;
