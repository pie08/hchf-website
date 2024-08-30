import { styled } from "@linaria/react";
import { FC } from "react";
import Image from "next/image";
import logo from "../../public/assets/images/logos/HCHF-logo-black.png";
import { css } from "@linaria/core";

interface LogoProps {
  className?: string;
  style?: {};
}

const Logo: FC<LogoProps> = ({ ...props }) => {
  return (
    <Image src={logo} alt="Half century health and fitness logo" {...props} />
  );
};

export default Logo;
