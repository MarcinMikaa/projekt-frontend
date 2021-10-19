import "./NavbarComp.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

function NavbarComp() {
  return (
    <div className="navbar-comp">
      <Navbar bg="white" expand="lg">
        <Container fluid>
          <Nav.Link as={Link} to="/">
            <img src={logo} alt="logo" height="70" />
          </Nav.Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll></Nav>
            <Nav>
              <Nav.Link as={Link} to="/favorite" className="nav-link">
                <p>FAVORITE</p>
              </Nav.Link>
              <Nav.Link as={Link} to="/register" className="nav-link">
                <p>REGISTER</p>
              </Nav.Link>
              <Nav.Link as={Link} to="/login" className="nav-link">
                <p>LOGIN</p>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComp;
