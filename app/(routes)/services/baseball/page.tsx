import { FC } from "react";
import ServicePageHeader from "../ServicePageHeader";
import Service from "@/app/_components/Service";
import getRelativeDirFilePaths from "@/app/_lib/getRelativeDirFilePaths";
import { Section } from "@/app/_components/Section";

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  return (
    <>
      <ServicePageHeader title="Baseball and Softball Training" />
      <Section>
        <Service
          srcArr={await getRelativeDirFilePaths(
            "/public/assets/images/client-images/baseball"
          )}
          heading="Baseball and Softball Training"
          text="Improving Overall Strength & Stability for a High School Athlete
              will result in Significant Improvements In Performance and should
              not be overlooked or undervalued. I Design & Implement Training
              Programs that produce a More Explosive/Dynamic Ballplayer."
        />
      </Section>
    </>
  );
};

export default page;
