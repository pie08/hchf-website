import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy, useState } from "react";
import Navigation from "./components/section/Navigation";
import Modal from "./components/ui/Modal";

import Footer from "./components/section/Footer";
import FullPageLoader from "./components/ui/FullPageLoader";

// PAGES
const Homepage = lazy(() => import("./pages/home/index"));
const AdultTraining = lazy(() => import("./pages/services/adult/index"));
const BaseballSoftball = lazy(() => import("./pages/services/baseball/index"));
const PostSurgical = lazy(() => import("./pages/services/post-surgical/index"));
const OnlineConsulting = lazy(() =>
  import("./pages/services/consulting/index")
);
const ClientProfiles = lazy(() => import("./pages/client-profiles/index"));
const Testimonials = lazy(() => import("./pages/testimonials/index"));
const NotFound = lazy(() => import("./pages/error/NotFound"));

export default function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleOpenModal() {
    setIsOpenModal(true);
  }

  function handleCloseModal() {
    setIsOpenModal(false);
  }

  return (
    <BrowserRouter>
      <Suspense fallback={<FullPageLoader />}>
        {/* universal components */}
        <Navigation onOpenModal={handleOpenModal} />
        <Modal isOpen={isOpenModal} onClose={handleCloseModal} />

        <Routes>
          <Route
            path="/"
            element={<Homepage onOpenModal={handleOpenModal} />}
          />
          <Route path="services" element={null}>
            <Route path="adult-training" element={<AdultTraining />} />
            <Route path="post-surgical-training" element={<PostSurgical />} />
            <Route
              path="baseball-softball-training"
              element={<BaseballSoftball />}
            />
            <Route path="online-consulting" element={<OnlineConsulting />} />
          </Route>
          <Route path="aging-hormones" element={null} />
          <Route path="profiles" element={<ClientProfiles />} />
          <Route path="testimonials" element={<Testimonials />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}
