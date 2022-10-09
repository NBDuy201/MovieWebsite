/* eslint-disable react/prop-types */
import React from "react";
import MovieItem from "./MovieItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useSWR from "swr";
import { fetcher } from "../../config/config";

const MovieList = (props) => {
  // API
  const { data, error } = useSWR(props.api, fetcher);
  const movies = data?.results || [];

  return (
    <section className="movies-layout page-container mb-10">
      <h2 className="capitalize text-white font-bold text-2xl mb-3">
        {props.title}
      </h2>
      <Swiper spaceBetween={50} slidesPerView={4} grabCursor={true}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieItem data={item}></MovieItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default MovieList;
