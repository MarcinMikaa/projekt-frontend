import { Nav } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import AdminNav from "../AdminNav/AdminNav";
import axios from "axios";
import { useEffect } from "react";
import { backendUrl } from "../../config";

function LoggedUserNav() {
  const history = useHistory();

  useEffect(() => {
    axios({
      method: "GET",
      withCredentials: true,
      url: `${backendUrl}/user`,
    }).then((res) => {
      localStorage.setItem("role", res.data.isAdmin);
      localStorage.setItem("username", res.data.username);
    });
  });

  const logout = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: `${backendUrl}/logout`,
    }).then((res) => {
      localStorage.clear();
      history.push("/");
      window.location.reload();
    });
  };

  const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;

  return (
    <Nav>
      {user.isAdmin && <AdminNav />}
      <Nav.Link as={Link} to="/favorites">
        <p>Favorites</p>
      </Nav.Link>
      <Nav.Link onClick={logout}>
        <p>Logout</p>
      </Nav.Link>
    </Nav>
  );
}

export default LoggedUserNav;
