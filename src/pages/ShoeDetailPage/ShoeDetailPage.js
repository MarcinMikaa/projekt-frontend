import "./ShoeDetailPage.css";
import { Card, Container, Row, Col, Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

function ShoeDetailPage() {
  const { id } = useParams();
  const [shoeDetail, setShoeDetail] = useState([]);
  const [updateBrand, setUpdateBrand] = useState("");
  const [updateModel, setUpdateModel] = useState("");
  const [updateDate, setUpdateDate] = useState("");
  const [updatePrice, setUpdatePrice] = useState("");
  const [updateResell, setUpdateResell] = useState("");
  const [updateUrl, setUpdateUrl] = useState("");

  useEffect(() => {
    fetch(`http://localhost:4000/shoes/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setShoeDetail(data);
      })
      .catch((e) => console.error(e));
  }, [id]);

  const update = () => {
    axios({
      method: "PUT",
      data: {
        brand: updateBrand,
        model: updateModel,
        date: updateDate,
        price: updatePrice,
        resell: updateResell,
        url: updateUrl,
      },
      withCredentials: true,
      url: `http://localhost:4000/shoes/${id}`,
    }).then((res) => console.log(res));
  };

  const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;

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
                <Card.Text>{shoeDetail.date}</Card.Text>
                <Card.Text>{shoeDetail.price} EUR</Card.Text>
                <Card.Text>
                  {(() => {
                    if (shoeDetail.resell === 2) {
                      return <>Wartość odsprzedaży jest bardzo wysoka.</>;
                    } else if (shoeDetail.resell === 1) {
                      return <>Wartość odsprzedaży jest wysoka.</>;
                    }
                  })()}
                </Card.Text>
                <Button href="https://www.nike.com/pl/launch" target="_blank" className="shop-button">
                  Shop
                </Button>
              </Card.Body>
            </Col>
          </Row>
        </Container>
        {user.isAdmin && (
          <div className="form-box">
            <h1>Update shoe</h1>
            <Form>
              <Form.Group className="mb-3" controlId="formGroupUsername">
                <Form.Control type="text" value="qwe" onChange={(e) => setUpdateBrand(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control type="text" placeholder="Model" onChange={(e) => setUpdateModel(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Control
                  type="date"
                  placeholder="Date"
                  onChange={(e) => setUpdateDate(new Date(e.target.value))}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Control type="number" placeholder="Price" onChange={(e) => setUpdatePrice(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Control type="text" placeholder="Resell" onChange={(e) => setUpdateResell(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Control type="text" placeholder="Url" onChange={(e) => setUpdateUrl(e.target.value)} />
              </Form.Group>
              <Button onClick={update}>Update</Button>
            </Form>
          </div>
        )}
      </Card>
    </div>
  );
}

export default ShoeDetailPage;
