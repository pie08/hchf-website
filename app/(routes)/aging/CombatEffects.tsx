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
import CombatEffectsSlider from "./CombatEffectsSlider";

const GridContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.2rem;
  overflow-x: clip;

  & > div.slider {
    display: none;
  }

  @media screen and (max-width: 38em) {
    grid-template-columns: minmax(0, 1fr);

    & > div {
      display: none;
    }

    & > div.slider {
      display: flex;
    }
  }
`;

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
            listItems={["Active stretching", "Yoga", "Static stretching"]}
          />
        </CardWrapper>
        <CardWrapper>
          <Card
            heading="Strengthen & Stabilize"
            headingIcon={<PiBarbell />}
            listItems={[
              "Bi-Lateral movements",
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

        <CombatEffectsSlider />
      </GridContainer>
    </Section>
  );
};

export default CombatEffects;
