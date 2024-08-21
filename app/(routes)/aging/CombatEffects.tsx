import GridContainer from "@/app/_components/GridContainer";
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

const gridStyles = css`
  width: 100%;
  align-items: center;
`;

interface CombatEffectsProps {}

const CombatEffects: FC<CombatEffectsProps> = ({}) => {
  return (
    <Section>
      <SectionHeading>
        <h2>How to best combat the effects of aging</h2>
      </SectionHeading>

      <GridContainer className={gridStyles} cols={2}>
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
