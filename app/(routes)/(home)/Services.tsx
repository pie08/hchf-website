import { Container } from "@/app/_components/Container";
import { GridContainer } from "@/app/_components/GridContainer";
import { Section } from "@/app/_components/Section";
import { SectionHeading } from "@/app/_components/SectionHeading";
import { styled } from "@linaria/react";
import { FC } from "react";
import ImageSlider from "@/app/_components/ImageSlider";
import getDirFilePaths from "@/app/_lib/getRelativeDirFilePaths";
import getRelativeDirFilePaths from "@/app/_lib/getRelativeDirFilePaths";
import Logo from "@/app/_components/Logo";
import Service from "@/app/_components/Service";

const ServicesContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
`;

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

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 53rem;

  & img {
    display: block;
    max-width: 30rem;
    height: auto;
  }
`;

interface ServicesProps {}

const Services: FC<ServicesProps> = async ({}) => {
  return (
    <Section>
      <SectionHeading>
        <h4>Services</h4>
        <h2>Persinalized training programs</h2>
      </SectionHeading>

      <ServicesContainer>
        <Service
          srcArr={await getRelativeDirFilePaths(
            "/public/assets/images/client-images/adult-training"
          )}
          heading="Adult Training"
          text="Providing a Trustworthy, Knowledgeable, Structured Training
              Approach for Adults over 50. From the Functional Aspects of
              Improving Stability, Increasing Strength, & Improving Mobility, to
              the more Cosmetic Aspects of Increasing Muscle Mass or Losing
              Weight, I will Design & Implement an Effective Program
              (continuously reinforcing proper set-up and execution of each
              exercise with explanation of purpose for each exercise) to help
              you reach your desired results."
        />
        <Service
          right
          srcArr={await getRelativeDirFilePaths(
            "/public/assets/images/client-images/post-surgical"
          )}
          heading="Post-Surgical Training"
          text="After Completing Post-Surgical Physical Therapy, many people
              continue to experience; Discomfort, Limited Range of Motion, Lack
              of Strength, and Lack of Stability in the surgically repaired
              area. They are also uncertain how to effectively continue the
              recovery process. I will Effectively Guide You by addressing the
              limitations in the surgically repaired area while implementing
              timely progressions to Strengthen, Stabilize, and Mobilize not
              only the repaired area but your entire body as well."
        />
        <Service
          srcArr={await getRelativeDirFilePaths(
            "/public/assets/images/client-images/baseball-softball"
          )}
          heading="Baseball and Softball Training"
          text="Improving Overall Strength & Stability for a High School Athlete
              will result in Significant Improvements In Performance and should
              not be overlooked or undervalued. I Design & Implement Training
              Programs that produce a More Explosive/Dynamic Ballplayer."
        />
        <Service
          right
          heading="Online Consulting"
          text="Developing Individual Relationships via technology with the same
              degree of care and dedication to the improvement of your health as
              the clients I meet with personally. Taking the multiple components
              of training (Strength, Mobility, Preventative Maintenance,
              Flexibility, Conditioning, Stability), speaking to you
              individually, and helping to determine and design an exercise
              program you understand (the purpose behind what you are doing) and
              can implement to address your needs."
        />
      </ServicesContainer>
    </Section>
  );
};

export default Services;
