"use client";

import { FC, useState } from "react";
import { styled } from "@linaria/react";
import Image from "next/image";
import { PiCaretLeft, PiCaretRight } from "react-icons/pi";

const Slider = styled.div`
  position: relative;
  height: 53rem;
  overflow: hidden;
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;

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
  }

  &:nth-of-type(2) {
    left: 6.4rem;
  }
`;

interface ImageSliderProps {
  srcArr: string[];
}

const ImageSlider: FC<ImageSliderProps> = ({ srcArr }) => {
  const [curSlide, setCurSlide] = useState(0);
  // add logic to move through slider

  return (
    <Slider>
      <SliderButton>
        <PiCaretRight />
      </SliderButton>
      <SliderButton>
        <PiCaretLeft />
      </SliderButton>

      {srcArr.map((src, i) => (
        <Slide key={src} style={{ translate: `${100 * (i - curSlide)}%` }}>
          <Image src={src} alt="alt" fill />
        </Slide>
      ))}
    </Slider>
  );
};

export default ImageSlider;
