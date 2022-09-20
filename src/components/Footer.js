import { Container, Row, Col, Image } from "react-bootstrap";
import logo from "../assets/logo.svg";
import facebook from "../assets/icon-facebook.svg";
import instagram from "../assets/icon-instagram.svg";
import twitter from "../assets/icon-twitter.svg";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className={classes.footerContainer}>
      <Container>
        <div className={classes.orangeDiv}></div>
        <div className={classes.footerDiv}>
          <Row>
            <Col lg={6} md={12}>
              <Image src={logo} fluid />
            </Col>
            <Col lg={6} md={12}>
              <div className={classes.footerRight}>
                <ul>
                  <li>HOME</li>
                  <li>HEADPHONES</li>
                  <li>SPEAKERS</li>
                  <li>EARPHONES</li>
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
              <p>Copyright 2021. All Rights Reserved</p>
            </Col>
            <Col md={6} sm={12}>
              <div className={classes.socialIcons}>
                <Image src={facebook} fluid />
                <Image src={instagram} fluid />
                <Image src={twitter} fluid />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
