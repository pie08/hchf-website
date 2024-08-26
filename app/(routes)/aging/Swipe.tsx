"use client";

// import Swiper core and required modules
import { A11y, Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { styled } from "@linaria/react";
import { useState } from "react";

const Container = styled.div`
  grid-column: 1 / -1;
`;

const Swipe = () => {
  const [curSlide, setCurSlide] = useState(0);
  console.log(curSlide);

  return (
    <Container>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView="auto"
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => {
          setCurSlide(swiper.activeIndex);
        }}
        onSlideChange={(swiper) => setCurSlide(swiper.activeIndex)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default Swipe;
