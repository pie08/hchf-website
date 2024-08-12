import { styled } from "@linaria/react";

export default styled.div<{ size: number }>`
  display: flex;

  & svg {
    width: ${(props) => props.size}rem;
    height: ${(props) => props.size}rem;
  }
`;
