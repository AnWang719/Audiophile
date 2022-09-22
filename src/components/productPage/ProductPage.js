import { useParams } from "react-router-dom";
import classes from "./ProductPage.module.css";
import Container from "react-bootstrap/Container";
import ImgText from "../../ui/ImgText";

let data = require("../../data.json");

function ProductPage() {
  let { id } = useParams();

  if (!id) return;

  // console.log(data);

  const selectedProduct = data.filter((dat) => dat.category == id);

  // const selectedProduct = data.findIndex(id == data.category);
  console.log(selectedProduct);

  const products = selectedProduct.map((product) => (
    <ImgText src={product.image.desktop} />
  ));

  return (
    <>
      <div className={classes.outer}>
        <Container className={classes.container}>
          <h1>{id}</h1>
        </Container>
      </div>
      <Container>{products}</Container>
    </>
  );
}

export default ProductPage;
