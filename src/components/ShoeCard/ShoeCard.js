import "./ShoeCard.css";
import { Col, Card } from "react-bootstrap";

function ShoeCard({ url, resell, model, price }) {
  return (
    <Col>
      <Card className="card-main">
        {/* <div className="resell d-flex">{resell}</div>
        <div className="favorite">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-suit-heart-fill"
            viewBox="0 0 16 16"
          >
            <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
          </svg>
        </div> */}
        <Card.Img variant="top" src={url} />

        <Card.Body>
          <Card.Title>{model}</Card.Title>
          <Card.Text>{price} EUR</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ShoeCard;
