import { styled } from "@linaria/react";
import { FC } from "react";
import { GridContainer } from "./GridContainer";
import ImageSlider from "./ImageSlider";
import getRelativeDirFilePaths from "../_lib/getRelativeDirFilePaths";
import Logo from "./Logo";

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

interface ServiceProps {
  heading: string;
  text: string;
  srcArr?: string[];
  right?: boolean;
}

const Service: FC<ServiceProps> = ({
  srcArr,
  heading,
  text,
  right = false,
}) => {
  return (
    <ServiceContainer>
      {!right && srcArr && <ImageSlider srcArr={srcArr} />}
      {!right && !srcArr && (
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
      )}

      <TextContainer>
        <h3>{heading}</h3>
        <p>{text}</p>
      </TextContainer>

      {right && srcArr && <ImageSlider srcArr={srcArr} />}
      {right && !srcArr && (
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
      )}
    </ServiceContainer>
  );
};

export default Service;
