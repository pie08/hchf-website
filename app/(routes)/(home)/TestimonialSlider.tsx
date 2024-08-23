"use client";

import { styled } from "@linaria/react";
import React, { FC, useCallback, useEffect, useRef, useState } from "react";

const StyledTestimonialSlider = styled.div`
  grid-column: 3 / 11;
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  overflow: visible;
`;

const Slider = styled.div`
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
  flex-shrink: 0;
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
    background-color: transparent;
    box-shadow: 0 0 0 2px var(--color-primary-200);
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

      <SliderButtons>
        {/* render buttons for each slide */}
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
