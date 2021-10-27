import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function AnonymousUserNav() {
  return (
    <Nav>
      <Nav.Link as={Link} to="/register">
        <p>Register</p>
      </Nav.Link>
      <Nav.Link as={Link} to="/login">
        <p>Login</p>
      </Nav.Link>
    </Nav>
  );
}

export default AnonymousUserNav;
