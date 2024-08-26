import { styled } from "@linaria/react";

export const ButtonIcon = styled.button`
  color: inherit;
  background-color: var(--color-gray-100);
  line-height: 0;
  padding: 0.8rem;
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-gray-200);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
  }

  @media screen and (max-width: 38em) {
    padding: 1.2rem;
  }
`;
