import React from "react";
import { useAuth } from "~/context/auth-context";
import useSortMovies from "~/hooks/useSortMovies";
import ListHeader from "~/modules/FavMovies/ListHeader";
import MovieCard from "~/modules/FavMovies/MovieCard";

const FavMoviesPage = () => {
  const { userInfo, isLoading } = useAuth();

  const {
    sortedMovies,
    FILTER_VAL,
    isAsc,
    setIsAsc,
    setFilter,
    isLoading: isProccessing,
  } = useSortMovies(userInfo?.favMovie);

  return (
    <div className="flex flex-col gap-y-6 mb-12">
      <ListHeader
        favMovies={sortedMovies}
        FILTER_VAL={FILTER_VAL}
        isAsc={isAsc}
        setIsAsc={setIsAsc}
        setFilter={setFilter}
      />
      {isLoading || isProccessing ? (
        "Loading"
      ) : sortedMovies?.length > 0 ? (
        <div className="grid grid-cols-2 gap-4">
          {sortedMovies.map((item) => (
            <MovieCard key={item.id} data={item} />
          ))}
        </div>
      ) : (
        <div className="w-1/4 mx-auto mt-10">
          <div className="w-full relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 rotate-45 w-[130%] h-2 bg-white opacity-70 rounded-md"></div>
            <img
              src="emptyMovie.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-center mt-4">No favorite film yet</h2>
        </div>
      )}
    </div>
  );
};

export default FavMoviesPage;
