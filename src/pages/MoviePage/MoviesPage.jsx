import React, { Fragment } from "react";
import MovieList from "../../components/movie/MovieList";
import { fetchGenreList, tmdbApi } from "../../config/config";

const sectionPerLoad = 2;
const genre = await fetchGenreList();

const MoviesPage = () => {
  const [sectionToLoad, setSectionToLoad] = React.useState(sectionPerLoad);
  const genreType = genre.slice(0, sectionToLoad);

  const handleLoadMore = () => {
    setSectionToLoad(sectionToLoad + sectionPerLoad);
  };

  return (
    <Fragment>
      {genreType.map((item) => (
        <MovieList
          key={item.id}
          title={item.name}
          api={tmdbApi.getMovieWithGenre(item.id)}
        ></MovieList>
      ))}
      <div className="text-center mb-5">
        <button className="text-white" onClick={handleLoadMore}>
          See more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-chevron-down mx-auto"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      </div>
    </Fragment>
  );
};

export default MoviesPage;
