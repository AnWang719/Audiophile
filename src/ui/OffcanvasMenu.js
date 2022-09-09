import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import cart from "../assets/icon-cart.svg";
import hamburger from "../assets/icon-hamburger.svg";
import logo from "../assets/logo.svg";
function OffcanvasMenu() {
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 bg-black">
          <Container>
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
              className="bg-black"
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
    </>
  );
}

export default OffcanvasMenu;
