import ProductButton from "./ProductButton";
import classes from "./CartList.module.css";

function CartList({
  title,
  subText,
  isSubtext,
  isSummary,
  TotalAmount,
  btnText,
  shipping,
  vat,
  grandTotal,
  cart,
  removeAllHandler,
  checkoutHandler,
}) {
  return (
    <>
      <div className={classes.modalHeader}>
        <p> {title}</p>
        {isSubtext && <p onClick={removeAllHandler}> {subText}</p>}
      </div>
      {cart}

      <div className={classes.amount}>
        <p>TOTAL</p>
        <p>${TotalAmount}</p>
      </div>
      {isSummary && (
        <>
          <div className={classes.amount}>
            <p>SHIPPING</p>
            <p>${shipping}</p>
          </div>
          <div className={classes.amount}>
            <p>VAT(INCLUDED)</p>
            <p>${vat}</p>
          </div>
          <div className={classes.amount}>
            <p>GRAND TOTAL</p>
            <p>${grandTotal}</p>
          </div>
        </>
      )}

      <ProductButton className={classes.checkoutBtn} onClick={checkoutHandler}>
        {btnText}
      </ProductButton>
    </>
  );
}

export default CartList;
