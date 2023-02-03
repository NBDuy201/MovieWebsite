/* eslint-disable react/prop-types */
import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher, tmdbApi } from "../../config/config";

const DetailPage = () => {
  const { movieId } = useParams();

  const { data, error } = useSWR(tmdbApi.getMovieDetail(movieId), fetcher);
  if (!data) return null;
  const { backdrop_path, poster_path, title, genres, overview } = data;

  return (
    <div className="p-5">
      {/* Image */}
      <div className="w-full h-[600px] relative rounded-lg">
        <div className="overlay absolute bg-black inset-0 bg-opacity-75 rounded-lg"></div>
        <div
          className="w-full h-full bg-cover rounded-lg"
          style={{
            backgroundImage: `url(${tmdbApi.getImage(backdrop_path)})`,
          }}
        ></div>
      </div>
      <div className="w-full h-[300px] max-w-[800px] mx-auto -mt-[150px] relative mb-5">
        <img
          src={`${tmdbApi.getImage(poster_path)}`}
          alt=""
          className="w-full h-full object-scale-down rounded-lg"
        />
      </div>
      {/* Title */}
      <h1 className="text-white text-4xl flex justify-center mb-5">{title}</h1>
      {/* Genre */}
      <div className="flex justify-center items-center gap-x-5 mb-5">
        {genres.map((item) => (
          <span
            key={item.id}
            className="border p-2 text-primary border-primary"
          >
            {item.name}
          </span>
        ))}
      </div>
      {/* Overview */}
      <p className="text-white text-md mb-5 max-w-[600px] mx-auto leading-relaxed text-center">
        {overview}
      </p>
      {/* Casst */}
      <CastList movieId={movieId}></CastList>
      {/* Trailer */}
      <MovieVideo movieId={movieId}></MovieVideo>
    </div>
  );
};

const CastList = ({ movieId }) => {
  const { data, error } = useSWR(tmdbApi.getMovieCredit(movieId), fetcher);
  if (!data) return null;
  const cast = data.cast;

  return (
    <div className="w-full mb-5">
      <h1 className="text-white text-4xl mb-5 flex justify-center">Casts</h1>
      <div className="grid grid-cols-4 gap-x-10">
        {cast.slice(0, 4).map((item) => (
          <div key={item.id} className="cast-item text-white text-center">
            <img
              src={`${tmdbApi.getImage(item.profile_path)}`}
              alt=""
              className="w-full h-[350px] object-cover rounded-lg"
            />
            <h3 className="text-xl font-medium">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

const MovieVideo = ({ movieId }) => {
  const { data, error } = useSWR(tmdbApi.getMovieVideo(movieId), fetcher);
  if (!data) return null;
  const trailerList = data.results;
  return (
    <div className="">
      <h1 className="text-white text-4xl mb-5 flex justify-center">Trailers</h1>
      <div className="mb-5 items-center flex flex-col justify-center gap-y-5">
        {trailerList.slice(0, 3).map((item) => (
          <div key={item.id} className="w-[80%] aspect-video rounded-lg">
            <iframe
              src={`https://www.youtube.com/embed/${item.key}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full object-fill rounded-lg"
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailPage;
