import "./App.css";
import OffcanvasMenu from "./components/OffcanvasMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingJumbotron from "./components/LandingJumbotron";
import Container from "react-bootstrap/Container";
import HighlightProduct from "./components/HightlightProduct";
import SpeakerJumbotron from "./components/SpeakerJumbotron";
function App() {
  return (
    <>
      <div className="App">
        <Container>
          <OffcanvasMenu />
          <LandingJumbotron />
        </Container>
      </div>
      <HighlightProduct />
      <SpeakerJumbotron />
    </>
  );
}

export default App;
