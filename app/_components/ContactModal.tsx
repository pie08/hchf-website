"use client";
// required to render compound components

import { styled } from "@linaria/react";
import { FC, useEffect } from "react";
import Logo from "./Logo";
import Button from "./Button";
import TextInput from "./TextInput";

import Modal, { useModal } from "@/app/_components/Modal";
import { useFormState, useFormStatus } from "react-dom";
import toast from "react-hot-toast";
import { sendMessage } from "../_lib/actions";
import { ContactFormResponse } from "@/types/contactFormResponse";

const ModalContainer = styled.div`
  width: clamp(30rem, 90vw, 50rem);

  padding: 4.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;

  & h3 {
    color: var(--color-primary-800);
  }

  @media screen and (max-width: 38em) {
    padding: 2.4rem;
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

    @media screen and (max-width: 38em) {
      &:nth-child(1) {
        grid-column: 1 / -1;
      }

      &:nth-child(2) {
        grid-column: 1 / -1;
      }
    }
  }

  & button {
    &:nth-of-type(1) {
      grid-column: 1 / 6;
    }

    &:nth-of-type(2) {
      grid-column: 6 / -1;
    }

    @media screen and (max-width: 38em) {
      &:nth-of-type(1) {
        grid-column: 1 / -1;
      }

      &:nth-of-type(2) {
        grid-column: 1 / -1;
      }
    }

    @media screen and (max-width: 38em) {
      grid-template-columns: 1fr;
    }
  }
`;

const initialState: ContactFormResponse = {
  message: "",
  success: true,
};

interface ModalProps {}

const ContactModal: FC<ModalProps> = ({}) => {
  const [message, formAction] = useFormState(sendMessage, initialState);
  const { close } = useModal();

  // show toast on message reply
  useEffect(() => {
    if (message.message.length > 0) {
      if (message.success) {
        toast.success(message.message);
        close();
        return;
      }
      toast.error(message.message);
    }
  }, [message, close]);

  // load loader
  useEffect(() => {
    async function getLoader() {
      const { ring2 } = await import("ldrs");
      ring2.register();
    }
    getLoader();
  }, []);

  return (
    <Modal.Window windowId="contact">
      <ModalContainer>
        <StyledLogo />
        <h3>Send me a message</h3>

        <Form action={formAction}>
          <TextInput fieldName="First Name" fieldId="firstName" required />
          <TextInput fieldName="Last Name" fieldId="lastName" required />
          <TextInput
            fieldName="Email"
            fieldId="email"
            inputType="input"
            type="email"
            required
          />
          <TextInput
            fieldName="Message"
            fieldId="message"
            inputType="textarea"
            required
          />

          <Buttons />
        </Form>
      </ModalContainer>
    </Modal.Window>
  );
};

const RingContainer = styled.div`
  position: relative;

  /* to maintain correct height of button */
  & p {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }

  & l-ring-2 {
    position: absolute;
    left: 50%;
    top: 50%;
    translate: -50% -50%;
  }
`;

const Buttons: FC = () => {
  const { pending } = useFormStatus();

  return (
    <>
      <Button type="submit">
        {!pending ? (
          "Send your message!"
        ) : (
          <RingContainer>
            <p>&nbsp;</p>
            <l-ring-2
              size={24}
              stroke={2}
              color="var(--color-gray-200)"
            ></l-ring-2>
          </RingContainer>
        )}
      </Button>
      <Button type="reset" variation="gray">
        {!pending ? (
          "Clear"
        ) : (
          <RingContainer>
            <p>&nbsp;</p>
            <l-ring-2
              size={24}
              stroke={2}
              color="var(--color-gray-400)"
            ></l-ring-2>
          </RingContainer>
        )}
      </Button>
    </>
  );
};

export default ContactModal;
