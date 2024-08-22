import PageHeader from "@/app/_components/PageHeader";
import { Section } from "@/app/_components/Section";
import { FC } from "react";
import testimonialData from "@/app/_data/testimonials.json";
import Testimonial from "@/app/_components/Testimonial";
import { styled } from "@linaria/react";
import { Container } from "@/app/_components/Container";

export const metadata = {
  title: "Testimonials",
};

const TestimonialsContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9.6rem;
`;

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <PageHeader title="Testimonials" />
      <Section>
        <TestimonialsContainer>
          {testimonialData.map(({ text, author }, i) => (
            <Testimonial
              key={i}
              id={author}
              text={text}
              author={author}
              number={`0${i + 1}`}
            />
          ))}
        </TestimonialsContainer>
      </Section>
    </>
  );
};

export default page;
