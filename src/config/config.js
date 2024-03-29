import axios from "axios";

export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "607dd9711e27d5eec5db5fac9e8e2414";

export const listType = {
  NOW_PLAYING: "now_playing",
  TOP_RATED: "top_rated",
  TRENDING: "popular",
  UPCONGMING: "upcoming",
};

export const tmdbApi = {
  getMovieList: (type, page = 1) =>
    `https://api.themoviedb.org/3/movie/${type}?api_key=${apiKey}&page=${page}`,
  getMovieDetail: (movieId) =>
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
  getMovieCredit: (movieId) =>
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`,
  getMovieVideo: (movieId) =>
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`,
  getGenreList: () =>
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`,
  getMovieWithGenre: (genreId) =>
    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`,
  getSearch: (keyword, page = 1) =>
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${keyword}&page=${page}`,
  getImage: (poster_path, size = "original") => {
    if (poster_path) {
      return `https://image.tmdb.org/t/p/${size}${poster_path}`;
    } else {
      return null;
    }
  },
  getGenreName: (genreId) => {
    if (genreList) {
      return genreList[genreId.toString()];
    } else {
      return undefined;
    }
  },
};

export const fetchGenreList = async () => {
  try {
    const response = await axios.get(tmdbApi.getGenreList());
    const genres = response?.data?.genres || [];

    return genres;
  } catch (error) {
    console.error(error);
  }
};

const mapGenreList = (genreList) => {
  if (!genreList) return {};
  var mapped = genreList.map((item) => ({ [item.id]: item.name }));
  return Object.assign({}, ...mapped);
};

const genreList = mapGenreList(await fetchGenreList());
