import React, { Fragment, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import BasicLayout from "./layout/BasicLayout";
import { AuthProvider } from "./context/auth-context";

const HomePage = lazy(() => import("./pages/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));
const DetailPage = lazy(() => import("./pages/DetailPage"));
const SearchPage = lazy(() => import("./pages/SearchPage"));

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<></>}>
        <Routes>
          {/* Header */}
          <Route element={<BasicLayout></BasicLayout>}>
            {/* Main content */}
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/movies" element={<MoviesPage></MoviesPage>}></Route>
            <Route
              path="/movies/:movieId"
              element={<DetailPage></DetailPage>}
            ></Route>
            <Route path="/discover" element={<SearchPage></SearchPage>}></Route>
          </Route>
          {/* Footer */}
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}

export default App;
