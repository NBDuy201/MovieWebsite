import React, { Fragment } from "react";
import MovieItem from "./../components/movie/MovieItem";
import { fetcher, listType, tmdbApi } from "./../config/config";
import useSWR from "swr";
import ReactPaginate from "react-paginate";
import Button from "../components/button/Button";

const itemsPerPage = 20;

const SearchPage = () => {
  const [nextPage, setNextPage] = React.useState(1);
  const [url, setUrl] = React.useState(
    tmdbApi.getMovieList(listType.TRENDING, nextPage)
  );
  const [keyword, setKeyword] = React.useState("");

  // fetch data
  const { data, error } = useSWR(url, fetcher);
  const handleSearch = () => {
    if (keyword) {
      setUrl(tmdbApi.getSearch(keyword, nextPage));
    } else {
      setUrl(tmdbApi.getMovieList(listType.TRENDING, nextPage));
    }
  };
  // Handle side effect when search
  React.useEffect(() => {
    handleSearch();
  }, [nextPage]);

  const loading = !data && !error;
  const movies = data?.results || [];

  // Paging
  const [pageCount, setPageCount] = React.useState(0);
  const [itemOffset, setItemOffset] = React.useState(0);

  React.useEffect(() => {
    if (!data || !data.total_results) return;
    setPageCount(Math.ceil(data.total_results / itemsPerPage)); // calc total pages needed
  }, [data, itemOffset]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.total_results;
    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
  };

  return (
    <Fragment>
      {/* Search bar */}
      <div className="mb-4 flex page-container h-[35px]">
        <input
          type="text"
          className="w-full bg-slate-800 p-2 rounded-l-lg text-white outline-none"
          placeholder="Search here..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <Button className="w-14" onClick={handleSearch}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-search bg-primary text-white w-full h-full 
            p-1 rounded-r-lg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="10" cy="10" r="7"></circle>
            <line x1="21" y1="21" x2="15" y2="15"></line>
          </svg>
        </Button>
      </div>
      {/* Search results */}
      <section className="page-container mb-10">
        {loading ? (
          <div
            className="w-10 h-10 rounded-full border-4 border-primary 
              border-t-transparent animate-spin mx-auto"
          ></div>
        ) : (
          <>
            <h2 className="capitalize text-white font-bold text-2xl mb-3">
              {movies.length > 0
                ? "Search results:"
                : "There is no film matches..."}
            </h2>
            <div className="grid grid-cols-4 gap-10">
              {movies.length > 0 &&
                movies.map((item) => (
                  <MovieItem key={item.id} data={item}></MovieItem>
                ))}
            </div>
          </>
        )}
      </section>
      {/* Paging */}
      <div className="page-container mt-10 text-white mb-5">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          className="pagination flex items-center justify-center gap-x-5"
        />
      </div>
    </Fragment>
  );
};

export default SearchPage;
