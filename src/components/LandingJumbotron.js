import classes from "./Jumbotron.module.css";

function LandingJumbotron() {
  return (
    <div className="jumbotron bgblack ">
      {/* <div>
        <span>NEW PRODUCT</span>
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>

        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="#" role="button">
            Learn more
          </a>
        </p>
      </div> */}
      <div className={`container ${classes.JumbotronContainer}`}>
        <img src={require("../assets/image-hero.jpg")} alt="new product" />
      </div>
    </div>
  );
}

export default LandingJumbotron;
