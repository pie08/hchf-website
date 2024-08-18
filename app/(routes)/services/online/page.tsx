import { FC } from "react";
import PageHeader from "../../../_components/PageHeader";
import Service from "@/app/_components/Service";
import { Section } from "@/app/_components/Section";

export const metadata = {
  title: "Online Consulting",
};

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  return (
    <>
      <PageHeader title="Baseball and Softball Training" />
      <Section>
        <Service
          heading="Online Consulting"
          text="Developing Individual Relationships via technology with the same
              degree of care and dedication to the improvement of your health as
              the clients I meet with personally. Taking the multiple components
              of training (Strength, Mobility, Preventative Maintenance,
              Flexibility, Conditioning, Stability), speaking to you
              individually, and helping to determine and design an exercise
              program you understand (the purpose behind what you are doing) and
              can implement to address your needs."
        />
      </Section>
    </>
  );
};

export default page;
