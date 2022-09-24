import classes from "./ProductButton.module.css";

function ProductButton({ onClick, children }) {
  return (
    <a className={classes.btn} onClick={onClick}>
      {children}
    </a>
  );
}

export default ProductButton;
