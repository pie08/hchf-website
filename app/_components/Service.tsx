import { styled } from "@linaria/react";
import { FC } from "react";
import ImageSlider from "./ImageSlider";
import getRelativeDirFilePaths from "../_lib/getRelativeDirFilePaths";
import Logo from "./Logo";
import TextContainer from "./TextContainer";
import { css } from "@linaria/core";
import { Container } from "./Container";

const GridContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.2rem;
  align-items: center;

  @media screen and (max-width: 38em) {
    grid-template-columns: 1fr;
    gap: 2.4rem;
  }
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

  @media screen and (max-width: 38em) {
    grid-row: 1 / 2;
    height: auto;
    padding: 4.8rem 0;
  }
`;

const imgSliderClass = css`
  @media screen and (max-width: 38em) {
    grid-row: 1 / 2;
  }
`;

interface ServiceProps {
  heading: string;
  text: string;
  srcArr?: string[];
  right?: boolean;
  headingLarge?: boolean;
}

const Service: FC<ServiceProps> = ({
  srcArr,
  heading,
  text,
  right = false,
  headingLarge = false,
}) => {
  return (
    <GridContainer>
      {!right && srcArr && (
        <ImageSlider srcArr={srcArr} className={imgSliderClass} />
      )}
      {!right && !srcArr && (
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
      )}

      <TextContainer>
        {headingLarge ? <h2>{heading}</h2> : <h3>{heading}</h3>}
        <p>{text}</p>
      </TextContainer>

      {right && srcArr && (
        <ImageSlider srcArr={srcArr} className={imgSliderClass} />
      )}
      {right && !srcArr && (
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
      )}
    </GridContainer>
  );
};

export default Service;
