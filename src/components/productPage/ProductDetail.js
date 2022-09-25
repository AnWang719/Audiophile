import { useLocation } from "react-router-dom";
import ImgText from "../../ui/ImgText";

function ProductDetail() {
  const Location = useLocation();

  const { image, New, name, description, price } = Location.state[0];

  const isDesktop = window.matchMedia("(min-width:992px)").matches;
  const isTablet = window.matchMedia("(min-width:768px)").matches;

  return (
    <>
      <ImgText
        src={isDesktop ? image.desktop : isTablet ? image.tablet : image.mobile}
        spanExist={true}
        span={New ? "NEW PRODUCT" : ""}
        title1={name}
        text={description}
        price={price}
        btnExist={true}
        priceExist={true}
        counterExist={true}
        btnText="ADD TO CART"
      />
    </>
  );
}

export default ProductDetail;
