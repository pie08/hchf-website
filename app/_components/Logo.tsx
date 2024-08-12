import { styled } from "@linaria/react";
import { FC } from "react";
import Image from "next/image";
import logo from "../../public/assets/images/logos/hchf-logo-black.png";

const StyledLogo = styled(Image)`
  object-fit: contain;
  object-position: center;
`;

interface LogoProps {
  wrap?: boolean;
}

const Logo: FC<LogoProps> = ({ wrap = false }) => {
  return (
    <StyledLogo
      src={logo.src}
      alt="Half century health and fitness logo"
      fill
    />
  );
};
// const Logo: FC<LogoProps> = ({ wrap = false }) => {
//   return wrap ? (
//     <LogoWrapper>
//       <StyledLogo
//         src={logo.src}
//         alt="Half century health and fitness logo"
//         fill
//       />
//     </LogoWrapper>
//   ) : (
//     <StyledLogo
//       src={logo.src}
//       alt="Half century health and fitness logo"
//       fill
//     />
//   );
// };

export const LogoWrapper = styled.div`
  position: relative;
  width: 9.6rem;
  aspect-ratio: 1/1;
`;

export default Logo;
