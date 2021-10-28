import "./Footer.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { Nav, Container, Row, Col } from "react-bootstrap";
import AnonymousUserNav from "../AnonymousUserNav/AnonymousUserNav";
import LoggedUserNav from "../LoggedUserNav/LoggedUserNav";

function Footer() {
  const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;

  return (
    <div className="footer">
      <Container className="footer-container">
        <Row>
          <Col md="4">
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link as={Link} to="/">
                <p>Home Page</p>
              </Nav.Link>
              {user ? <LoggedUserNav isAdmin={user.isAdmin} /> : <AnonymousUserNav />}
            </Nav>
          </Col>
          <Col md="4">
            <div className="contact">
              <h3>Contact</h3>
              <p>sneakers-release@gmail.com</p>
            </div>
          </Col>
          <Col md="4">
            <div className="footer-image">
              <img src={logo} className="d-inline-block align-top" alt="Logo" />
            </div>
          </Col>
        </Row>
        <div className="copyrights">
          <p>Copyright © Sneakers Release 2021</p>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
