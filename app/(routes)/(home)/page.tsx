import { FC } from "react";
import Navigation from "../../_components/Navigation";
import Hero from "./Hero";
import Services from "./Services";
import ClientProfiles from "./ClientProfiles";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <Hero />
      <Services />
      <ClientProfiles />
      <Testimonials />
      <Contact />
    </>
  );
};

export default page;
