import React, { useState } from "react";
import { FlashDeals } from "../../assets/images/images-data/data";
import { Navigation } from "swiper/modules";
import { useContext } from "react";
import { ContextShopProvider } from "../../Context/ContextShop";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const FlashCard = () => {
  const [toogle, setToggle] = useState(false);
  const { AddToCart, calculateTotalItems } = useContext(ContextShopProvider);
  return (
    <Swiper
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      className="w-full"
    >
      {FlashDeals.map((el) => (
        <SwiperSlide key={el.id}>
          <div
            className="FlashCard relativ border border-gray-200 shadow-2xl"
            key={el.id}
          >
            <div>
              <img
                src={el.cover}
                alt={el.name}
                className="h-[300px] object-cover"
              />
            </div>
            <div className="content  p-4">
              <h2>{el.name}</h2>
              <i className="fa-solid fa-star text-yellow-500"></i>
              <i className="fa-solid fa-star text-yellow-500"></i>
              <i className="fa-solid fa-star text-yellow-500"></i>
              <i className="fa-solid fa-star text-yellow-500"></i>
              <i className="fa-solid fa-star text-yellow-500"></i>
              <div className="flex justify-between items-center">
                <span className="text-red font-bold">
                  {Number(el.price)}.00
                </span>
                <span
                  onClick={() => AddToCart(el)}
                  className=" border-2 border-gray-200 p-2  text-red text-2xl rounded-md cursor-pointer  hover:bg-red hover:text-white transition duration-300"
                >
                  +
                </span>
              </div>
              <div className=" absolute top-2 left-1 bg-red text-white rounded-full px-4 py-2">
                {el.discount}% off
              </div>
              <div className="absolute top-1 right-2">
                <span className="bg-blue  text-white w-8 h-8  rounded-full mb-2 c-flex justify-center">
                  {calculateTotalItems(el)}
                </span>
                <div>
                  <i
                    className={`fa-solid fa-heart cursor-pointer text-xl ${
                      toogle ? "text-red" : "text-gray-400"
                    }`}
                    onClick={() => setToggle(!toogle)}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FlashCard;
