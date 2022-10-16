import GoBack from "../../ui/GoBack";
import { Container, Row, Col, Form, Image } from "react-bootstrap";
import CartList from "../../ui/CartList";
import classes from "./CheckOut.module.css";
import cashOnDelivery from "../../assets/icon-cash-on-delivery.svg";
import { useSelector } from "react-redux";
import CartListItem from "../../ui/CartListItem";

function CheckOut() {
  const CartItems = useSelector((state) => state.items);

  console.log(CartItems);
  const TotalAmount = useSelector((state) => state.totalAmount);

  const Cart = CartItems.map((item) => (
    <CartListItem
      id={item.id}
      image={item.image.desktop}
      name={item.name}
      price={item.price}
      quantity={item.quantity}
      isSummary={true}
    />
  ));

  return (
    <>
      <GoBack />
      <Container className={classes.checkoutForm}>
        <div className={classes.shippingDetails}>
          <h1>CHECKOUT</h1>
          <Form>
            <div className={classes.billingInfo}>
              <p className={classes.subHeader}>BILLING DETAILS</p>

              <Row>
                <Col sm={12} md={6}>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="AlexeiWard" />
                  </Form.Group>
                </Col>
                <Col sm={12} md={6}>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="alexeiward@mail.com"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col sm={12} md={6}>
                  <Form.Group className="mb-3" controlId="formNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" placeholder="+1202-555-0136" />
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
                      type="text"
                      placeholder="1137 Williams Avenue"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm={12} md={6}>
                  <Form.Group className="mb-3" controlId="formZipCode">
                    <Form.Label>ZIP Code</Form.Label>
                    <Form.Control type="number" placeholder="10001" />
                  </Form.Group>
                </Col>
                <Col sm={12} md={6}>
                  <Form.Group className="mb-3" controlId="formCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Auckland" />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col sm={12} md={6}>
                  <Form.Group className="mb-3" controlId="formCountry">
                    <Form.Label>Country</Form.Label>
                    <Form.Control type="text" placeholder="New Zealand" />
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
                    />
                      <label htmlFor="eMoney">e-Money</label>
                  </div>
                  <div className={classes.paymentMenthod}>
                    <input
                      type="radio"
                      id="cash"
                      name="payment_method"
                      value="cashOnDelivery"
                    />
                      <label htmlFor="cash">Cash on Delivery</label>
                  </div>
                </Col>
              </Row>
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
          </Form>
        </div>
        <div className={classes.cartDetails}>
          <CartList
            cart={Cart}
            title="SUMMARY"
            isSubtext={false}
            totalAmount={TotalAmount}
            btnText="CONTINUE"
            isSummary={true}
            TotalAmount={TotalAmount}
          />
        </div>
      </Container>
    </>
  );
}

export default CheckOut;
