import { FC } from "react";
import Navigation from "../../_components/Navigation";
import Hero from "./Hero";
import Services from "./Services";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <Hero />
      <Services />
    </>
  );
};

export default page;
