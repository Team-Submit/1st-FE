import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecommendPage from "./pages/index";
import Zzim from "./components/common/zzim";
import MainPage from "./components/pages/index";
import StartPage from "./components/pages/start";
import MainHeader from "./components/common/index";
import Login from "./components/pages/login";
import Signin from "./components/pages/signin";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/a" element={<MainPage />} />
        <Route path="/main" element={<RecommendPage />} />
        <Route path="/heart" element={<Zzim />} />
        <Route path="" element={<StartPage />} />
        <Route path="/s" element={<MainHeader />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
