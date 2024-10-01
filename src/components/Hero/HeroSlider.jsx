import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Herodata } from "../../assets/images/images-data/data";

const HeroSlider = () => {
  return (
    <Swiper
      // install Swiper modules
      className="w-full"
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {Herodata.map((el) => (
        <SwiperSlide key={el.id} className="p-20 md:px-20 ">
          <div className="md:flex items-center justify-center  mt-10 md:mt-0  h-full md:gap-5">
            <div className="text">
              <h2 className=" text-4xl md:text-6xl font-bold capitalize mb-5">{el.title}</h2>
              <p className="mb-7">{el.desc}</p>
              <button className="btn bg-red text-white tracking-wider">
                visit collections
              </button>
            </div>

            <div>
              <img src={el.cover} alt={el.title} className="w-[200px]"  />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
