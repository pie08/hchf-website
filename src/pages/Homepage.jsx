import Hero from "../components/Hero";
import Services from "../components/Services";
import ClientProfiles from "../components/ClientProfiles";
import Testimonials from "../components/Testimonials";
import Cta from "../components/Cta";
import { usePageTitle } from "../hooks/usePageTitle";
import { useResetScroll } from "../hooks/useResetScroll";
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
