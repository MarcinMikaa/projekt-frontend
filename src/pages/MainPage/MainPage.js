import "./MainPage.css";
import { useEffect, useState } from "react";
import { Container, Row, Image, Button } from "react-bootstrap";
import ShoeCard from "../../components/ShoeCard/ShoeCard";
import baner from "../../images/baner.jpg";
import { Link } from "react-router-dom";

function MainPage() {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/shoes")
      .then((response) => response.json())
      .then((data) => {
        setShoes(data);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <div className="main-page">
      <div className="main-page-baner position-relative">
        <Image src={baner} alt="baner-image" fluid />
        <div className="baner-mask">
          <div className="baner-box">
            <h1>JOIN TO US!</h1>
            <Link as={Link} to="/register">
              <Button>Register</Button>
            </Link>
          </div>
        </div>
      </div>

      <Container className="main-page-container">
        <h1>INCOMING DROPS</h1>
        <Row xs={1} md={2} lg={3} className="g-3">
          {shoes.map((shoes) => (
            <Link key={shoes._id} as={Link} to={`/shoe/${shoes._id}`}>
              <div key={shoes._id}>
                <ShoeCard
                  key={shoes._id}
                  url={shoes.url}
                  resell={shoes.resell}
                  model={shoes.model}
                  price={shoes.price}
                />
              </div>
            </Link>
          ))}
          )
        </Row>
      </Container>
    </div>
  );
}

export default MainPage;
