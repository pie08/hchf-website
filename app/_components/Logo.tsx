import { styled } from "@linaria/react";
import { FC } from "react";
import Image from "next/image";
import logo from "../../public/assets/images/logos/hchf-logo-black.png";

const Img = styled.div<{ width: number }>`
  position: relative;
  width: ${(props: any) => props.width}rem;
  aspect-ratio: 1/1;
`;

const StyledLogo = styled(Image)`
  object-fit: contain;
  object-position: center;
`;

interface LogoProps {
  width: number;
}

const Logo: FC<LogoProps> = ({ width }) => {
  return (
    <Img width={width}>
      <StyledLogo src={logo} alt="Half century health and fitness logo" fill />
    </Img>
  );
};

export default Logo;
