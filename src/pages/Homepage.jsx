import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Services from "../components/Services";
import ClientProfiles from "../components/ClientProfiles";
import Tetsimonials from "../components/Testimonials";

function Homepage() {
  return (
    <>
      <Navigation />
      <Hero />
      <Services />
      <ClientProfiles />
      <Tetsimonials />

      <div>aging</div>
      <div>CTA</div>
      <div>footer</div>
    </>
  );
}

export default Homepage;
