import "./FavoritePage.css";
import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import ShoeCard from "../../components/ShoeCard/ShoeCard";
import axios from "axios";

function FavoritePage() {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/shoes/favorites",
    }).then((res) => {
      setShoes(res.data);
    });
  }, []);
  return (
    <div className="favorite-page">
      <Container className="page-container">
        <h1>Favorite Shoes</h1>
        <Row xs={1} md={2} lg={3} className="g-3">
          {shoes.map((shoes) => (
            <div key={shoes._id}>
              <ShoeCard
                key={shoes._id}
                id={shoes._id}
                url={shoes.url}
                resell={shoes.resell}
                model={shoes.model}
                price={shoes.price}
              />
            </div>
          ))}
          )
        </Row>
      </Container>
    </div>
  );
}

export default FavoritePage;
