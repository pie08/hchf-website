"use client";

import { GridContainer } from "@/app/_components/GridContainer";
import { Section } from "@/app/_components/Section";
import { SectionHeading } from "@/app/_components/SectionHeading";
import Testimonial from "@/app/_components/Testimonial";
import { styled } from "@linaria/react";
import { FC, useEffect, useRef, useState } from "react";
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
  // state for setting autoSlide on TestimonialSlider
  const [autoSlide, setAutoSlide] = useState(false);
  const section = useRef<HTMLElement>(null);

  // set autoSlide to true if it is visible in the viewport
  function handleObservation(entries: IntersectionObserverEntry[]) {
    const { isIntersecting } = entries[0];

    if (isIntersecting) {
      setAutoSlide(true);
    }
  }

  // registering intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(handleObservation);

    if (!section.current) return;
    observer.observe(section.current);

    return () => observer.disconnect();
  }, []);

  return (
    <TestimonialsSection ref={section}>
      <Background>
        <Image src={bg} alt="Background of a beach" fill />
      </Background>

      <SectionHeading>
        <h4>Testimonials</h4>
        <h2>I help my clients feel, move, and look better</h2>
      </SectionHeading>

      <GridContainer>
        <TestimonialSlider autoSlide={autoSlide}>
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
        </TestimonialSlider>
      </GridContainer>

      <ButtonLink href="/testimonials">See all testimonials</ButtonLink>
    </TestimonialsSection>
  );
};

export default Testimonials;
