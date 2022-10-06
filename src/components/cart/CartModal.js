import React, { useState, useEffect } from "react";
import { Container, Image } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import cart from "../../assets/icon-cart.svg";
import { useSelector } from "react-redux";
import classes from "./CartModal.module.css";
import Input from "../../ui/Input";
function CartModal() {
  const [show, setShow] = useState(false);
  const [cartHasItem, setCartHasItem] = useState(false);
  const CartItems = useSelector((state) => state.items);

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
        <Input className={classes.addBtn} quantity={item.quantity} />
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
        {/* <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header> */}

        <Modal.Body>
          <Container>
            <div className={classes.modalHeader}>
              <div className={classes.modalHeaderLeft}>
                <p> CART({CartItems.length})</p>
              </div>
              <div className={classes.modalHeaderRight}>
                <p> Remove all</p>
              </div>
            </div>

            {Cart}
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

// render(<CartModal />);

export default CartModal;
