import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./CategorySwipper.css";

import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
const CategorySwipper = ({ images }) => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        slidesPerGroup={1}
        centeredSlides={false}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
          1024: {
            slidesPerView: 4,
            slidesPerGroup: 1,
          },
        }}
        scrollbar={true}
        navigation={true}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="category_Swipper mt-6"
      >
        {images.map((item, index) => (
          <SwiperSlide className="category_slider" key={index}>
            <div className="flex flex-col items-center justify-center">
              <img src={item.img} alt={`Slide ${index + 1}`} />
              <h2 className="text-red-500 mt-2">
                PKR <span>{item.price}</span>
              </h2>
              <p className="font-light text-black font-sans text-xs mb-4">
                Haseens Offical
                <span className="font-semibold ml-2 text-slate-700 font-sans text-base">
                  {item.name}{" "}
                </span>
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CategorySwipper;
