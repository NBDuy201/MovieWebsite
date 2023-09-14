import React from "react";

const useSortMovies = (favMovies = []) => {
  const FILTER_VAL = {
    ALPHABETICAL: "title",
    RATING: "vote_average",
    RELEASE_DATE: "release_date",
  };
  const [sortedMovies, setSortedMovies] = React.useState([]);
  const [filter, setFilter] = React.useState(FILTER_VAL.ALPHABETICAL);
  const [isAsc, setIsAsc] = React.useState(true);

  const [isLoading, setIsLoading] = React.useState(false);

  function sortByField(a, b, compareField) {
    if (typeof a[compareField] === "number") {
      return isAsc
        ? a[compareField] - b[compareField]
        : b[compareField] - a[compareField];
    } else {
      return isAsc
        ? a[compareField].localeCompare(b[compareField])
        : b[compareField].localeCompare(a[compareField]);
    }
  }

  React.useEffect(() => {
    setIsLoading(true);
    let sortFavMovies = Array.isArray(favMovies) ? [...favMovies] : [];
    sortFavMovies.sort((a, b) => sortByField(a, b, filter));
    setSortedMovies(sortFavMovies);
    setIsLoading(false);
  }, [isAsc, filter, JSON.stringify(favMovies)]);

  return {
    // Filter results
    sortedMovies,
    isLoading,

    // Filter var
    filter,
    isAsc,
    setFilter,
    setIsAsc,

    // Const
    FILTER_VAL,
  };
};

export default useSortMovies;
