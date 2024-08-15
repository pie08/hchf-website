import { styled } from "@linaria/react";
import { Container } from "./Container";

export const GridContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: 3.2rem;
`;
