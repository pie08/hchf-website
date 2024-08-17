import { styled } from "@linaria/react";
import Link from "next/link";
import { FC } from "react";
import { PiArrowRight } from "react-icons/pi";

const Button = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: var(--color-primary-600);
  transition: all 0.2s;

  &.center {
    align-self: center;
  }

  &:hover,
  &:active {
    & svg {
      translate: 0.4rem 0;
    }
  }

  & span {
    font-size: 1.8rem;
    font-weight: 600;
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    transition: all 0.2s;
  }
`;

interface ButtonLinkProps {
  children: React.ReactNode;
  href: string;
  center?: boolean;
  className?: string;
  style?: {};
  [x: string]: any;
}

const ButtonLink: FC<ButtonLinkProps> = ({
  children,
  href,
  center = true,
  ...props
}) => {
  return (
    <Button href={href} className={center ? "center" : ""} {...props}>
      <span>{children}</span>
      <PiArrowRight />
    </Button>
  );
};

export default ButtonLink;
