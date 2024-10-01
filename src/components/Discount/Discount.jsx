import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { discont } from "../../assets/images/images-data/data";
const Discount = () => {
  return (
    <section id="discount" className="mt-8">
      <div className="container">
        <span className="flex items-center">
          <div>
            <img
              src="https://img.icons8.com/windows/32/fa314a/gift.png"
              alt=""
              className="h-[50px] w-[50px]"
            />
          </div>
          <span className="text-3xl  font-bold ml-2 mt-5 mb-10 inline-block capitalize">
            big discount
          </span>
        </span>
        <div className="discountCards">
          <Swiper
            breakpoints={{
              768 : {
                slidesPerView : 3
              },
              1024 : {
                slidesPerView : 6
              }
            }}
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={2}
            className="w-full"
          >
            {discont.map((el, index) => (
              <SwiperSlide key={index}>
                <div
                  className="card border p-3 border-gray-100 shadow-2xl"
                >
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

export default Discount;
