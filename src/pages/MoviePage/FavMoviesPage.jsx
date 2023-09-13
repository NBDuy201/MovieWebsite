import React from "react";
import { useAuth } from "~/context/auth-context";
import MovieCard from "~/modules/FavMovies/MovieCard";

const FavMoviesPage = () => {
  const { userInfo } = useAuth();
  const favMovies = userInfo?.favMovie || [];

  return (
    <div className="flex flex-col gap-y-6 mb-12">
      <div className="bg-secondary rounded-lg">
        <h1 className="p-4 border-b border-subtitle">Your favorite movies</h1>
        <div className="p-4 flex justify-between items-center">
          <div className="text-subtitle">{favMovies?.length || 0} titles</div>
          <div className="w-1/4 flex gap-x-2 items-center">
            <label className="text-subtitle">Sort by</label>
            <span className="border px-4 py-1 rounded-lg flex-1">
              List Order
            </span>
          </div>
        </div>
      </div>
      {favMovies?.length > 0 ? (
        <div className="grid grid-cols-2 gap-4">
          {favMovies.map((item) => (
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
