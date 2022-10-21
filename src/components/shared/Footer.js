import { Container, Row, Col, Image } from "react-bootstrap";
import logo from "../../assets/logo.svg";
import facebook from "../../assets/icon-facebook.svg";
import instagram from "../../assets/icon-instagram.svg";
import twitter from "../../assets/icon-twitter.svg";
import classes from "./Footer.module.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className={classes.footerContainer}>
      <Container>
        <div className={classes.orangeDiv}></div>
        <div className={classes.footerDiv}>
          <Row>
            <Col lg={6} md={12}>
              <Image src={logo} alt="logo" fluid />
            </Col>
            <Col lg={6} md={12}>
              <div className={classes.footerRight}>
                <ul>
                  <li>
                    <NavLink to="/home">HOME</NavLink>
                  </li>
                  <li>
                    <NavLink to="/headphones">HEADPHONES</NavLink>
                  </li>
                  <li>
                    <NavLink to="/speakers">SPEAKERS</NavLink>
                  </li>
                  <li>
                    <NavLink to="/earphones">EARPHONES</NavLink>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className={classes.row}>
            <Col lg={6} md={12}>
              <div className={classes.footerLeft}>
                <p>
                  Audiophile is an all in one stop to fulfill your audio needs.
                  We're a small team of music lovers and sound specialists who
                  are devoted to helping you get the most out of personal audio.
                  Come and visit our demo facility - we’re open 7 days a week.
                </p>
              </div>
            </Col>
            <Col lg={6} md={12}></Col>
          </Row>
          <Row>
            <Col md={6} sm={12}>
              <p>Copyright 2022. All Rights Reserved By An Wang</p>
            </Col>
            <Col md={6} sm={12}>
              <div className={classes.socialIcons}>
                <Image src={facebook} alt="facebook icon" fluid />
                <Image src={instagram} alt="instagram icon" fluid />
                <Image src={twitter} alt="twitter icon" fluid />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
