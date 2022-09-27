import Container from "react-bootstrap/Container";

import Image from "react-bootstrap/Image";
import circles from "../../assets/pattern-circles.svg";
import speaker from "../../assets/image-speaker-zx9.png";
import classes from "./SpeakerJumbotron.module.css";
import ProductButton from "../../ui/ProductButton";
import { useNavigate } from "react-router-dom";
import data from "../../data";

function SpeakerJumbotron() {
  const navigate = useNavigate();

  function showProductDetail() {
    const selectedProduct = data.filter((pro) => pro.name === "ZX9 Speaker");
    navigate("/productDetail", { state: selectedProduct });
  }

  return (
    <Container className={classes.SpeakerJumbotronContainer}>
      <Image src={circles} className={classes.circleImg} />
      <div className={classes.SpeakerJumbotronOverlay}>
        <div className={classes.SpeakerJumbotronImgContainer}>
          <Image src={speaker} className={classes.SpeakerJumbotronImg} />
        </div>

        <div className={classes.SpeakerJumbotronTextContainer}>
          <h1>ZX9 SPEAKER</h1>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <ProductButton
            className={classes.SpeakerButton}
            onClick={showProductDetail}
          >
            See Product
          </ProductButton>
        </div>
      </div>
    </Container>
  );
}

export default SpeakerJumbotron;
