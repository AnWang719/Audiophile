import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import classes from "./Menu.module.css";
import cart from "../assets/icon-cart.svg";
import logo from "../assets/logo.svg";
function OffcanvasMenu() {
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} expand={expand} className={classes.bgblack}>
          <Container className="mt-4 mb-4">
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="navbar-dark"
            />
            <Navbar.Brand href="#">
              <img src={logo} alt="logo" />
            </Navbar.Brand>

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              className={`${classes.bgblack} ${classes.Offcanvas}`}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img src={logo} alt="logo" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 pe-3">
                  <Nav.Link href="#action1">HOME</Nav.Link>
                  <Nav.Link href="#action2">HEADPHONES</Nav.Link>
                  <Nav.Link href="#action2">SPEAKERS</Nav.Link>
                  <Nav.Link href="#action2">EARPHONES</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <img src={cart} alt="cart" />
          </Container>
        </Navbar>
      ))}
      <div className={classes.line}></div>
    </>
  );
}

export default OffcanvasMenu;
