import { FC } from "react";
import PageHeader from "../../../_components/PageHeader";
import Service from "@/app/_components/Service";
import getRelativeDirFilePaths from "@/app/_lib/getRelativeDirFilePaths";
import { Section } from "@/app/_components/Section";

export const metadata = {
  title: "Adult Training",
};

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  return (
    <>
      <PageHeader title="Adult Training" />
      <Section>
        <Service
          srcArr={await getRelativeDirFilePaths(
            "/public/assets/images/client-images/adult-training"
          )}
          heading="Adult Training"
          headingLarge
          text="Providing a Trustworthy, Knowledgeable, Structured Training
        Approach for Adults over 50. From the Functional Aspects of
        Improving Stability, Increasing Strength, & Improving Mobility, to
        the more Cosmetic Aspects of Increasing Muscle Mass or Losing
        Weight, I will Design & Implement an Effective Program
        (continuously reinforcing proper set-up and execution of each
        exercise with explanation of purpose for each exercise) to help
        you reach your desired results."
        />
      </Section>
    </>
  );
};

export default page;
