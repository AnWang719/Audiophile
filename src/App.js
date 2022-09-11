import "./App.css";
import OffcanvasMenu from "./components/OffcanvasMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingJumbotron from "./components/LandingJumbotron";
import Container from "react-bootstrap/Container";
function App() {
  return (
    <>
      <div className="App">
        <Container>
          <OffcanvasMenu />
          <LandingJumbotron />
        </Container>
      </div>
    </>
  );
}

export default App;
