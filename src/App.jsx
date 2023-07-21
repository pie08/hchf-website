import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";

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
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="services">
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
        <Route path="testimonials" element={null} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
