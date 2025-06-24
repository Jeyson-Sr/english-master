import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutMain from "./Layouts/LayoutMain";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import VerbosPage from "./pages/VerbosPage";
import LecturaPage from "./pages/LecturaPage";
import VocabularioPage from "./pages/VocabularioPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/verbos" element={<VerbosPage />} />
          <Route path="/lectura" element={<LecturaPage />} />
          <Route path="/vocabulario-visual" element={<VocabularioPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
