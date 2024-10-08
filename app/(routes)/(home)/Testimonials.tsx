import { Section } from "@/app/_components/Section";
import { SectionHeading } from "@/app/_components/SectionHeading";
import Testimonial from "@/app/_components/Testimonial";
import { styled } from "@linaria/react";
import { FC, useEffect, useRef, useState } from "react";
import Slider from "../../_components/Slider";
import ButtonLink from "@/app/_components/ButtonLink";
import Image from "next/image";
import bg from "@/public/assets/images/beach-bg.webp";
import testimonialData from "../../_data/testimonials.json";
import { useIsVisible } from "@/app/_hooks/useIsVisible";
import { Container } from "@/app/_components/Container";

const GridContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 3.2rem;
`;

const TestimonialsSection = styled(Section)`
  position: relative;
  overflow-x: hidden;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  & img {
    object-fit: cover;
  }

  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      rgba(255, 255, 255, 85%),
      rgba(255, 255, 255, 85%)
    );
  }
`;

const StyledSlider = styled.div`
  grid-column: 3 / 11;
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  overflow: visible;

  & .swiper {
    overflow: visible;
  }

  & .swiper-slide {
    cursor: pointer;
  }

  @media screen and (max-width: 52em) {
    grid-column: 2 / 12;
  }

  @media screen and (max-width: 38em) {
    grid-column: 1 / -1;
  }
`;

interface TestimonialsProps {}

const Testimonials: FC<TestimonialsProps> = ({}) => {
  return (
    <TestimonialsSection>
      <Background>
        <Image src={bg} alt="Background of a beach" fill sizes="100vw" />
      </Background>

      <SectionHeading>
        <h4>Testimonials</h4>
        <h2>I help my clients feel, move, and look better</h2>
      </SectionHeading>

      <GridContainer>
        {/* begin sliding only after being viewed */}
        <StyledSlider>
          <Slider autoSlide={true}>
            {/* render testimonialData as Testimonial components */}
            {testimonialData.map(({ text, author }, i) => (
              <Testimonial
                key={i}
                text={text}
                author={author}
                quote={false}
                textFill
                limitText
              />
            ))}
          </Slider>
        </StyledSlider>
      </GridContainer>

      <ButtonLink href="/testimonials">See all testimonials</ButtonLink>
    </TestimonialsSection>
  );
};

export default Testimonials;
