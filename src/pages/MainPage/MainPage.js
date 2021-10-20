import "./MainPage.css";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ShoeCard from "../../components/ShoeCard/ShoeCard";

function MainPage() {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/")
      .then((response) => response.json())
      .then((data) => {
        setShoes(data);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <div className="main-page">
      <h1>INCOMING DROPS</h1>

      <Container className="main-page-container">
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 6 }).map((_, idx) => (
            <ShoeCard />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default MainPage;
