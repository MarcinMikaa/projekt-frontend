import "./NavbarComp.css";
import logo from "../../images/logo.png";
import { Link, useHistory } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import axios from "axios";
import { useEffect } from "react";

function NavbarComp() {
  const history = useHistory();

  useEffect(() => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/user",
    }).then((res) => {
      localStorage.setItem("role", res.data.isAdmin);
      localStorage.setItem("username", res.data.username);
      console.log(localStorage.getItem("role"));
      console.log(localStorage.getItem("username"));
    });
  });

  const logout = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/logout",
    }).then((res) => {
      localStorage.clear();
      history.push("/");
      console.log(res);
    });
  };

  return (
    <div className="navbar-comp">
      <Navbar bg="white" expand="lg" fixed="top" className="navabr">
        <Container fluid>
          <Nav.Link as={Link} to="/">
            <img src={logo} alt="logo" height="70" />
          </Nav.Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll></Nav>
            <Nav>
              {localStorage.getItem("token") ? (
                
                <>


                  <Nav.Link as={Link} to="/add">
                    <p>ADD PAGE</p>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/update">
                    <p>UPDATE PAGE</p>
                  </Nav.Link>

                  <Nav.Link as={Link} to="/favorite">
                    <p>FAVORITE</p>
                  </Nav.Link>

                  <Nav.Link onClick={logout}>
                    <p>LOGOUT</p>
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/register">
                    <p>REGISTER</p>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/login">
                    <p>LOGIN</p>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComp;
