import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import cart from "../../assets/icon-cart.svg";
import { useSelector } from "react-redux";
import classes from "./CartModal.module.css";

function CartModal() {
  const [show, setShow] = useState(false);

  const [cartHasItem, setCartHasItem] = useState(false);
  const CartItems = useSelector((state) => state.items);

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
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        {/* <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

// render(<CartModal />);

export default CartModal;
