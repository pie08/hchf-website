import { styled } from "@linaria/react";
import { FC } from "react";
import Image from "next/image";
import logo from "../../public/assets/images/logos/hchf-logo-black.png";
import { css } from "@linaria/core";

const StyledLogo = css`
  object-fit: contain;
  object-position: center;
`;

interface LogoProps {
  wrap?: boolean;
}

const Logo: FC<LogoProps> = ({ wrap = false }) => {
  return wrap ? (
    <LogoWrapper>
      <Image
        className={StyledLogo}
        src={logo}
        alt="Half century health and fitness logo"
        fill
      />
    </LogoWrapper>
  ) : (
    <Image
      className={StyledLogo}
      src={logo}
      alt="Half century health and fitness logo"
      fill
    />
  );
};

export const LogoWrapper = styled.div`
  position: relative;
  width: 9.6rem;
  aspect-ratio: 1/1;
`;

export default Logo;
