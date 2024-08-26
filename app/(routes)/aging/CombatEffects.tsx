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
import { Container } from "@/app/_components/Container";
import Swipe from "./Swipe";

const GridContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.2rem;
  width: 100%;

  @media screen and (max-width: 38em) {
    grid-template-columns: 1fr;

    overflow-x: scroll;
    overflow-y: hidden;
    display: flex;

    scroll-snap-type: x mandatory;
  }
`;

const CardWrapper = styled.div`
  @media screen and (max-width: 38em) {
    width: 100%;
    flex: 0 0 100%;
    scroll-snap-stop: always;
    scroll-snap-align: start;
    display: flex;
    justify-content: center;
    align-items: stretch;
  }

  & div {
    height: 100%;
  }
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
            listItems={[
              "Active stretching",
              "Yoga",
              "Static stretching",
              "Jump",
            ]}
          />
        </CardWrapper>
      </GridContainer>
    </Section>
  );
};

export default CombatEffects;
