import "./ShoeCard.css";
import { Col, Card } from "react-bootstrap";
import yeezy from "../../images/yeezy-cloud-white.png";

function ShoeCard() {
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={yeezy} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural lead-in to additional content. This content is
            a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ShoeCard;
