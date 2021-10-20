import "./Footer.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { Nav, Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <div className="footer">
      <Container className="footer-container">
        <Row>
          <Col md="4">
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link as={Link} to="/">
                <p>Home Page</p>
              </Nav.Link>
              <Nav.Link as={Link} to="/favorite" className="footer-link">
                <p>Favorite</p>
              </Nav.Link>
              <Nav.Link as={Link} to="/login" className="footer-link">
                <p>Login</p>
              </Nav.Link>
              <Nav.Link as={Link} to="/register" className="footer-link">
                <p>Register</p>
              </Nav.Link>
            </Nav>
          </Col>
          <Col md="4">
            <div className="contact">
              <h3>Contact</h3>
              <p>sneakers-release@gmail.com</p>
            </div>
          </Col>
          <Col md="4">
            <img src={logo} className="d-inline-block align-top" alt="Logo" />
          </Col>
        </Row>
      </Container>
      <div className="copyrights">
        <p>Copyright © Sneakers Release 2021</p>
      </div>
    </div>
  );
}

export default Footer;
