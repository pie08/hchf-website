import { FC } from "react";
import PageHeader from "../../../_components/PageHeader";
import Service from "@/app/_components/Service";
import getRelativeDirFilePaths from "@/app/_lib/getRelativeDirFilePaths";
import { Section } from "@/app/_components/Section";

export const metadata = {
  title: "Post-Surgical Training",
};

interface pageProps {}

const page: FC<pageProps> = async ({}) => {
  return (
    <>
      <PageHeader title="Post-Surgical Training" />
      <Section>
        <Service
          srcArr={await getRelativeDirFilePaths(
            "/public/assets/images/client-images/post-surgical"
          )}
          heading="Post-Surgical Training"
          headingLarge
          text="After Completing Post-Surgical Physical Therapy, many people
              continue to experience; Discomfort, Limited Range of Motion, Lack
              of Strength, and Lack of Stability in the surgically repaired
              area. They are also uncertain how to effectively continue the
              recovery process. I will Effectively Guide You by addressing the
              limitations in the surgically repaired area while implementing
              timely progressions to Strengthen, Stabilize, and Mobilize not
              only the repaired area but your entire body as well."
        />
      </Section>
    </>
  );
};

export default page;
