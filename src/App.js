import "./App.css";
import OffcanvasMenu from "./components/OffcanvasMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingJumbotron from "./components/LandingJumbotron";
function App() {
  return (
    <div className="App">
      <OffcanvasMenu />
      <LandingJumbotron />
    </div>
  );
}

export default App;
