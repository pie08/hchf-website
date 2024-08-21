import { styled } from "@linaria/react";
import { Container } from "./Container";
import { FC } from "react";

const StyledGridContainer = styled(Container)`
  display: grid;
  column-gap: 3.2rem;
`;

interface Props {
  children: React.ReactNode;
  cols?: number;
  className?: string;
}

const GridContainer: FC<Props> = ({ children, cols = 12, className }) => {
  return (
    <StyledGridContainer
      style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
      className={className}
    >
      {children}
    </StyledGridContainer>
  );
};

export default GridContainer;
