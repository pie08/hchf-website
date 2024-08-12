import { styled } from "@linaria/react";
import { FC } from "react";
import logo from "../../public/assets/images/logos/hchf-logo-black.png";
import Image from "next/image";

const StyledModal = styled.div``;

const LogoWrapper = styled.div``;

const StyledLogo = styled.img`
  object-fit: contain;
  object-position: center;
`;

interface ModalProps {}

const Modal: FC<ModalProps> = ({}) => {
  return (
    <StyledModal>
      <Image src={logo} width={100} alt=";gh" />
      <h3>Send me a message</h3>
    </StyledModal>
  );
};

export default Modal;
