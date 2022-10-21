import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import classes from "./Menu.module.css";
import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import CartModal from "../cart/CartModal";
import { useState } from "react";

function OffcanvasMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = window.matchMedia("(max-width:768px)").matches;
  const toggleMenu = () => {
    if (isMobile) {
      setMenuOpen(!menuOpen);
    }
  };

  const handleClose = () => setMenuOpen(false);
  return (
    <div className={classes.menuOuter}>
      <Container className={classes.menuContainer}>
        {["md"].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            className={classes.bgblack}
            fixed="top"
          >
            <Container className="pt-4 pb-4">
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
                className="navbar-dark"
                onClick={toggleMenu}
              />
              <NavLink to="/home" onClick={toggleMenu}>
                <img src={logo} alt="logo" />
              </NavLink>
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="start"
                className={`${classes.bgblack} ${classes.Offcanvas}`}
                show={menuOpen}
                onHide={handleClose}
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <img src={logo} alt="logo" />
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-evenly flex-grow-1 pe-3">
                    <NavLink
                      to="/home"
                      className="nav-link"
                      onClick={toggleMenu}
                    >
                      HOME
                    </NavLink>
                    <NavLink
                      to="/headphones"
                      className="nav-link"
                      onClick={toggleMenu}
                    >
                      HEADPHONES
                    </NavLink>
                    <NavLink
                      to="/speakers"
                      className="nav-link"
                      onClick={toggleMenu}
                    >
                      SPEAKERS
                    </NavLink>
                    <NavLink
                      to="/earphones"
                      className="nav-link"
                      onClick={toggleMenu}
                    >
                      EARPHONES
                    </NavLink>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>

              <CartModal />
            </Container>
          </Navbar>
        ))}
        <div className={classes.emptyDiv}></div>
      </Container>
    </div>
  );
}

export default OffcanvasMenu;
