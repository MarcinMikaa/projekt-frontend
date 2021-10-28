import { Nav } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import AdminNav from "../AdminNav/AdminNav";
import axios from "axios";
import { useEffect } from "react";

function LoggedUserNav() {
  const history = useHistory();

  useEffect(() => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/user",
    }).then((res) => {
      localStorage.setItem("role", res.data.isAdmin);
      localStorage.setItem("username", res.data.username);
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
      window.location.reload();
      console.log("dziala");
    });
  };

  const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;

  return (
    <Nav>
      <Nav.Link as={Link} to="/favorite">
        <p>Favorite</p>
      </Nav.Link>
      {user.isAdmin && <AdminNav />}
      <Nav.Link onClick={logout}>
        <p>Logout</p>
      </Nav.Link>
    </Nav>
  );
}

export default LoggedUserNav;
