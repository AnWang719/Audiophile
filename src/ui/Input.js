import classes from "./Input.module.css";

function Input({
  quantity,
  handleQuantityInput,
  itemRemoveHandler,
  itemAddHandler,
  className,
}) {
  return (
    <div className={`${classes.number} ${classes.quantityInput}`}>
      <span className={classes.minus} onClick={itemRemoveHandler}>
        -
      </span>
      <input type="number" value={quantity} onChange={handleQuantityInput} />
      <span className={`${className} ${classes.plus}`} onClick={itemAddHandler}>
        +
      </span>
    </div>
  );
}

export default Input;
