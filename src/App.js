import "./App.css";
import OffcanvasMenu from "./components/OffcanvasMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingJumbotron from "./components/LandingJumbotron";
import Container from "react-bootstrap/Container";
import HighlightProduct from "./components/HightlightProduct";
import SpeakerJumbotron from "./components/SpeakerJumbotron";
import Zx7SpeakerJumbotron from "./components/Zx7SpeakerJumbotron";
import EarphonesJumbotron from "./components/EarphonesJumbotron";
import BestGear from "./components/BestGear";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container>
          <OffcanvasMenu />
          <LandingJumbotron />
        </Container>
      </div>
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
