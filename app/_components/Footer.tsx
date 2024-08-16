import { FC } from "react";
import { Section } from "./Section";
import { styled } from "@linaria/react";
import { Container } from "./Container";
import { GridContainer } from "./GridContainer";
import Logo from "./Logo";

const FooterContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3.2rem;
`;

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <Section>
      <FooterContainer></FooterContainer>
    </Section>
  );
};

export default Footer;
