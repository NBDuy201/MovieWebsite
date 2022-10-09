/* eslint-disable react/react-in-jsx-scope */
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import DetailPage from "./pages/DetailPage";
import BasicLayout from "./layout/BasicLayout";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Fragment>
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
    </Fragment>
  );
}

export default App;
