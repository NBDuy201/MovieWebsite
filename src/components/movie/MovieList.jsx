/* eslint-disable react/prop-types */
import React from "react";
import MovieItem, { MovieItemLoadingSkeleton } from "./MovieItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useSWR from "swr";
import { fetcher } from "../../config/config";
import LoadingSkeleton from "./../LoadingSkeleton/LoadingSkeleton";

const MovieList = (props) => {
  // API
  const { data, error } = useSWR(props.api, fetcher);
  const loading = !data && !error;
  const movies = data?.results || [];

  return (
    <>
      {loading ? (
        <>
          <MovieListSkeleton></MovieListSkeleton>
        </>
      ) : (
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
      )}
    </>
  );
};

const MovieListSkeleton = () => {
  return (
    <section className="movies-layout page-container mb-10">
      <h2 className="capitalize text-white font-bold text-2xl mb-3">
        <LoadingSkeleton className="w-[10%] h-[20px]"></LoadingSkeleton>
      </h2>
      <Swiper spaceBetween={50} slidesPerView={4} grabCursor={true}>
        <SwiperSlide>
          <MovieItemLoadingSkeleton></MovieItemLoadingSkeleton>
        </SwiperSlide>
        <SwiperSlide>
          <MovieItemLoadingSkeleton></MovieItemLoadingSkeleton>
        </SwiperSlide>
        <SwiperSlide>
          <MovieItemLoadingSkeleton></MovieItemLoadingSkeleton>
        </SwiperSlide>
        <SwiperSlide>
          <MovieItemLoadingSkeleton></MovieItemLoadingSkeleton>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default MovieList;
