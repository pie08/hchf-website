"use client";

import { styled } from "@linaria/react";
import { FC } from "react";
import { Container } from "../../_components/Container";
import Button from "../../_components/Button";
import Modal from "@/app/_components/Modal";

const Section = styled.section`
  /* to grow child */
  height: 95vh;

  padding: 9.6rem 3.2rem;
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
`;

const BackgroundVideo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 80%) 50%,
    rgba(0, 0, 0, 0)
  );

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
  }
`;

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  // todo: optimze video srcs
  return (
    <Section>
      <HeroContainer>
        <HeroTextContainer>
          <BackgroundVideo>
            <video loop muted autoPlay disablePictureInPicture>
              <source src="https://ipofgt4sminu9rdg.public.blob.vercel-storage.com/client-comp-1-1fIxMKEXOfbD0T0suxK7kWKjF84kZI.mp4" />
              <source src="/assets/video/client-comp-1.mp4" />
              Your browser does not support the video tag. Please view in a
              modern browser
            </video>
            <div></div>
          </BackgroundVideo>

          <h1>Personalized fitness for adults over 50+ years old</h1>

          <p>
            Providing Adults 50+
            <br />
            <span>Comprehensive</span>, <span>Effective</span>, and{" "}
            <span>Safe</span>
            <br />
            Exercise Programs & Post-Surgical Training Programs
          </p>

          <Modal.Open opens="contact">
            <Button>Contact me</Button>
          </Modal.Open>
        </HeroTextContainer>
      </HeroContainer>
    </Section>
  );
};

export default Hero;
