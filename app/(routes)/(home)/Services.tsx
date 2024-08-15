import { Container } from "@/app/_components/Container";
import { GridContainer } from "@/app/_components/GridContainer";
import { Section } from "@/app/_components/Section";
import SectionHeading from "@/app/_components/SectionHeading";
import { styled } from "@linaria/react";
import { FC } from "react";
import image from "../../../public/assets/images/client-images/adult-training/anna-1.webp";

const ServicesContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
`;

interface ServicesProps {}

const Services: FC<ServicesProps> = ({}) => {
  return (
    <Section>
      <SectionHeading
        subheading="Services"
        heading="Persinalized training programs"
      />

      <ServicesContainer>
        <Service></Service>
      </ServicesContainer>
    </Section>
  );
};

const ServiceContainer = styled(GridContainer)`
  width: 100%;
  align-items: center;

  & *:nth-child(1) {
    grid-column: 1 / 7;
  }

  & *:nth-child(2) {
    grid-column: 7 / 12;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

interface ServiceProps {}

import ImageSlider from "@/app/_components/ImageSlider";
const Service: FC<ServiceProps> = ({}) => {
  // todo: change image to slider component
  return (
    <ServiceContainer>
      {/* add full array of images */}
      {/* re-organize assets folder */}
      <ImageSlider srcArr={[image.src, image.src]} />

      <TextContainer>
        <h3>Adult training</h3>
        <p>
          Providing a Trustworthy, Knowledgeable, Structured Training Approach
          for Adults over 50. From the Functional Aspects of Improving
          Stability, Increasing Strength, & Improving Mobility, to the more
          Cosmetic Aspects of Increasing Muscle Mass or Losing Weight, I will
          Design & Implement an Effective Program (continuously reinforcing
          proper set-up and execution of each exercise with explanation of
          purpose for each exercise) to help you reach your desired results.
        </p>
      </TextContainer>
    </ServiceContainer>
  );
};

export default Services;
