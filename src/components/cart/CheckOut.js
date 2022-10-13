import GoBack from "../../ui/GoBack";
import { Container, Row, Col, Form } from "react-bootstrap";
import CartList from "../../ui/CartList";

function CheckOut() {
  return (
    <>
      <GoBack />
      <Container>
        <Row>
          <Col md={12} lg={8}>
            <h1>CHECKOUT</h1>
            <p>BILLING DETAILS</p>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Text className="text-muted">BILLING DETAILS</Form.Text>
                <Row>
                  <Col sm={12} md={6}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="AlexeiWard" />
                  </Col>
                  <Col sm={12} md={6}>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="alexeiward@mail.com"
                    />
                  </Col>
                </Row>

                <Row>
                  <Col sm={12} md={6}>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" placeholder="+1202-555-0136" />
                  </Col>
                  <Col sm={12} md={6}></Col>
                </Row>
              </Form.Group>
            </Form>
          </Col>
          <Col md={12} lg={4}>
            <CartList />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CheckOut;
