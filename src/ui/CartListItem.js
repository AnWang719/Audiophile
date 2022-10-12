import { Image } from "react-bootstrap";
import Input from "./Input";
import classes from "./CartListItem.module.css";

function CartListItem({
  id,
  image,
  name,
  price,
  quantity,
  handleQuantityInput,
  itemAddHandler,
  itemRemoveHandler,
  isSummary,
}) {
  return (
    <div key={id} className={classes.cartItems}>
      <div className={classes.cartItemsLeft}>
        <Image src={image} fluid className={classes.image} />
        <div>
          <p>{name}</p>
          <p>${price}</p>
        </div>
      </div>
      <div className={classes.cartItemsRight}>
        {isSummary ? (
          <p>x{quantity}</p>
        ) : (
          <Input
            className={classes.addBtn}
            quantity={quantity}
            handleQuantityInput={handleQuantityInput}
            itemAddHandler={itemAddHandler}
            itemRemoveHandler={itemRemoveHandler}
          />
        )}
      </div>
    </div>
  );
}

export default CartListItem;
