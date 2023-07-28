import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecommendPage from "./components/pages";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<RecommendPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
