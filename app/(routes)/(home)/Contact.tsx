import Button from "@/app/_components/Button";
import { Container } from "@/app/_components/Container";
import { Section } from "@/app/_components/Section";
import TextInput from "@/app/_components/TextInput";
import { css } from "@linaria/core";
import { styled } from "@linaria/react";
import { FC } from "react";

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

interface ContactProps {}

const Contact: FC<ContactProps> = ({}) => {
  return (
    <Section>
      <ContactContainer>
        <h2>Contact me</h2>

        <Form action="">
          <TextInput fieldName="First Name" className={bgWhite} required />
          <TextInput fieldName="Last Name" className={bgWhite} required />
          <TextInput
            fieldName="Email"
            type="email"
            className={bgWhite}
            required
          />
          <FullColWrapper>
            <TextInput
              fieldName="Message"
              inputType="textarea"
              className={bgWhite}
              required
            />
          </FullColWrapper>

          <Button type="submit">Send your message!</Button>
          <GrayButton type="reset" variation="gray">
            Clear
          </GrayButton>
        </Form>
      </ContactContainer>
    </Section>
  );
};

export default Contact;
