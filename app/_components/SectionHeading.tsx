import { styled } from "@linaria/react";
import { FC } from "react";

const StyledSectionHeading = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.2rem;
`;

interface SectionHeadingProps {
  subheading: string;
  heading: string;
}

const SectionHeading: FC<SectionHeadingProps> = ({ subheading, heading }) => {
  return (
    <StyledSectionHeading>
      <h4>{subheading}</h4>
      <h2>{heading}</h2>
    </StyledSectionHeading>
  );
};

export default SectionHeading;
