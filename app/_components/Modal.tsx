"use client";

import { styled } from "@linaria/react";
import { FC } from "react";
import Logo from "./Logo";
import Button from "./Button";
import TextInput from "./TextInput";
import Icon from "./Icon";
import { PiX } from "react-icons/pi";
import { css } from "@linaria/core";
import { useModalContext } from "../_context/ModalContext";

const StyledModal = styled.div`
  width: clamp(30rem, 100vw, 50rem);
  position: fixed;
  top: 50%;
  left: 100%;
  translate: 0 -50%;
  z-index: 9999;
  background-color: var(--color-gray-white);
  transition: all 0.2s;

  padding: 4.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;

  & h3 {
    color: var(--color-primary-800);
  }

  &[data-open="open"] {
    left: 50%;
    translate: -50% -50%;
  }
`;

const LogoWrapper = styled.div`
  position: relative;
  width: 20rem;
  aspect-ratio: 1 / 1;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1.2rem;
  width: 100%;

  & div {
    grid-column: 1 / -1;

    &:nth-child(1) {
      grid-column: 1 / 5;
    }

    &:nth-child(2) {
      grid-column: 5 / -1;
    }
  }

  & button {
    grid-column: 1 / -1;
  }
`;

const ExitButtonPosition = css`
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  transition: all 0.2s;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;

  visibility: hidden;
  pointer-events: none;

  &[data-open="open"] {
    background-color: rgba(0, 0, 0, 75%);
    pointer-events: all;
    visibility: visible;
  }
`;

interface ModalProps {}

const Modal: FC<ModalProps> = ({}) => {
  const { modalOpen, setModalOpen } = useModalContext();
  console.log(modalOpen);

  return (
    <>
      <Overlay
        onClick={() => setModalOpen(false)}
        data-open={modalOpen && "open"}
      />

      <StyledModal data-open={modalOpen && "open"}>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <h3>Send me a message</h3>

        <Form action="">
          <TextInput fieldName="First Name" required />
          <TextInput fieldName="Last Name" required />
          <TextInput
            fieldName="Email"
            inputType="input"
            type="email"
            required
          />
          <TextInput fieldName="Message" inputType="textarea" required />
          <Button>Send you message!</Button>
        </Form>

        <Button
          size="small"
          variation="gray"
          className={ExitButtonPosition}
          onClick={() => setModalOpen(false)}
        >
          <Icon size={2.4}>
            <PiX />
          </Icon>
        </Button>
      </StyledModal>
    </>
  );
};

export default Modal;
