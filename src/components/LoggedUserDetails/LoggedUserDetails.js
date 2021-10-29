import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import AdminDetails from "../../components/AdminDetails/AdminDetails";
import rocket from "../../images/rocket.svg";
import { backendUrl } from "../../config";

function LoggedUserDetails() {
  const { id } = useParams();
  const [shoeDetail, setShoeDetail] = useState([]);

  const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;

  useEffect(() => {
    fetch(`${backendUrl}/shoes/${id}`)
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
                <Card.Text>Drop date: {shoeDetail.date}</Card.Text>
                <Card.Text>{shoeDetail.price} EUR</Card.Text>
                <Card.Text>
                  {(() => {
                    if (shoeDetail.resell === 2) {
                      return (
                        <>
                          <div className="rocket-img">
                            <img src={rocket} alt="rocket"></img>
                          </div>
                          <span>Resell value is high</span>
                        </>
                      );
                    } else if (shoeDetail.resell === 1) {
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
                <Button href="https://www.nike.com/pl/launch?s=upcoming" target="_blank" className="shop-button">
                  Go to shop
                </Button>
              </Card.Body>
            </Col>
          </Row>
        </Container>
        {user.isAdmin && <AdminDetails />}
      </Card>
    </div>
  );
}

export default LoggedUserDetails;
