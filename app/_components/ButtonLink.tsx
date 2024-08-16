import { styled } from "@linaria/react";
import Link from "next/link";
import { FC } from "react";
import { PiArrowRight } from "react-icons/pi";

const Button = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  border-bottom: 2px solid var(--color-primary-600);
  color: var(--color-primary-600);
  transition: all 0.2s;

  &.center {
    align-self: center;
  }

  &:hover {
    border-bottom: 2px solid transparent;
    gap: 1.2rem;
  }

  & span {
    font-size: 1.8rem;
    font-weight: 600;
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

interface ButtonLinkProps {
  children: React.ReactNode;
  href: string;
  center?: boolean;
}

const ButtonLink: FC<ButtonLinkProps> = ({ children, href, center = true }) => {
  return (
    <Button href={href} className={center ? "center" : ""}>
      <span>{children}</span>
      <PiArrowRight />
    </Button>
  );
};

export default ButtonLink;
