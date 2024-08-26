"use client";

import { styled } from "@linaria/react";
import React, {
  FC,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import SliderButtons from "@/app/_components/SliderButtons";

import {
  Swiper,
  SwiperRef,
  SwiperSlide,
  useSwiper,
  useSwiperSlide,
} from "swiper/react";
import "swiper/css";
import { Swiper as SwiperType } from "swiper/types";
import { useIsVisible } from "../_hooks/useIsVisible";

const StyledSlider = styled.div`
  grid-column: 3 / 11;
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  overflow: visible;

  & .swiper {
    overflow: visible;
  }

  & .swiper-slide {
    cursor: pointer;
  }

  @media screen and (max-width: 52em) {
    grid-column: 2 / 12;
  }

  @media screen and (max-width: 38em) {
    grid-column: 1 / -1;
  }
`;

interface TestimonialSliderProps {
  children: React.ReactElement[];
  autoSlide?: boolean;
}

const Slider: FC<TestimonialSliderProps> = ({ children, autoSlide = true }) => {
  // state for setting autoSlide
  const [curSlide, setCurSlide] = useState(0);
  let swiperInstance = useRef<SwiperType | null>(null);
  const { isVisible, targetRef } = useIsVisible<HTMLDivElement>();

  const maxSlide = children.length - 1;
  // num of seconds before each slide change
  const seconds = 20;

  // change to next slide if not the last slide
  const handleNextSlide = useCallback(() => {
    if (curSlide >= maxSlide) {
      setCurSlide(0);
      return;
    }

    setCurSlide((n) => n + 1);
  }, [curSlide, maxSlide]);

  // update slider position on state change
  useEffect(() => {
    swiperInstance.current?.slideTo(curSlide);
  }, [curSlide]);

  // register interval timer if autoSlide in true
  useEffect(
    function () {
      if (!autoSlide || !isVisible) return;

      const i = setInterval(handleNextSlide, seconds * 1000);

      return function () {
        clearInterval(i);
      };
    },
    [handleNextSlide, autoSlide, isVisible]
  );

  return (
    <StyledSlider className="slider" ref={targetRef}>
      <Swiper
        spaceBetween={48}
        slidesPerView="auto"
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => {
          setCurSlide(swiper.activeIndex);
          swiperInstance.current = swiper;
        }}
        onSlideChange={(swiper) => setCurSlide(swiper.activeIndex)}
      >
        {React.Children.map(children, (child, i) => {
          return (
            <SwiperSlide onClick={() => setCurSlide(i)}>{child}</SwiperSlide>
          );
        })}
      </Swiper>

      <SliderButtons
        numSlides={maxSlide + 1}
        slideIndex={curSlide}
        callback={(i) => {
          setCurSlide(i);
        }}
      />
    </StyledSlider>
  );
};

export default Slider;
