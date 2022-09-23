import classes from "./ProductButton.module.css";

function ProductButton({ children }) {
  return (
    <a className={classes.btn} href="#">
      {children}
    </a>
  );
}

export default ProductButton;
