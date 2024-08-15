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
  }

  &[data-size="small"] {
    font-size: 1.6rem;
    padding: 0.8rem;
  }

  &[data-variation="cta"] {
    background-color: var(--color-primary-600);
    color: var(--color-gray-50);

    &:hover {
      background-color: var(--color-primary-700);
    }
  }

  &[data-variation="gray"] {
    background-color: var(--color-gray-100);

    &:hover {
      background-color: var(--color-gray-200);
    }
  }

  &[data-variation="link"] {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: var(--color-primary-600);
    border-bottom: 2px solid var(--color-primary-600);
    padding: 0.4rem 0;

    &:hover {
      border-bottom: 2px solid transparent;
      gap: 1.2rem;
    }
  }
`;

interface ButtonProps {
  children: React.ReactNode;
  size?: "large" | "small";
  variation?: "cta" | "gray";
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
