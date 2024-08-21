import PageHeader from "@/app/_components/PageHeader";
import { Section } from "@/app/_components/Section";
import { FC } from "react";
import What from "./What";
import Effects from "./Effects";
import CombatEffects from "./CombatEffects";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <PageHeader title="Aging & Hormones" />

      <What />
      <Effects />
      <CombatEffects />
    </>
  );
};

export default page;
