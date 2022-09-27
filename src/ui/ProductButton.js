import classes from "./ProductButton.module.css";

function ProductButton({ className, onClick, children }) {
  return (
    <button className={`${classes.btn} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default ProductButton;
