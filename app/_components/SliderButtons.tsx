import { styled } from "@linaria/react";
import React, { FC } from "react";

const StyledSliderButtons = styled.div`
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

interface SliderButtonsProps {
  numSlides: number;
  slideIndex: number;
  callback: (i: number) => void;
}

const SliderButtons: FC<SliderButtonsProps> = ({
  numSlides,
  slideIndex,
  callback,
}) => {
  return (
    <StyledSliderButtons>
      {/* render buttons for each slide */}
      {Array.from({ length: numSlides }).map((_, i) => (
        <SliderButton
          key={i}
          aria-label={`Naviate to testimonial slide ${i}`}
          className={slideIndex === i ? "active" : ""}
          onClick={() => {
            callback(i);
          }}
        />
      ))}
    </StyledSliderButtons>
  );
};

export default SliderButtons;
