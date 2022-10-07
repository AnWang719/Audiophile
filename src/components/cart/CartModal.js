import React, { useState, useEffect } from "react";
import { Container, Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import cart from "../../assets/icon-cart.svg";
import { useDispatch, useSelector } from "react-redux";
import classes from "./CartModal.module.css";
import Input from "../../ui/Input";
import ProductButton from "../../ui/ProductButton";
import { CartActions } from "../../store/CartSlice";

function CartModal() {
  const [show, setShow] = useState(false);
  const [cartHasItem, setCartHasItem] = useState(false);
  const CartItems = useSelector((state) => state.items);
  const TotalAmount = useSelector((state) => state.totalAmount);
  const dispatch = useDispatch();
  const handleQuantityInput = () => {};

  const itemAddHandler = (item) => {
    dispatch(CartActions.addToCart(item));
  };

  const itemRemoveHandler = (id) => {
    dispatch(CartActions.removeFromCart(id));
  };

  const Cart = CartItems.map((item) => (
    <div key={item.id} className={classes.cartItems}>
      <div className={classes.cartItemsLeft}>
        <Image src={item.image.desktop} fluid className={classes.image} />
        <div>
          <p>{item.name}</p>
          <p>${item.price}</p>
        </div>
      </div>
      <div className={classes.cartItemsRight}>
        <Input
          className={classes.addBtn}
          quantity={item.quantity}
          handleQuantityInput={handleQuantityInput}
          itemAddHandler={itemAddHandler.bind(this, item)}
          itemRemoveHandler={itemRemoveHandler.bind(this, item.id)}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    if (CartItems.length >= 1) {
      setCartHasItem(true);
    }
  }, [CartItems]);

  function extractValue(arr, prop) {
    let extractedValue = arr.map((item) => item[prop]);
    return extractedValue;
  }

  const result = extractValue(CartItems, "quantity");
  const totalQuantity = result.reduce((acc, value) => {
    return acc + value;
  }, 0);

  return (
    <>
      <div className={classes.cart} onClick={() => setShow(true)}>
        {cartHasItem && <span>{totalQuantity}</span>}
        <img src={cart} alt="cart" />
      </div>

      <Modal
        size="sm"
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w container "
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body>
          <Container>
            {CartItems.length >= 1 ? (
              <>
                <div className={classes.modalHeader}>
                  <p> CART({CartItems.length})</p>
                  <p> Remove all</p>
                </div>
                {Cart}
                <div className={classes.amount}>
                  <p>TOTAL</p>
                  <p>${TotalAmount}</p>
                </div>

                <ProductButton className={classes.checkoutBtn}>
                  CHECKOUT
                </ProductButton>
              </>
            ) : (
              <p className={classes.noItemsText}>
                Currently no items in your cart
              </p>
            )}
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CartModal;
