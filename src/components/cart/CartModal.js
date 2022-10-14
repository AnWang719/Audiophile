import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import cart from "../../assets/icon-cart.svg";
import { useDispatch, useSelector } from "react-redux";
import classes from "./CartModal.module.css";
import { useNavigate } from "react-router-dom";
import { CartActions } from "../../store/CartSlice";
import CartListItem from "../../ui/CartListItem";
import CartList from "../../ui/CartList";

function CartModal() {
  const [show, setShow] = useState(false);
  const [cartHasItem, setCartHasItem] = useState(false);
  let CartItems = useSelector((state) => state.items);

  const TotalAmount = useSelector((state) => state.totalAmount);
  const dispatch = useDispatch();
  const handleQuantityInput = () => {};

  const itemAddHandler = (item) => {
    dispatch(CartActions.isAddFromCart());
    dispatch(CartActions.addToCart(item));
  };

  const itemRemoveHandler = (id) => {
    dispatch(CartActions.removeFromCart(id));
  };

  const removeAllHandler = () => {
    dispatch(CartActions.emptyCart());
  };

  const Cart = CartItems.map((item) => (
    <CartListItem
      id={item.id}
      image={item.image.desktop}
      name={item.name}
      price={item.price}
      quantity={item.quantity}
      handleQuantityInput={handleQuantityInput}
      itemAddHandler={itemAddHandler.bind(this, item)}
      itemRemoveHandler={itemRemoveHandler.bind(this, item.id)}
      isSummary={false}
    />
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

  const navigate = useNavigate();
  const checkoutHandler = () => {
    navigate("/checkOut");
    setShow(false);
  };

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
              <CartList
                cart={Cart}
                title={`CART(${CartItems.length})`}
                isSubtext={true}
                subText="Rmove all"
                totalAmount={TotalAmount}
                btnText="CHECKOUT"
                isSummary={false}
                removeAllHandler={removeAllHandler}
                TotalAmount={TotalAmount}
                checkoutHandler={checkoutHandler}
              />
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
