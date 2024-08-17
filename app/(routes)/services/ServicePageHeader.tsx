import { Container } from "@/app/_components/Container";
import { styled } from "@linaria/react";
import Image from "next/image";
import { FC } from "react";
import bg from "@/public/assets/images/beach-bg.webp";

const PageHeader = styled.div`
  position: relative;
  padding: 12.8rem 3.2rem;
  padding-top: calc(12.8rem + 9.6rem);

  & h1 {
    text-align: center;
  }
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  & img {
    object-fit: cover;
  }

  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      rgba(255, 255, 255, 85%),
      rgba(255, 255, 255, 85%)
    );
  }
`;

interface ServicePageHeaderProps {
  title: string;
}

const ServicePageHeader: FC<ServicePageHeaderProps> = ({ title }) => {
  return (
    <PageHeader>
      <Background>
        <Image src={bg} alt="Background of a beach" fill />
      </Background>

      <Container>
        <h1>{title}</h1>
      </Container>
    </PageHeader>
  );
};

export default ServicePageHeader;
