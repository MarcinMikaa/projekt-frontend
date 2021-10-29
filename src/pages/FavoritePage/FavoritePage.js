import "./FavoritePage.css";
import { useState, useEffect, useCallback } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import rocket from "../../images/rocket.svg";
import { backendUrl } from "../../config";

function FavoritePage() {
  const [shoeDetail, setShoeDetail] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      withCredentials: true,
      url: `${backendUrl}/shoes/favorites`,
    }).then((res) => {
      setShoeDetail(res.data);
    });
  }, []);

  const formatDate = useCallback((shoe) => {
    try {
      return new Intl.DateTimeFormat("pl-PL").format(new Date(shoe.date).getTime());
    } catch (e) {
      return shoe?.date;
    }
  }, []);

  return (
    <div className="favorite-page">
      <Container className="page-container">
        {shoeDetail === [] ? <h1>qwe</h1> : <h1>Favorite Shoes</h1>}

        {shoeDetail.map((shoeDetail) => (
          <Container className="shoe-container" key={shoeDetail._id}>
            <Row xs={1} md={2}>
              <Col>
                <Card.Img variant="top" src={shoeDetail.url} alt={shoeDetail.model} />
              </Col>
              <Col>
                <Card.Body>
                  <Card.Title>{shoeDetail.model}</Card.Title>
                  <Card.Text>Drop date: {formatDate(shoeDetail)}</Card.Text>
                  <Card.Text>{shoeDetail.price} EUR</Card.Text>
                  <Card.Text>
                    {(() => {
                      if (shoeDetail.resell === 1) {
                        return (
                          <>
                            <div className="rocket-img">
                              <img src={rocket} alt="rocket"></img>
                            </div>
                            <span>Resell value is high</span>
                          </>
                        );
                      } else if (shoeDetail.resell === 2) {
                        return (
                          <>
                            <div className="resell">
                              <div className="rocket-img">
                                <img src={rocket} alt="rocket"></img>
                              </div>
                              <div className="rocket-img">
                                <img src={rocket} alt="rocket"></img>
                              </div>
                            </div>
                            <span>Resell value is very high</span>
                          </>
                        );
                      }
                    })()}
                  </Card.Text>
                  <Button href="https://www.nike.com/pl/launch" target="_blank" className="shop-button">
                    Go to shop
                  </Button>
                </Card.Body>
              </Col>
            </Row>
          </Container>
        ))}
      </Container>
    </div>
  );
}

export default FavoritePage;
