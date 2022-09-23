import { useParams } from "react-router-dom";
import classes from "./ProductPage.module.css";
import Container from "react-bootstrap/Container";
import ImgText from "../../ui/ImgText";
import data from "../../data";
import HighlightProduct from "../home/HightlightProduct";

function ProductPage() {
  let { id } = useParams();

  if (!id) return;

  const selectedProduct = data.filter((dat) => dat.category === id);
  const isDesktop = window.matchMedia("(min-width:992px)").matches;
  const isTablet = window.matchMedia("(min-width:768px)").matches;

  console.log(selectedProduct);

  const products = selectedProduct.map((product) => (
    <ImgText
      key={product.id}
      src={
        isDesktop
          ? product.categoryImage.desktop
          : isTablet
          ? product.categoryImage.tablet
          : product.categoryImage.mobile
      }
      spanExist={true}
      span={product.new ? "NEW PRODUCT" : ""}
      title1={product.name}
      text={product.description}
      btnExist={true}
      btnText="SEE PRODUCT"
      order1={product.imgOrder === "right" ? "last" : ""}
    />
  ));

  return (
    <>
      <div className={classes.outer}>
        <Container className={classes.container}>
          <h1>{id}</h1>
        </Container>
      </div>
      <Container>
        {products}
        <HighlightProduct />
      </Container>
    </>
  );
}

export default ProductPage;
