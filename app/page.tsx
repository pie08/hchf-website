import { FC } from "react";
import Navigation from "./_components/Navigation";
import Hero from "./_components/Hero";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <Navigation />
      <Hero />
    </>
  );
};

export default page;
