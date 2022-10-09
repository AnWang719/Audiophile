import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import classes from "./GoBack.module.css";

function GoBack({ goBackTo }) {
  return (
    <Container className={classes.goBackContainer}>
      <div className={classes.goBackDiv}>
        <NavLink to={`/${goBackTo}`} className={classes.goBackBtn}>
          Go Back
        </NavLink>
      </div>
    </Container>
  );
}

export default GoBack;
