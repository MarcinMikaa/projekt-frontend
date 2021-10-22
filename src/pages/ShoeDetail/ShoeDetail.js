import "./ShoeDetail.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

function ShoeDetail() {
  const { id } = useParams();
  const [shoeDetail, setShoeDetail] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/shoe/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setShoeDetail(data);
      })
      .catch((e) => console.error(e));
  }, [id]);

  return (
    <div className="shoe-detail">
      <Card>
        <Container>
          <Row xs={1} md={2}>
            <Col>
              <Card.Img variant="top" src={shoeDetail.url} />
            </Col>
            <Col>
              <Card.Body>
                <Card.Title>{shoeDetail.model}</Card.Title>
                <Card.Text>{shoeDetail.data}</Card.Text>
                <Card.Text>{shoeDetail.price} EUR</Card.Text>
                <Button href="https://www.nike.com/pl/launch" target="_blank" className="shop-button">
                  Shop
                </Button>
              </Card.Body>
            </Col>
          </Row>
        </Container>
      </Card>
    </div>
  );
}

export default ShoeDetail;
