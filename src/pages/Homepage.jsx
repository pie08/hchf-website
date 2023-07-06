import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Services from "../components/Services";
import ClientProfiles from "../components/ClientProfiles";
import Tetsimonials from "../components/Testimonials";
import Cta from "../components/Cta";
import { useState } from "react";
import Modal from "../components/Modal";
import Footer from "../components/Footer";
// import Aging from "../components/Aging";

function Homepage() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleOpenModal() {
    setIsOpenModal(true);
  }

  function handleCloseModal() {
    setIsOpenModal(false);
  }

  return (
    <>
      <Modal isOpen={isOpenModal} onClose={handleCloseModal} />
      <Navigation onOpenModal={handleOpenModal} />
      <Hero onOpenModal={handleOpenModal} />
      <Services />
      <ClientProfiles />
      <Tetsimonials />
      {/* <Aging /> */}
      <Cta onOpenModal={handleOpenModal} />
      <Footer />
    </>
  );
}

export default Homepage;
