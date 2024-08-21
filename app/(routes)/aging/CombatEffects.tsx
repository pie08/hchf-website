import { Section } from "@/app/_components/Section";
import { SectionHeading } from "@/app/_components/SectionHeading";
import { styled } from "@linaria/react";
import { FC } from "react";
import Card from "./Card";
import {
  PiAppleLogo,
  PiBarbell,
  PiPersonSimpleRun,
  PiPersonSimpleTaiChi,
} from "react-icons/pi";
import { css } from "@linaria/core";
import { Container } from "@/app/_components/Container";

const GridContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.2rem;
  width: 100%;
`;

interface CombatEffectsProps {}

const CombatEffects: FC<CombatEffectsProps> = ({}) => {
  // todo: change list of eat healthy card
  return (
    <Section>
      <SectionHeading>
        <h2>How to best combat the effects of aging</h2>
      </SectionHeading>

      <GridContainer>
        <Card
          heading="Move"
          headingIcon={<PiPersonSimpleRun />}
          listItems={["Rotate", "Move sideways", "Move forwards", "Jump"]}
        />
        <Card
          heading="Lengthen"
          headingIcon={<PiPersonSimpleTaiChi />}
          listItems={["Active stretching", "Yoga", "Static moving"]}
        />
        <Card
          heading="Strengthen & Stabilize"
          headingIcon={<PiBarbell />}
          listItems={[
            "Bu-Lateral movements",
            "Unilateral movements",
            "Compound movements",
          ]}
        />
        <Card
          heading="Eat healthy"
          headingIcon={<PiAppleLogo />}
          listItems={["Active stretching", "Yoga", "Static stretching", "Jump"]}
        />
      </GridContainer>
    </Section>
  );
};

export default CombatEffects;
