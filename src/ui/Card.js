import ProductButton from "./ProductButton";
import { Image } from "react-bootstrap";
import classes from "./Card.module.css";
function Card({ cardImg, cardTitle, cardBtnText, onClick }) {
  return (
    <div className={classes.cardContainer}>
      <Image src={cardImg} className={classes.cardImg} fluid />
      <p>{cardTitle}</p>
      <ProductButton className={classes.cardBtn} onClick={onClick}>
        {cardBtnText}
      </ProductButton>
    </div>
  );
}

export default Card;
