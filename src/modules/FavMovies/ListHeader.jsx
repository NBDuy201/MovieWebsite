/* eslint-disable react/prop-types */
import React from "react";
import { GoSortAsc, GoSortDesc } from "react-icons/go";

const ListHeader = ({
  favMovies = [],
  FILTER_VAL = {},
  setFilter = () => {},
  isAsc = true,
  setIsAsc = () => {},
}) => {
  const FILTER_LIST = [
    {
      title: "Alphabetical",
      value: FILTER_VAL.ALPHABETICAL,
    },
    {
      title: "Rating",
      value: FILTER_VAL.RATING,
    },
    {
      title: "Release Date",
      value: FILTER_VAL.RELEASE_DATE,
    },
  ];

  return (
    <div className="bg-secondary rounded-lg sticky top-0 z-20">
      <h1 className="p-4 border-b border-subtitle">Your favorite movies</h1>
      <div className="p-4 flex justify-between items-center">
        <div className="text-subtitle">{favMovies?.length || 0} titles</div>
        <div className="w-1/4 flex gap-x-2 items-center">
          <label htmlFor="countries" className="text-sm">
            Sort by
          </label>
          <select
            id="countries"
            onChange={(e) => setFilter(e.target.value)}
            className="border border-white bg-secondary text-sm rounded-lg block flex-1 p-2"
          >
            {FILTER_LIST.map((item) => (
              <option
                key={item.value}
                value={item.value}
                className="bg-secondary"
              >
                {item.title}
              </option>
            ))}
          </select>
          {isAsc ? (
            <GoSortAsc
              className="text-3xl cursor-pointer"
              onClick={() => setIsAsc(false)}
            />
          ) : (
            <GoSortDesc
              className="text-3xl cursor-pointer"
              onClick={() => setIsAsc(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ListHeader;
