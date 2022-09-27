// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { NavLink } from "react-router-dom";

import arrowRight from "../assets/icon-arrow-right.svg";
import classes from "./ProductCard.module.css";
function ProductCard({ img, title, link }) {
  return (
    <>
      <div className={classes.cardContainer}>
        <div className={classes.cardImgContainer}>
          <Image src={img} className={classes.cardImg} />
        </div>

        <div className={classes.cardBody}>
          <p>{title}</p>
          <NavLink to={link}>
            SHOP
            <Image src={arrowRight} className={classes.arrowRight} />
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
