import classes from "./ProductButton.module.css";

function ProductButton({ className, onClick, children }) {
  return (
    <a className={`${classes.btn} ${className}`} onClick={onClick}>
      {children}
    </a>
  );
}

export default ProductButton;
