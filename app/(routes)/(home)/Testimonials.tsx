"use client";

import { Container } from "@/app/_components/Container";
import { GridContainer } from "@/app/_components/GridContainer";
import { Section } from "@/app/_components/Section";
import { SectionHeading } from "@/app/_components/SectionHeading";
import Testimonial from "@/app/_components/Testimonial";
import { styled } from "@linaria/react";
import { FC } from "react";
import TestimonialSlider from "./TestimonialSlider";
import ButtonLink from "@/app/_components/ButtonLink";
import Image from "next/image";
import bg from "@/public/assets/images/beach-bg.webp";
import testimonialData from "../../_data/testimonials.json";

const TestimonialsSection = styled(Section)`
  position: relative;
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

interface TestimonialsProps {}

const Testimonials: FC<TestimonialsProps> = ({}) => {
  return (
    <TestimonialsSection>
      <Background>
        <Image src={bg} alt="Background of a beach" fill />
      </Background>

      <SectionHeading>
        <h4>Testimonials</h4>
        <h2>I help my clients feel, move, and look better</h2>
      </SectionHeading>

      <GridContainer>
        <TestimonialSlider>
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
        </TestimonialSlider>
      </GridContainer>

      <ButtonLink href="/testimonials">See all testimonials</ButtonLink>
    </TestimonialsSection>
  );
};

export default Testimonials;
