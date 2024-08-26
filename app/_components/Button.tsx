import { FC } from "react";
import { styled } from "@linaria/react";

export const StyledButton = styled.button`
  font-weight: 600;
  color: inherit;
  background-color: transparent;
  transition: all 0.2s;

  &[data-size="large"] {
    font-size: 1.8rem;
    padding: 1.2rem 2rem;

    @media screen and (max-width: 38em) {
      padding: 1.6rem 2.4rem;
    }
  }

  &[data-size="small"] {
    font-size: 1.6rem;
    padding: 0.8rem;

    @media screen and (max-width: 38em) {
      padding: 1.2rem;
    }
  }

  &[data-variation="cta"] {
    color: var(--color-gray-50);
    background-image: linear-gradient(
      to right,
      var(--color-primary-700) 50%,
      var(--color-primary-600) 50%
    );
    background-size: 200%;
    background-position-x: 100%;

    &:hover {
      background-position-x: 0;
    }
  }

  &[data-variation="gray"] {
    background-color: var(--color-gray-100);

    &:hover {
      background-color: var(--color-gray-200);
    }
  }
`;

interface ButtonProps {
  children: React.ReactNode;
  size?: "large" | "small";
  variation?: "cta" | "gray";
  className?: string;
  style?: {};
  [x: string]: any;
}

const Button: FC<ButtonProps> = ({
  children,
  size = "large",
  variation = "cta",
  ...props
}) => {
  return (
    <StyledButton data-size={size} data-variation={variation} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
