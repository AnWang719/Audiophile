import { Container } from "react-bootstrap";
import ProductButton from "../../ui/ProductButton";
import classes from "./Zx7SpeakerJumbotron.module.css";
import { useNavigate } from "react-router-dom";
import data from "../../data";

function Zx7SpeakerJumbotron() {
  const navigate = useNavigate();

  function showProductDetail() {
    const selectedProduct = data.filter((pro) => pro.name === "ZX7 Speaker");
    navigate("/productDetail", { state: selectedProduct });
  }

  return (
    <Container className={classes.Jumbotron}>
      <div className={classes.JumbotronText}>
        <h1>ZX7 SPEAKER</h1>
        <ProductButton className={classes.btn} onClick={showProductDetail}>
          SEE PRODUCT
        </ProductButton>
      </div>
    </Container>
  );
}

export default Zx7SpeakerJumbotron;
