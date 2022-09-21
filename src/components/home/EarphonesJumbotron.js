import { Container, Row, Col, Image } from "react-bootstrap";
import ProductButton from "../../ui/ProductButton";
import classes from "./EarphonesJumbotron.module.css";
import earphones from "../../assets/image-earphones-yx1.jpg";

function EarphonesJumbotron() {
  return (
    <Container className={classes.EarphonesJumbotron}>
      <Row>
        <Col xs={12} md={6} className={classes.col}>
          <div className={classes.EarphonesImg}>
            <Image src={earphones} fluid />
          </div>
        </Col>
        <Col xs={12} md={6} className={classes.col}>
          <div className={classes.EarphonesText}>
            <h1>YX1 EARPHONES</h1>
            <ProductButton className={classes.btn}>SEE PRODUCT</ProductButton>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default EarphonesJumbotron;
