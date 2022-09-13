import classes from "./Jumbotron.module.css";
import ProductButton from "../ui/ProductButton";

function LandingJumbotron() {
  return (
    <>
      <div className={classes.Jumbotron}>
        <div className={classes.text}>
          <span>NEW PRODUCT</span>
          <p className={classes.title}>XX99 MARK II HEADPHONES</p>
          <p className={classes.lead}>
            Experience netural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <ProductButton className={classes.button}>See Product</ProductButton>
        </div>
      </div>
    </>
  );
}

export default LandingJumbotron;
