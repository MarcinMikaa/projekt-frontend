import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function AdminNav() {
  return (
    <Nav>
      <Nav.Link as={Link} to="/add">
        <p>Add page</p>
      </Nav.Link>
    </Nav>
  );
}

export default AdminNav;
