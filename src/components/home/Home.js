import EarphonesJumbotron from "./EarphonesJumbotron";
import HighlightProduct from "./HightlightProduct";
import LandingJumbotron from "./LandingJumbotron";
import SpeakerJumbotron from "./SpeakerJumbotron";
import Zx7SpeakerJumbotron from "./Zx7SpeakerJumbotron";

function Home() {
  return (
    <>
      <LandingJumbotron />
      <HighlightProduct />
      <SpeakerJumbotron />
      <Zx7SpeakerJumbotron />
      <EarphonesJumbotron />
    </>
  );
}

export default Home;
