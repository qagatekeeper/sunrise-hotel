import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";

import { sliderData } from "../../helpers/data/sliderData.js";

const Slider = () => {
  return (
    <div className="slider-wrapper">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="slider-container"
      >
        <div className="slider flex absolute-center ">
          {sliderData.map((data, index) => (
            <SwiperSlide key={index} className={data.class}>
              <h4>{data.heading}</h4>
              <h3>{data.subHeading}</h3>
              <p>{data.para}</p>
            </SwiperSlide>
          ))}
        </div>
        <div>
          <a href="#123" className="menu-link">
            Learn More
          </a>
        </div>
        <div>
          <a href="#about" className="slider-arrow bounce-top">
            <i className="fa-solid fa-arrow-down-long"></i>
          </a>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
