import { styled } from "@linaria/react";
import { FC } from "react";

const Img = styled.img`
  width: ${(props: any) => props.width}rem;
`;

interface LogoProps {
  width: number;
}

const Logo: FC<LogoProps> = ({ width }) => {
  return (
    <Img
      src="assets/images/logos/hchf-logo-black.svg"
      alt="Hald century health and fitness logo"
      width={width}
    />
  );
};

export default Logo;
