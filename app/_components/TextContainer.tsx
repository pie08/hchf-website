import { styled } from "@linaria/react";

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  font-size: 1.8rem;

  &:has(h2) p {
    font-size: 2rem;
  }
`;

export default TextContainer;
