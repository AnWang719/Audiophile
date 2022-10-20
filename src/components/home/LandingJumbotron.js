import classes from "./Jumbotron.module.css";
import ProductButton from "../../ui/ProductButton";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";

import data from "../../data";

function LandingJumbotron() {
  const navigate = useNavigate();

  function showProductDetail() {
    const selectedProduct = data.filter(
      (pro) => pro.name === "XX99 Mark II Headphones"
    );
    navigate("/productDetail", { state: selectedProduct });
  }

  return (
    <div className={classes.outer}>
      <Container>
        <div className={classes.emptyDiv}></div>
        <div className={classes.Jumbotron}>
          <div className={classes.text}>
            <span>NEW PRODUCT</span>
            <p className={classes.title}>XX99 MARK II HEADPHONES</p>
            <p className={classes.lead}>
              Experience netural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <ProductButton
              className={classes.button}
              onClick={showProductDetail}
            >
              See Product
            </ProductButton>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default LandingJumbotron;
