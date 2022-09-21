import { Container } from "react-bootstrap";
import ProductButton from "../../ui/ProductButton";
import classes from "./Zx7SpeakerJumbotron.module.css";

function Zx7SpeakerJumbotron() {
  return (
    <Container className={classes.Jumbotron}>
      <div className={classes.JumbotronText}>
        <h1>ZX7 SPEAKER</h1>
        <ProductButton className={classes.btn}>SEE PRODUCT</ProductButton>
      </div>
    </Container>
  );
}

export default Zx7SpeakerJumbotron;
