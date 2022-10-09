import { Container, Row, Col, Image } from "react-bootstrap";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
import ImgText from "../../ui/ImgText";
import classes from "./ProductDetail.module.css";
import Card from "../../ui/Card";
import HighlightProduct from "../home/HightlightProduct";
import data from "../../data";
import { CartActions } from "../../store/CartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import GoBack from "../../ui/GoBack";

function ProductDetail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function showProductDetailHandler(slug) {
    const selectedProduct = data.filter((pro) => pro.slug === slug);
    navigate("/productDetail", { state: selectedProduct });
    window.scrollTo(0, 0);
    setQuantity(1);
  }

  const Location = useLocation();

  const {
    image,
    New,
    name,
    description,
    price,
    features,
    includes,
    gallery,
    others,
    category,
    id,
  } = Location.state[0];

  const isDesktop = window.matchMedia("(min-width:992px)").matches;
  const isTablet = window.matchMedia("(min-width:768px)").matches;
  const [quantity, setQuantity] = useState(1);
  const itemRemoveHandler = () => {
    setQuantity((prevState) =>
      prevState && prevState !== 1 ? prevState - 1 : 1
    );
  };

  const itemAddHandler = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const handleQuantityInput = (e) => {
    setQuantity(+e.target.value);
  };

  const addToCartHandler = () => {
    dispatch(
      CartActions.addToCart({
        id,
        name,
        image,
        price,
        quantity: quantity,
      })
    );
  };

  const listItems = includes.map((item) => (
    <div key={item.item} className={classes.listItem}>
      <p> {item.quantity}X</p>
      <p>{item.item}</p>
    </div>
  ));

  const cardItems = others.map((cardItem) => (
    <Col key={cardItem.name} sm={12} md={4} className={classes.cardContainer}>
      <Card
        cardImg={
          isDesktop
            ? cardItem.image.desktop
            : isTablet
            ? cardItem.image.tablet
            : cardItem.image.mobile
        }
        cardTitle={cardItem.name}
        cardBtnText={"SEE PRODUCT"}
        onClick={showProductDetailHandler.bind(this, cardItem.slug)}
      />
    </Col>
  ));

  return (
    <>
      {/* <Container className={classes.goBackContainer}>
        <div className={classes.goBackDiv}>
          <NavLink to={`/${category}`} className={classes.goBackBtn}>
            Go Back
          </NavLink>
        </div>
      </Container> */}

      <GoBack goBackTo={category} />

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
        btnOnClick={addToCartHandler}
        itemRemoveHandler={itemRemoveHandler}
        itemAddHandler={itemAddHandler}
        quantity={quantity}
        handleQuantityInput={handleQuantityInput}
      />

      <Container className={classes.container}>
        <div className={classes.featuresContainer}>
          <Row>
            <Col md={12} lg={7}>
              <p className={classes.heading}>FEATURES</p>
              <p>{features}</p>
            </Col>
            <Col md={12} lg={5} className={classes.includesContainer}>
              <p className={classes.heading}> IN THE BOX</p>
              {listItems}
            </Col>
          </Row>
        </div>
        <div className={classes.gallery}>
          <Row>
            <Col className={classes.galleryLeft} sm={12} md={5}>
              <Row className={classes.galleryLeftInner}>
                <Col lg={12} className={classes.galleryLeftInnerTop}>
                  <Image
                    className={classes.imgLeft}
                    src={
                      isDesktop
                        ? gallery.first.desktop
                        : isTablet
                        ? gallery.first.tablet
                        : gallery.first.mobile
                    }
                    fluid
                  />
                </Col>
                <Col lg={12} className={classes.galleryLeftInnerBtm}>
                  <Image
                    className={classes.imgLeft}
                    src={
                      isDesktop
                        ? gallery.second.desktop
                        : isTablet
                        ? gallery.second.tablet
                        : gallery.second.mobile
                    }
                    fluid
                  />
                </Col>
              </Row>
            </Col>
            <Col className={classes.galleryRight} sm={12} md={7}>
              <Image
                className={classes.imgRight}
                src={
                  isDesktop
                    ? gallery.third.desktop
                    : isTablet
                    ? gallery.third.tablet
                    : gallery.third.mobile
                }
                fluid
              />
            </Col>
          </Row>
        </div>
        <div className={classes.CardsSection}>
          <p>YOU MAY ALSO LIKE</p>
          <Row>{cardItems}</Row>
        </div>
      </Container>
      <HighlightProduct />
    </>
  );
}

export default ProductDetail;
