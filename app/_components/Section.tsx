import { styled } from "@linaria/react";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 9.6rem;
  padding: 9.6rem 3.2rem;

  &[data-gray] {
    background-color: var(--color-gray-50);
  }
`;
