import "./ShoeCard.css";
import { Col, Card } from "react-bootstrap";

function ShoeCard({ url, brand, model, price }) {
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Card.Title>{model}</Card.Title>
          <Card.Text>{price} USD</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ShoeCard;
