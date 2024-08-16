import { FC } from "react";
import Navigation from "../../_components/Navigation";
import Hero from "./Hero";
import Services from "./Services";
import ClientProfiles from "./ClientProfiles";
import Testimonials from "./Testimonials";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <Hero />
      <Services />
      <ClientProfiles />
      <Testimonials />
    </>
  );
};

export default page;
