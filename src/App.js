import "./App.css";
import OffcanvasMenu from "./components/OffcanvasMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingJumbotron from "./components/LandingJumbotron";
import HighlightProduct from "./components/HightlightProduct";
import SpeakerJumbotron from "./components/SpeakerJumbotron";
import Zx7SpeakerJumbotron from "./components/Zx7SpeakerJumbotron";
import EarphonesJumbotron from "./components/EarphonesJumbotron";
import BestGear from "./components/BestGear";
import Footer from "./components/Footer";

import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <OffcanvasMenu />
      <Routes>
        {/* <Route exact path="/">
          <Navigate to="/home" />
        </Route> */}
        <Route path="/home" element={<LandingJumbotron />} />

        <Route path="/headphones"></Route>
        <Route path="/speakers"></Route>
        <Route path="/earphones"></Route>
      </Routes>
      <HighlightProduct />
      <SpeakerJumbotron />
      <Zx7SpeakerJumbotron />
      <EarphonesJumbotron />
      <BestGear />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
