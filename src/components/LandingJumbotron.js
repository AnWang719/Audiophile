import classes from "./Jumbotron.module.css";

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

          <a className={`btn btn-lg ${classes.button}`} href="#" role="button">
            SEE PRODUCT
          </a>
        </div>
      </div>
    </>
  );
}

export default LandingJumbotron;
