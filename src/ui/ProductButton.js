import classes from "./ProductButton.module.css";

function ProductButton({ className, onClick, children, type }) {
  return (
    <button
      className={`${classes.btn} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

export default ProductButton;
