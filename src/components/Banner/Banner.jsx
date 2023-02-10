import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import useSWR from "swr";
import { fetcher, tmdbApi } from "../../config/config";
import Button from "./../button/Button";
import { PropTypes } from "prop-types";
import { listType } from "./../../config/config";
import { useNavigate } from "react-router-dom";
import { moviePaths } from "~/routes/page-path";

const Banner = () => {
  // API
  const { data } = useSWR(tmdbApi.getMovieList(listType.UPCONGMING), fetcher);
  const movies = data?.results || [];

  return (
    <section className="banner h-[500px] page-container mb-10">
      <Swiper grabCursor={true}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem data={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

const BannerItem = ({ data }) => {
  const { genre_ids, title, poster_path, id } = data;
  const navigate = useNavigate();

  return (
    <div className="bg-white w-full h-full rounded-lg relative">
      <div
        className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] 
          to-[rgba(0,0,0,0.5)] rounded-lg"
      ></div>
      {/* Image */}
      <img
        src={tmdbApi.getImage(poster_path)}
        alt=""
        className="object-cover rounded-lg w-full h-full"
      />
      <div className="absolute bottom-5 left-4 text-white">
        {/* Title */}
        <h2 className="text-4xl font-semibold mb-4">{title}</h2>
        {/* Genre */}
        <div className="flex items-center justify-start gap-x-5 mb-8">
          {genre_ids &&
            genre_ids.map((item, index) => (
              <span key={index} className="border p-2">
                {tmdbApi.getGenreName(item)}
              </span>
            ))}
        </div>
        {/* Watch now */}
        <Button
          onClick={() => navigate(`${moviePaths.MOVIE_LIST}/${id}`)}
          className="p-4 font-medium"
        >
          Watch now
        </Button>
      </div>
    </div>
  );
};

BannerItem.propTypes = {
  data: PropTypes.object,
};

export default Banner;
