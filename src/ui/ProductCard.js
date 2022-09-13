// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

import arrowRight from "../assets/icon-arrow-right.svg";
import classes from "./ProductCard.module.css";
function ProductCard({ img, title }) {
  return (
    <>
      <div className={classes.cardContainer}>
        <div className={classes.cardImgContainer}>
          <Image src={img} className={classes.cardImg} />
        </div>

        <div className={classes.cardBody}>
          <p>{title}</p>
          <a href="#">
            SHOP
            <Image src={arrowRight} className={classes.arrowRight} />
          </a>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
