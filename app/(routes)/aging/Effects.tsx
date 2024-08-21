import GridContainer from "@/app/_components/GridContainer";
import { Section } from "@/app/_components/Section";
import { SectionHeading } from "@/app/_components/SectionHeading";
import { styled } from "@linaria/react";
import { FC } from "react";
import { PiArrowDown, PiArrowUp } from "react-icons/pi";
import Card from "./Card";
import { css } from "@linaria/core";

const gridStyles = css`
  width: 100%;
`;

const AgingCard = styled.div`
  position: relative;
  background-color: var(--color-gray-100);
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 3.2rem;
  overflow: hidden;

  & ul,
  & h3 {
    z-index: 2;
  }

  & ul {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    /* account for ::marker */
    padding-left: 1.53rem;

    & li p {
      font-size: 2rem;
    }
  }
`;

const ArrowDown = styled.div`
  position: absolute;
  top: 0;
  translate: 25% -25%;

  & svg {
    color: var(--color-primary-200);
    width: 50rem;
    height: 50rem;
  }

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    background-image: linear-gradient(
      to top,
      rgb(243, 244, 246, 0%),
      rgb(243, 244, 246) 75%
    );
  }
`;

const ArrowUp = styled.div`
  position: absolute;
  top: 0;
  translate: 25% -10%;

  & svg {
    color: var(--color-primary-200);
    width: 50rem;
    height: 50rem;
  }

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    background-image: linear-gradient(
      to bottom,
      rgb(243, 244, 246, 0%),
      rgb(243, 244, 246) 75%
    );
  }
`;

interface EffectsProps {}

const Effects: FC<EffectsProps> = ({}) => {
  return (
    <Section data-gray>
      <SectionHeading>
        <h2>How does aging affect you?</h2>
      </SectionHeading>

      <GridContainer cols={2} className={gridStyles}>
        <Card
          heading="Aging leads to decreases in..."
          type="decreasing"
          listItems={[
            "Mobility and Flexibility",
            "Muscle tone and Muscle mass",
            "Movement",
            "Overall health",
            "Strength",
            "Bone density",
          ]}
        />
        <Card
          heading="Aging leads to increases in..."
          type="increasing"
          listItems={[
            "Tightness and Rigidity",
            "Bodyweight",
            "Body dysfunction",
            "Risk of cardiovascular disease",
            "Sedentary lifestyle",
            "Risk of type 2 diabetes",
          ]}
        />
      </GridContainer>
    </Section>
  );
};

export default Effects;
