import "./MainPage.css";
import { useEffect, useState } from "react";
import { Container, Row, Image, Button } from "react-bootstrap";
import ShoeCard from "../../components/ShoeCard/ShoeCard";
import baner from "../../images/baner.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

function MainPage() {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/shoes",
    }).then((res) => {
      setShoes(res.data);
      console.log(res.data);
    });
  }, []);

  console.log(shoes);

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

      <Container className="page-container">
        <h1>INCOMING DROPS</h1>
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

export default MainPage;
