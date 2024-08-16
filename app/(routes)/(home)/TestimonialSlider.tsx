"use client";

import { styled } from "@linaria/react";
import React, { FC, useCallback, useEffect, useState } from "react";

const StyledTestimonialSlider = styled.div`
  grid-column: 3 / 11;
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
`;

const Slider = styled.div`
  height: 55rem;
  position: relative;
  overflow: visible;
`;

const TestimonialSlide = styled.div`
  position: absolute;
  transition: all 0.2s;
  cursor: pointer;
`;

const SliderButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.6rem;
  align-items: center;
`;

const SliderButton = styled.button`
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 100%;
  background-color: var(--color-gray-200);
  transition: all 0.2s;

  &.active {
    background-color: var(--color-primary-200);
  }
`;

interface TestimonialSliderProps {
  children: React.ReactElement[];
}

const TestimonialSlider: FC<TestimonialSliderProps> = ({ children }) => {
  const [curSlide, setCurSlide] = useState(0);
  const maxSlide = children.length - 1;
  const seconds = 30;

  const handleNextSlide = useCallback(() => {
    if (curSlide >= maxSlide) {
      setCurSlide(0);
      return;
    }

    setCurSlide((n) => n + 1);
  }, [curSlide, maxSlide]);

  useEffect(
    function () {
      const i = setInterval(handleNextSlide, seconds * 1000);

      return function () {
        clearInterval(i);
      };
    },
    [handleNextSlide]
  );

  return (
    <StyledTestimonialSlider>
      <Slider>
        {React.Children.map(children, (child, i) => {
          return (
            <TestimonialSlide
              style={{ translate: `${115 * (i - curSlide)}%` }}
              onClick={() => setCurSlide(i)}
            >
              {child}
            </TestimonialSlide>
          );
        })}
      </Slider>

      <SliderButtons>
        {React.Children.map(children, (_, i) => (
          <SliderButton
            className={curSlide === i ? "active" : ""}
            onClick={() => setCurSlide(i)}
          />
        ))}
      </SliderButtons>
    </StyledTestimonialSlider>
  );
};

export default TestimonialSlider;
