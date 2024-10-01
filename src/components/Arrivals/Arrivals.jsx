import React from "react";
import { arrivals } from "../../assets/images/images-data/data";
import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Arrivals = () => {
  return (
    <section id="Arrivals" className="mt-8">
      <div className="container">
        <span className="flex">
          <div>
            <img
              src="https://img.icons8.com/glyph-neue/64/26e07f/new.png"
              alt=""
            />
          </div>
          <span className="text-3xl  font-bold ml-2 mt-5 mb-10 inline-block capitalize">
            new Arrivals
          </span>
        </span>
        <div className="ArrivalsCards">
          <Swiper
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={2}
            className="w-full"
          >
            {arrivals.map((el,index) => (
              <SwiperSlide  key={index}>
                <div className="box">
                  <div>
                    <img
                      src={el.cover}
                      alt={el.name}
                      className="h-[200px] object-contain"
                    />
                  </div>
                  <div className="content">
                    <h2 className="font-bold capitalize">{el.name}</h2>
                    <span>{el.price}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Arrivals;
