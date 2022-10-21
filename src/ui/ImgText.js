import ProductButton from "./ProductButton";
import { Container, Image, Row, Col } from "react-bootstrap";
import Input from "./Input";
import classes from "./ImgText.module.css";
function ImgText({
  src,
  span,
  title1,
  title2,
  text,
  textSpan,
  price,
  btnText,
  btnExist,
  priceExist,
  counterExist,
  spanExist,
  order1,
  order2,
  span1,
  span2,
  btnOnClick,
  itemRemoveHandler,
  itemAddHandler,
  quantity,
  handleQuantityInput,
}) {
  return (
    <Container className={classes.ImgTextContainer}>
      <Row>
        <Col md={{ span: span1 }} lg={{ span: 6, order: order1 }}>
          <div className={classes.ImgContainer}>
            <Image src={src} alt={title1} fluid />
          </div>
        </Col>
        <Col md={{ span: span2 }} lg={{ span: 6, order: order2 }}>
          <div className={classes.TextContainer}>
            {spanExist && <span className={classes.span}>{span}</span>}
            <p className={classes.title}>
              {title1}
              <span className={`${classes.title} ${classes.textSpan}`}>
                {textSpan}
              </span>
              {title2}
            </p>

            <p className={classes.text}>{text}</p>
            {priceExist && <p className={classes.price}>${price}</p>}
            <div className={classes.inputContainer}>
              {counterExist && (
                <Input
                  quantity={quantity}
                  handleQuantityInput={handleQuantityInput}
                  itemAddHandler={itemAddHandler}
                  itemRemoveHandler={itemRemoveHandler}
                />
              )}

              {btnExist && (
                <ProductButton onClick={btnOnClick}>{btnText}</ProductButton>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ImgText;
