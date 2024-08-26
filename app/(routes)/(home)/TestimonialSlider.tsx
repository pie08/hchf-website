"use client";

import { styled } from "@linaria/react";
import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import SliderButtons from "@/app/_components/SliderButtons";

const StyledTestimonialSlider = styled.div`
  grid-column: 3 / 11;
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  overflow: visible;

  @media screen and (max-width: 52em) {
    grid-column: 2 / 12;
  }

  @media screen and (max-width: 38em) {
    grid-column: 1 / -1;
  }
`;

const Slider = styled.div`
  position: relative;
  overflow: visible;

  @media screen and (max-width: 38em) {
    overflow-x: scroll;
    overflow-y: hidden;
    display: flex;
    gap: 6.4rem;
    height: auto !important;

    scroll-snap-type: x mandatory;
  }
`;

const TestimonialSlide = styled.div`
  position: absolute;
  transition: all 0.2s;
  cursor: pointer;

  @media screen and (max-width: 38em) {
    position: static;
    translate: 0 0 !important;
    width: 100%;
    flex: 0 0 100%;
    scroll-snap-stop: always;
    scroll-snap-align: start;
  }
`;

interface TestimonialSliderProps {
  children: React.ReactElement[];
  autoSlide?: boolean;
}

const TestimonialSlider: FC<TestimonialSliderProps> = ({
  children,
  autoSlide = true,
}) => {
  const [curSlide, setCurSlide] = useState(0);
  const [sliderHeight, setSliderHeight] = useState(560);
  const sliderRef = useRef<HTMLDivElement>(null);
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

  // register interval timer if autoSlide in true
  useEffect(
    function () {
      if (!autoSlide) return;

      const i = setInterval(handleNextSlide, seconds * 1000);

      return function () {
        clearInterval(i);
      };
    },
    [handleNextSlide, autoSlide]
  );

  // set container height
  useEffect(() => {
    let maxHeight = 0;
    sliderRef.current?.childNodes.forEach((node) => {
      if (node instanceof Element) {
        const nodeHeight = node.getBoundingClientRect().height;
        console.log(node.getBoundingClientRect());
        if (nodeHeight > maxHeight) {
          maxHeight = nodeHeight;
        }
      }
    });
    setSliderHeight(maxHeight);
  }, []);

  return (
    <StyledTestimonialSlider>
      <Slider ref={sliderRef} style={{ height: sliderHeight + "px" }}>
        {/* render children in a testimonial slide */}
        {/* translate each slide relaive to index */}
        {React.Children.map(children, (child, i) => {
          return (
            <TestimonialSlide
              style={{
                translate: `${115 * (i - curSlide)}%`,
              }}
              onClick={() => setCurSlide(i)}
            >
              {child}
            </TestimonialSlide>
          );
        })}
      </Slider>

      <SliderButtons
        numSlides={maxSlide + 1}
        slideIndex={curSlide}
        callback={(i) => {
          setCurSlide(i);
        }}
      />
    </StyledTestimonialSlider>
  );
};

export default TestimonialSlider;
