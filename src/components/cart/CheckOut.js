import GoBack from "../../ui/GoBack";
import { Container, Row, Col, Form, Image } from "react-bootstrap";
import CartList from "../../ui/CartList";
import classes from "./CheckOut.module.css";
import cashOnDelivery from "../../assets/icon-cash-on-delivery.svg";
import confirmation from "../../assets/icon-order-confirmation.svg";
import { useSelector } from "react-redux";
import CartListItem from "../../ui/CartListItem";

import Modal from "react-bootstrap/Modal";
import ProductButton from "../../ui/ProductButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CartActions } from "../../store/CartSlice";
import { useState } from "react";
import useCollapse from "react-collapsed";
function CheckOut() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const CartItems = useSelector((state) => state.items);

  const TotalAmount = useSelector((state) => state.totalAmount);

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const [selected, setSelected] = useState("e-Money");
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  if (CartItems.length > 0) {
    const [{ id, name, image, price, quantity }] = CartItems;

    const FirstItem = (
      <CartListItem
        key={id}
        image={image.desktop}
        name={name}
        price={price}
        quantity={quantity}
        isSummary={true}
      />
    );

    const midItems = CartItems.filter((item, i) => i !== 0);

    const MidItems = midItems.map((item) => (
      <CartListItem
        key={item.id}
        image={item.image.desktop}
        name={item.name}
        price={item.price}
        quantity={item.quantity}
        isSummary={true}
      />
    ));

    const Cart = CartItems.map((item) => (
      <CartListItem
        key={item.id}
        image={item.image.desktop}
        name={item.name}
        price={item.price}
        quantity={item.quantity}
        isSummary={true}
      />
    ));

    const Shipping = 50;

    const VAT = (TotalAmount + Shipping) * 0.2;
    const GrandTotal = TotalAmount + Shipping;

    // const [selected, setSelected] = useState("e-Money");

    const RadioCheckHandler = (event) => {
      setSelected(event.target.value);
    };
    // const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.stopPropagation();
      } else {
        handleShow();
      }
      setValidated(true);
    };

    return (
      <>
        <GoBack goBackTo="home" />
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Container className={classes.checkoutForm}>
            <div className={classes.shippingDetails}>
              <h1>CHECKOUT</h1>

              <div className={classes.billingInfo}>
                <p className={classes.subHeader}>BILLING DETAILS</p>

                <Row>
                  <Col sm={12} md={6}>
                    <Form.Group className="mb-3" controlId="formName">
                      <Form.Label>Name</Form.Label>

                      <Form.Control
                        required
                        type="text"
                        placeholder="AlexeiWard"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid name.
                      </Form.Control.Feedback>
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col sm={12} md={6}>
                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        required
                        type="email"
                        placeholder="alexeiward@mail.com"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid Email.
                      </Form.Control.Feedback>
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col sm={12} md={6}>
                    <Form.Group className="mb-3" controlId="formNumber">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        required
                        type="number"
                        placeholder="+1202-555-0136"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid number.
                      </Form.Control.Feedback>
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col sm={12} md={6}></Col>
                </Row>
              </div>

              <div className={classes.shippingInfo}>
                <p className={classes.subHeader}>SHIPPING INFO</p>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formAdress">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="1137 Williams Avenue"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid address.
                      </Form.Control.Feedback>
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12} md={6}>
                    <Form.Group className="mb-3" controlId="formZipCode">
                      <Form.Label>ZIP Code</Form.Label>
                      <Form.Control
                        required
                        type="number"
                        placeholder="10001"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid Zip Code.
                      </Form.Control.Feedback>
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col sm={12} md={6}>
                    <Form.Group className="mb-3" controlId="formCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Auckland"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid city.
                      </Form.Control.Feedback>
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col sm={12} md={6}>
                    <Form.Group className="mb-3" controlId="formCountry">
                      <Form.Label>Country</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="New Zealand"
                      />
                      <Form.Control.Feedback type="invalid">
                        Please provide a valid country.
                      </Form.Control.Feedback>
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col sm={12} md={6}></Col>
                </Row>
              </div>
              <div className={classes.paymentInfo}>
                <p className={classes.subHeader}> PAYEMENT DETAILS</p>

                <Row>
                  <Col sm={12} md={6}>
                    <h6>Payment Method</h6>
                  </Col>
                  <Col sm={12} md={6}>
                    <div className={classes.paymentMenthod}>
                      <input
                        type="radio"
                        id="eMoney"
                        name="payment_method"
                        value="e-Money"
                        checked={selected === "e-Money"}
                        onChange={RadioCheckHandler}
                      />
                      <label htmlFor="eMoney">e-Money</label>
                    </div>
                    <div className={classes.paymentMenthod}>
                      <input
                        type="radio"
                        id="cash"
                        name="payment_method"
                        value="cashOnDelivery"
                        checked={selected === "cashOnDelivery"}
                        onChange={RadioCheckHandler}
                      />
                      <label htmlFor="cash">Cash on Delivery</label>
                    </div>
                  </Col>
                </Row>
                {selected === "e-Money" && (
                  <Row className={classes.eMoneyInfo}>
                    <Col sm={12} md={6}>
                      <Form.Group className="mb-3" controlId="eMoneyNumber">
                        <Form.Label>e-Money Number</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="238523993"
                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid number.
                        </Form.Control.Feedback>
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col sm={12} md={6}>
                      <Form.Group className="mb-3" controlId="eMoneyPin">
                        <Form.Label>e-Money Pin</Form.Label>
                        <Form.Control required type="text" placeholder="6891" />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid pin.
                        </Form.Control.Feedback>
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                )}
              </div>

              <div className={classes.terms}>
                <Image src={cashOnDelivery} fluid />
                <p>
                  The ‘Cash on Delivery’ option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so that your order will not be
                  cancelled.
                </p>
              </div>
            </div>
            <div className={classes.cartDetails}>
              <CartList
                cart={Cart}
                title="SUMMARY"
                isSubtext={false}
                totalAmount={TotalAmount}
                btnText="CONTINUE"
                isSummary={true}
                shipping={Shipping}
                TotalAmount={TotalAmount}
                vat={Math.round(VAT)}
                grandTotal={Math.round(GrandTotal)}
                type="submit"
              />
            </div>
          </Container>

          <Modal
            show={show}
            onHide={handleClose}
            dialogClassName={classes.confirmationModal}
          >
            <Modal.Body className={classes.modalBody}>
              <Image src={confirmation} fluid />
              <p className={`${classes.header} mt-4`}>
                THANK YOU FOR YOUR ORDER
              </p>

              <p className={`${classes.subText} mb-4`}>
                You will receive an email confirmation shortly
              </p>
              <Row className={classes.orderCard}>
                <Col sm={12} md={7} className={classes.orderCardLeft}>
                  {FirstItem}

                  {CartItems.length > 1 && (
                    <>
                      <div {...getCollapseProps()}>
                        <div className={classes.otherItems}>{MidItems}</div>
                      </div>
                      <div
                        className={classes.otherItmesText}
                        {...getToggleProps()}
                      >
                        {isExpanded ? (
                          <p>show less</p>
                        ) : (
                          <p>and {midItems.length} other item(s)</p>
                        )}
                      </div>
                    </>
                  )}
                </Col>
                <Col sm={12} md={5} className={classes.orderCardRight}>
                  <p>GRAND TOTAL</p>
                  <p> ${TotalAmount}</p>
                </Col>
              </Row>

              <ProductButton
                className={classes.backHomeBtn}
                onClick={() => {
                  navigate("/home");
                  dispatch(CartActions.emptyCart());
                }}
              >
                BACK TO HOME
              </ProductButton>
            </Modal.Body>
          </Modal>
        </Form>
      </>
    );
  } else {
    return (
      <p className={classes.fallbackText}>
        Currently no items in you cart, go add some!
      </p>
    );
  }
}

export default CheckOut;
