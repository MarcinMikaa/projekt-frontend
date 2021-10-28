import "./ShoeCard.css";
import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

function ShoeCard({ id, url, resell, model, price }) {
  const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;

  const favorite = () => {
    axios({
      method: "PATCH",
      withCredentials: true,
      url: `http://localhost:4000/shoes/${id}/favorite`,
    }).then((res) => {
      console.log(res);
    });
    console.log(id);
    console.log(user._id);
  };

  return (
    <Col>
      <Card className="card-main">
        <Button onClick={favorite}>+</Button>
        <Link key={id} as={Link} to={`/shoe/${id}`} className="decoration">
          <Card.Img variant="top" src={url} />

          <Card.Body>
            <Card.Title>{model}</Card.Title>
            <Card.Text>{price} EUR</Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </Col>
  );
}

export default ShoeCard;
