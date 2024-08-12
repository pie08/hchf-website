import { styled } from "@linaria/react";
import { FC } from "react";
import Logo from "./Logo";

const StyledModal = styled.div``;

interface ModalProps {}

const Modal: FC<ModalProps> = ({}) => {
  return (
    <StyledModal>
      <Logo />
      <h3>Send me a message</h3>
    </StyledModal>
  );
};

export default Modal;
