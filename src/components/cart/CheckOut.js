import GoBack from "../../ui/GoBack";
import { Container, Row, Col, Form } from "react-bootstrap";
import CartList from "../../ui/CartList";
import classes from "./CheckOut.module.css";

function CheckOut() {
  return (
    <>
      <GoBack />
      <Container className={classes.checkoutForm}>
        <div className={classes.shippingDetails}>
          <h1>CHECKOUT</h1>
          <Form>
            <div className={classes.billingInfo}>
              <p>BILLING DETAILS</p>

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
              <p>SHIPPING INFO</p>
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
              <p>PAYEMENT DETAILS</p>
            </div>
          </Form>
        </div>
        <div className={classes.cartDetails}>
          <CartList />
        </div>
      </Container>
    </>
  );
}

export default CheckOut;
