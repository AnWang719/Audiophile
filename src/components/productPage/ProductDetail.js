import { Container, Row, Col, Image } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import ImgText from "../../ui/ImgText";
import classes from "./ProductDetail.module.css";

function ProductDetail() {
  const Location = useLocation();

  const { image, New, name, description, price, features, includes, gallery } =
    Location.state[0];

  const isDesktop = window.matchMedia("(min-width:992px)").matches;
  const isTablet = window.matchMedia("(min-width:768px)").matches;

  const listItem = includes.map((item) => (
    <div key={item.item} className={classes.listItem}>
      <p> {item.quantity}X</p>
      <p>{item.item}</p>
    </div>
  ));

  //   const Gallery = Object.keys(gallery).map((img)=>(<Row>
  //   <Col className={classes.galleryLeft}>
  //     <div><Image src={img.} /></div>
  //     <div></div>
  //   </Col>
  //   <Col className={classes.galleryRight}></Col>
  // </Row>))

  return (
    <>
      <Container className={classes.goBackContainer}>
        <div className={classes.goBackDiv}>
          <a>Go Back</a>
        </div>
      </Container>

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

      <Container className={classes.container}>
        <div className={classes.featuresContainer}>
          <Row>
            <Col md={12} lg={7}>
              <p className={classes.heading}>FEATURES</p>
              <p>{features}</p>
            </Col>
            <Col md={12} lg={5} className={classes.includesContainer}>
              <p className={classes.heading}> IN THE BOX</p>
              {listItem}
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
      </Container>
    </>
  );
}

export default ProductDetail;
