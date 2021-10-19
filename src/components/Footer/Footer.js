import "./Footer.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

function Footer() {
  return (
    <div className="footer">
      <div className="row-left">
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link as={Link} to="/">
            Home Page
          </Nav.Link>
          <Nav.Link as={Link} to="/favorite">
            Favorite
          </Nav.Link>
          <Nav.Link as={Link} to="/login">
            Login
          </Nav.Link>
          <Nav.Link as={Link} to="/register">
            Register
          </Nav.Link>
        </Nav>
        <div className="contact">
          <h3>Contact</h3>
          <p>sneakers-release@gmail.com</p>
        </div>
      </div>
      <div className="row-right">
        <img src={logo} className="d-inline-block align-top" alt="Logo" />
      </div>

      <p>Copyright © Sneakers Release 2021</p>
    </div>
  );
}

export default Footer;
