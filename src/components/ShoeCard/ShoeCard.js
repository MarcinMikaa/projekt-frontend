import "./ShoeCard.css";
import { Col, Card } from "react-bootstrap";

function ShoeCard({ url, brand, model }) {
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Card.Title>{brand}</Card.Title>
          <Card.Text>{model}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ShoeCard;
