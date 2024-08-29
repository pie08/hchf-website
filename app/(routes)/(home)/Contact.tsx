"use client";

import Button from "@/app/_components/Button";
import { Container } from "@/app/_components/Container";
import { Section } from "@/app/_components/Section";
import TextInput from "@/app/_components/TextInput";
import { sendMessage } from "@/app/_lib/actions";
import { ContactFormResponse } from "@/types/contactFormResponse";
import { css } from "@linaria/core";
import { styled } from "@linaria/react";
import { FC, useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import toast from "react-hot-toast";

const ContactContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  padding: 4.8rem;
  background-color: var(--color-gray-100);

  & h2 {
    color: var(--color-primary-800);
  }
  @media screen and (max-width: 38em) {
    padding: 2.4rem;
    gap: 3.2rem;
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3.2rem;

  @media screen and (max-width: 52em) {
    gap: 2.4rem;
  }

  @media screen and (max-width: 38em) {
    gap: 1.6rem;
    grid-template-columns: 1fr;
  }
`;

const bgWhite = css`
  background-color: var(--color-gray-white) !important;
`;

const FullColWrapper = styled.div`
  grid-column: 1 / -1;

  & textarea {
    height: 12.8rem;
  }
`;

const GrayButton = styled(Button)`
  background-color: var(--color-gray-white) !important;

  &:hover {
    background-color: var(--color-gray-50) !important;
  }
`;

const initialState: ContactFormResponse = {
  message: "",
  success: true,
};

interface ContactProps {}

const Contact: FC<ContactProps> = ({}) => {
  const [message, formAction] = useFormState(sendMessage, initialState);

  // show toast on message reply
  useEffect(() => {
    if (message.message.length > 0) {
      if (message.success) {
        toast.success(message.message);
        return;
      }
      toast.error(message.message);
    }
  }, [message]);

  // load loader
  useEffect(() => {
    async function getLoader() {
      const { ring2 } = await import("ldrs");
      ring2.register();
    }
    getLoader();
  }, []);

  return (
    <Section>
      <ContactContainer>
        <h2>Contact me</h2>

        <Form action={formAction}>
          <TextInput
            fieldName="First Name"
            fieldId="firstName"
            className={bgWhite}
            required
          />
          <TextInput
            fieldName="Last Name"
            fieldId="lastName"
            className={bgWhite}
            required
          />
          <TextInput
            fieldName="Email"
            fieldId="email"
            type="email"
            className={bgWhite}
            required
          />
          <FullColWrapper>
            <TextInput
              fieldName="Message"
              fieldId="message"
              inputType="textarea"
              className={bgWhite}
              required
            />
          </FullColWrapper>

          <Buttons />
        </Form>
      </ContactContainer>
    </Section>
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
      <GrayButton type="reset" variation="gray">
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
      </GrayButton>
    </>
  );
};

export default Contact;
