import { Section } from "@/app/_components/Section";
import TextContainer from "@/app/_components/TextContainer";
import { css } from "@linaria/core";
import { styled } from "@linaria/react";
import Image from "next/image";
import { FC } from "react";
import img from "@/public/assets/images/profiles/preview/elaine.webp";
import { Container } from "@/app/_components/Container";

const GridContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.2rem;
  width: 100%;
  align-items: center;

  @media screen and (max-width: 38em) {
    grid-template-columns: 1fr;
  }
`;

const gridStyles = css``;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    display: block;
    max-width: 30rem;
    height: 100%;
  }

  @media screen and (max-width: 38em) {
    grid-row: 1 / 2;
  }
`;

interface TrainingProps {}

const Training: FC<TrainingProps> = ({}) => {
  return (
    <Section data-gray>
      <GridContainer>
        <TextContainer>
          <h2>Benefits of training with me</h2>
          <p>
            I will explain, simplify, organize, and structure all of this
            information into terms that are easy to understand and follow. I
            will also speak with you regularly to discuss any aspects of your
            program to ensure you become detail oriented and continuously
            progress.
          </p>
        </TextContainer>

        <ImageWrapper>
          <Image src={img} alt="Elaine" />
        </ImageWrapper>
      </GridContainer>
    </Section>
  );
};

export default Training;
