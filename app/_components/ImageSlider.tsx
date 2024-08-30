"use client";

import { FC, useEffect, useRef, useState } from "react";
import { styled } from "@linaria/react";
import Image from "next/image";
import { PiCaretLeft, PiCaretRight } from "react-icons/pi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";

const Slider = styled(Swiper)`
  position: relative;
  height: 53rem;
  overflow: hidden;
  max-width: 45rem;
  /* keep max-width from collapsing */
  width: 100%;

  justify-self: center;

  @media screen and (max-width: 38em) {
    height: 45rem;
  }
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  pointer-events: none;
  transition: all 0.2s;

  position: absolute;

  & img {
    object-fit: contain;
  }
`;

const SliderButton = styled.button`
  line-height: 0;
  width: 4.8rem;
  height: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  translate: 0 -50%;
  transition: all 0.2s;
  z-index: 2;

  &:hover {
    box-shadow: inset 0 0 0 1px var(--color-gray-200);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
  }

  &:nth-of-type(1) {
    right: 0;
  }

  &:nth-of-type(2) {
    left: 0;
  }
`;

interface ImageSliderProps {
  srcArr: string[];
  className?: string;
}

const ImageSlider: FC<ImageSliderProps> = ({ srcArr, className = "" }) => {
  // state for controlling slider position
  const [curSlide, setCurSlide] = useState(0);
  // stored swiper instance
  const swiperInstance = useRef<SwiperType | null>(null);
  // maximum slide index
  const maxSlide = srcArr.length - 1;

  // update slider positon on state change
  useEffect(() => {
    if (swiperInstance.current) {
      swiperInstance.current?.slideTo(curSlide);
    }
  }, [curSlide]);

  // change to next slide if not the last slide
  function handleNextSlide() {
    if (curSlide >= maxSlide) {
      setCurSlide(0);
      return;
    }

    setCurSlide((n) => n + 1);
  }

  // change to prev slide if not the first slide
  function handlePrevSlide() {
    if (curSlide <= 0) {
      setCurSlide(maxSlide);
      return;
    }

    setCurSlide((n) => n - 1);
  }

  return (
    <Slider
      spaceBetween={48}
      slidesPerView="auto"
      onSwiper={(swiper) => {
        setCurSlide(swiper.activeIndex);
        swiperInstance.current = swiper;
      }}
      onSlideChange={(swiper) => setCurSlide(swiper.activeIndex)}
      className={className}
    >
      <SliderButton onClick={handleNextSlide} aria-label="Next slide">
        <PiCaretRight />
      </SliderButton>
      <SliderButton onClick={handlePrevSlide} aria-label="Previous slide">
        <PiCaretLeft />
      </SliderButton>

      {/* render children inside SwiperSlide */}
      {srcArr.map((src, i) => (
        <SwiperSlide key={i}>
          <Slide>
            <Image
              src={src}
              alt="Slide of a client"
              fill
              sizes="(max-width: 72em) 405px, (max-width: 60em) 360px, 450px"
            />
          </Slide>
        </SwiperSlide>
      ))}
    </Slider>
  );
};

export default ImageSlider;
