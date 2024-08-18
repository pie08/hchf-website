"use client";

import { FC, useState } from "react";
import { styled } from "@linaria/react";
import Image from "next/image";
import { PiCaretLeft, PiCaretRight } from "react-icons/pi";

const Slider = styled.div`
  position: relative;
  height: 53rem;
  overflow: hidden;
  max-width: 45rem;
  /* keep max-width from collapsing */
  width: 100%;

  justify-self: center;
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

  &:hover {
    box-shadow: inset 0 0 0 1px var(--color-gray-200);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
  }

  &:nth-of-type(1) {
    right: 6.4rem;
    right: 0;
  }

  &:nth-of-type(2) {
    left: 6.4rem;
    left: 0;
  }
`;

interface ImageSliderProps {
  srcArr: string[];
}

const ImageSlider: FC<ImageSliderProps> = ({ srcArr }) => {
  const [curSlide, setCurSlide] = useState(0);
  const maxSlide = srcArr.length - 1;

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
    <Slider>
      <SliderButton onClick={handleNextSlide}>
        <PiCaretRight />
      </SliderButton>
      <SliderButton onClick={handlePrevSlide}>
        <PiCaretLeft />
      </SliderButton>

      {/* render images in slides */}
      {/* translate each slide relaive to index */}
      {srcArr.map((src, i) => (
        <Slide key={i} style={{ translate: `${100 * (i - curSlide)}%` }}>
          <Image src={src} alt="alt" fill />
        </Slide>
      ))}
    </Slider>
  );
};

export default ImageSlider;
