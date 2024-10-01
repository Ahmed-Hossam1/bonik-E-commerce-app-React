import { category } from "../../assets/images/images-data/data";
import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Category = () => {
  return (
    <section id="Category" className="mt-8">
      <div className="container">
        <span>
          <i className="fa fa-border-all text-red text-3xl"></i>
          <span className="text-3xl  font-bold ml-2 mt-5 mb-10 inline-block capitalize">
            top categories
          </span>
        </span>

        <div className="CategoriesList">
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
            className="w-full"
          >
            {category.map((cat,index) => (
              <SwiperSlide  key={index}>
                <div className="cat relative ">
                  <div>
                    <img src={cat.cover} alt="img" />
                  </div>

                  <div className="absolute top-0 left-0  c-flex justify-between gap-5">
                    <span className="bg-gray-200 px-3 py-1 rounded-full capitalize ">
                      {cat.desc}
                    </span>

                    <span className="bg-gray-200 px-3 py-1 rounded-full capitalize ">
                      {cat.para}
                    </span>
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

export default Category;
