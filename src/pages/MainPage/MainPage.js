import "./MainPage.css";
import { Container, Row } from "react-bootstrap";
import ShoeCard from "../../components/ShoeCard/ShoeCard";

function MainPage() {
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
