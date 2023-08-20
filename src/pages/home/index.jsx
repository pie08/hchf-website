import Hero from "./Hero";
import Services from "./Services";
import ClientProfiles from "./ClientProfiles";
import Testimonials from "./Testimonials";
import Cta from "./Cta";
import { usePageTitle } from "../../hooks/usePageTitle";
import { useResetScroll } from "../../hooks/useResetScroll";
// import Aging from "../components/Aging";

function Homepage({ onOpenModal }) {
  useResetScroll();
  usePageTitle("Half Century Health-Fitness");

  return (
    <>
      <Hero onOpenModal={onOpenModal} />
      <Services />
      <ClientProfiles />
      <Testimonials />
      {/* <Aging /> */}
      <Cta onOpenModal={onOpenModal} />
    </>
  );
}

export default Homepage;
