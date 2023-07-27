import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy, useState } from "react";
import Navigation from "./components/Navigation";
import FullPageLoader from "./pages/FullPageLoader";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import Testimonials from "./pages/Testimonials";

// import Homepage from "./pages/Homepage";
// import NotFound from "./pages/NotFound";

// import AdultTraining from "./pages/services/AdultTraining";
// import BaseballSoftball from "./pages/services/BaseballSoftball";
// import PostSurgical from "./pages/services/PostSurgical";
// import OnlineConsulting from "./pages/services/OnlineConsulting";

const Homepage = lazy(() => import("./pages/Homepage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AdultTraining = lazy(() => import("./pages/services/AdultTraining"));
const BaseballSoftball = lazy(() =>
  import("./pages/services/BaseballSoftball")
);
const PostSurgical = lazy(() => import("./pages/services/PostSurgical"));
const OnlineConsulting = lazy(() =>
  import("./pages/services/OnlineConsulting")
);

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
          <Route path="client-profiles" element={null} />
          <Route path="testimonials" element={<Testimonials />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}
