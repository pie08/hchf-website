"use client";

import { styled } from "@linaria/react";
import { FC } from "react";
import { Container } from "../../_components/Container";
import Button from "../../_components/Button";
import Modal from "@/app/_components/Modal";

const Section = styled.section`
  /* to grow child */
  height: 95vh;

  padding: 0 3.2rem;
  /* account for nav */
  padding-top: 9.6rem;
  position: relative;
`;

const HeroContainer = styled(Container)`
  height: 100%;
  display: grid;
  align-items: center;
  gap: 3.2rem;
  grid-template-columns: repeat(12, 1fr);
`;

const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.2rem;
  grid-column: 1 / span 7;

  & p {
    font-size: 2rem;

    & span {
      font-family: var(--font-playfair-display);
      font-style: italic;
      font-weight: 600;
    }
  }

  @media screen and (max-width: 52em) {
    grid-column: 1 / -1;
    align-items: center;
    text-align: center;
  }
`;

const BackgroundVideo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  & video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 100% 35%;
  }

  & div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 85%) 55%,
      rgba(0, 0, 0, 0%)
    );

    @media screen and (max-width: 52em) {
      background-image: linear-gradient(
        to right,
        rgba(255, 255, 255, 85%),
        rgba(255, 255, 255, 85%)
      );
    }
  }
`;

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <Section>
      <HeroContainer>
        <HeroTextContainer>
          <BackgroundVideo>
            <video loop muted autoPlay disablePictureInPicture>
              <source src="https://yegakkaqzwoysxhecspi.supabase.co/storage/v1/object/public/video/client-comp-1.mp4?t=2024-08-28T00%3A32%3A22.831Z" />
              <source src="/assets/video/client-comp-1.mp4" />
              Your browser does not support the video tag. Please view in a
              modern browser
            </video>
            <div></div>
          </BackgroundVideo>

          <h1>Personalized fitness for adults 50+ years old</h1>

          <p>
            Providing Adults 50+
            <br />
            <span>Comprehensive</span>, <span>Effective</span>, and{" "}
            <span>Safe</span>
            <br />
            Exercise Programs & Post-Surgical Training Programs
          </p>

          <Modal.Open opens="contact">
            <Button aria-label="Contact">Contact me</Button>
          </Modal.Open>
        </HeroTextContainer>
      </HeroContainer>
    </Section>
  );
};

export default Hero;
