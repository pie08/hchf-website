import { styled } from "@linaria/react";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 9.6rem;
  padding: 9.6rem 3.2rem;
  max-width: 100vw;

  &[data-gray] {
    background-color: var(--color-gray-50);
  }

  &[data-dark-gray] {
    background-color: var(--color-gray-100);
  }

  @media screen and (max-width: 52em) {
    padding: 9.6rem 2.4rem;
  }

  @media screen and (max-width: 38em) {
    gap: 6.4rem;
    padding: 6.4rem 2.4rem;
  }
`;
