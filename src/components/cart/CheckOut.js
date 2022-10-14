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
          <div>
            <p>BILLING DETAILS</p>
            <Form>
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
            </Form>
          </div>
        </div>
        <div className={classes.cartDetails}>
          <CartList />
        </div>
      </Container>
    </>
  );
}

export default CheckOut;
