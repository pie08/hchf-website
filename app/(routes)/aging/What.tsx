import { Section } from "@/app/_components/Section";
import TextContainer from "@/app/_components/TextContainer";
import { styled } from "@linaria/react";
import Image from "next/image";
import { FC } from "react";
import img from "@/public/assets/images/profiles/preview/keith.webp";
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

interface WhatProps {}

const What: FC<WhatProps> = ({}) => {
  return (
    <Section>
      <GridContainer>
        <TextContainer>
          <h2>What is aging?</h2>
          <p>
            In laymans terms, aging refers to the gradual physiological changes
            that occur in the body leading to old age and the decline of our
            body’s ability to perform and adapt to various stresses.
          </p>
        </TextContainer>

        <ImageWrapper>
          <Image src={img} alt="Keith" />
        </ImageWrapper>
      </GridContainer>
    </Section>
  );
};

export default What;