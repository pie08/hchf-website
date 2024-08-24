import { Section } from "@/app/_components/Section";
import { SectionHeading } from "@/app/_components/SectionHeading";
import { styled } from "@linaria/react";
import { FC } from "react";
import { PiArrowDown, PiArrowUp } from "react-icons/pi";
import Card from "./Card";
import { css } from "@linaria/core";
import { Container } from "@/app/_components/Container";

const GridContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.2rem;
  width: 100%;
`;

interface EffectsProps {}

const Effects: FC<EffectsProps> = ({}) => {
  return (
    <Section data-gray>
      <SectionHeading>
        <h2>How does aging affect you?</h2>
      </SectionHeading>

      <GridContainer>
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
