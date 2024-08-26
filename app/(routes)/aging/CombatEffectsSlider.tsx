import Slider from "@/app/_components/Slider";
import { styled } from "@linaria/react";
import { FC, useEffect, useState } from "react";
import Card from "./Card";
import {
  PiAppleLogo,
  PiBarbell,
  PiPersonSimpleRun,
  PiPersonSimpleTaiChi,
} from "react-icons/pi";
import { useIsVisible } from "@/app/_hooks/useIsVisible";

const CardWrapper = styled.div`
  @media screen and (max-width: 38em) {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: stretch;
  }

  & > div {
    height: 100%;
  }
`;

interface CombatEffectsSliderProps {}

const CombatEffectsSlider: FC<CombatEffectsSliderProps> = ({}) => {
  return (
    <Slider autoSlide={true}>
      <CardWrapper>
        <Card
          heading="Move"
          headingIcon={<PiPersonSimpleRun />}
          listItems={["Rotate", "Move sideways", "Move forwards", "Jump"]}
        />
      </CardWrapper>

      <CardWrapper>
        <Card
          heading="Lengthen"
          headingIcon={<PiPersonSimpleTaiChi />}
          listItems={["Active stretching", "Yoga", "Static moving"]}
        />
      </CardWrapper>

      <CardWrapper>
        <Card
          heading="Strengthen & Stabilize"
          headingIcon={<PiBarbell />}
          listItems={[
            "Bu-Lateral movements",
            "Unilateral movements",
            "Compound movements",
          ]}
        />
      </CardWrapper>

      <CardWrapper>
        <Card
          heading="Eat healthy"
          headingIcon={<PiAppleLogo />}
          listItems={["Active stretching", "Yoga", "Static stretching", "Jump"]}
        />
      </CardWrapper>
    </Slider>
  );
};

export default CombatEffectsSlider;
