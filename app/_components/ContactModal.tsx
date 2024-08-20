"use client";
// required to render compound components

import { styled } from "@linaria/react";
import { FC, useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import Button from "./Button";
import TextInput from "./TextInput";

import Modal from "@/app/_components/Modal";

const ModalContainer = styled.div`
  width: clamp(30rem, 100vw, 50rem);

  padding: 4.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;

  & h3 {
    color: var(--color-primary-800);
  }
`;

const StyledLogo = styled(Logo)`
  display: block;
  max-width: 20rem;
  height: auto;
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
    &:nth-of-type(1) {
      grid-column: 1 / 6;
    }

    &:nth-of-type(2) {
      grid-column: 6 / -1;
    }
  }
`;

interface ModalProps {}

const ContactModal: FC<ModalProps> = ({}) => {
  // todo: add action
  return (
    <Modal.Window windowId="contact">
      <ModalContainer>
        <StyledLogo />
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
          <Button>Send your message!</Button>
          <Button type="reset" variation="gray">
            Clear
          </Button>
        </Form>
      </ModalContainer>
    </Modal.Window>
  );
};

export default ContactModal;
