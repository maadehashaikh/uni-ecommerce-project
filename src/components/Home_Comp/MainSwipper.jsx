import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./MainSwipper.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const MainSwipper = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Navigation, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img
          src="https://cdn.shopify.com/s/files/1/2337/7003/files/banner2-173115613491821.png?width=2064"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://cdn.shopify.com/s/files/1/0618/4619/2349/files/haseensbanner-173004796647754.png?width=2064"
          alt=""
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="https://cdn.shopify.com/s/files/1/2337/7003/files/jhilmilwebbanner_1_-173116141933480.png?width=2064"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://cdn.shopify.com/s/files/1/0618/4619/2349/files/husnaara_live_now_1_-173046586723799.png?width=2064"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://cdn.shopify.com/s/files/1/0618/4619/2349/files/Best_sellers-web-172898014472229.png?width=2064"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default MainSwipper;
