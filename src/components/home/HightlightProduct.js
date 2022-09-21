import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import speaker from "../../assets/image-speaker.png";
import headphones from "../../assets/image-headphones.png";
import earphones from "../../assets/image-earphones.png";
import ProductCard from "../../ui/ProductCard";
import classes from "./HighlightProduct.module.css";

function HighlightProduct() {
  return (
    <Container className={classes.HighlightProducts}>
      <Row>
        <Col xs={12} md={4}>
          <ProductCard img={headphones} title="HEADPHONES" />
        </Col>
        <Col xs={12} md={4}>
          <ProductCard img={speaker} title="SPEAKERS" />
        </Col>
        <Col xs={12} md={4}>
          <ProductCard img={earphones} title="EARPHONES" />
        </Col>
      </Row>
    </Container>
  );
}

export default HighlightProduct;
