import "./NavbarComp.css";
import logo from "../../images/logo.png";
import { Link, useHistory } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

import LoggedUserNav from "../LoggedUserNav/LoggedUserNav";
import AnonymousUserNav from "../AnonymousUserNav/AnonymousUserNav";

function NavbarComp() {
  const history = useHistory();
  // const logout = () => {
  //   axios({
  //     method: "GET",
  //     withCredentials: true,
  //     url: "http://localhost:4000/logout",
  //   }).then((res) => {
  //     localStorage.clear();
  //     history.push("/");
  //     console.log(res);
  //   });
  // };

  const logout = () => {
    localStorage.clear();
    history.push("/");
    console.log("Logout Successfully");
  };

  const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
  console.log(user);

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
            {user ? <LoggedUserNav logout={logout} isAdmin={user.isAdmin} /> : <AnonymousUserNav />}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComp;
