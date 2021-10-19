import "./MainPage.css";
import { Container, Row, Col } from "react-bootstrap";
import yeezy from "../../images/yeezy-cloud-white.png";
import jordan from "../../images/jordan-bred.jpg";
import airforce from "../../images/air-force-one-offwhite.jpg";

function MainPage() {
  return (
    <div className="main-page">
      <h1>INCOMING DROPS</h1>

      <Container>
        <Row>
          <Col xs={{ order: 4 }}>
            <img src={yeezy} alt="logo" width="200" />
          </Col>
          <Col xs={{ order: 4 }}>
            <img src={jordan} alt="logo" height="200" />
          </Col>
          <Col xs={{ order: 4 }}>
            <img src={airforce} alt="logo" height="200" />
          </Col>
        </Row>
        <Row>
          <Col xs={{ order: 4 }}>
            <img src={yeezy} alt="logo" width="200" />
          </Col>
          <Col xs={{ order: 4 }}>
            <img src={jordan} alt="logo" height="200" />
          </Col>
          <Col xs={{ order: 4 }}>
            <img src={airforce} alt="logo" height="200" />
          </Col>
        </Row>
        <Row>
          <Col xs={{ order: 4 }}>
            <img src={yeezy} alt="logo" width="200" />
          </Col>
          <Col xs={{ order: 4 }}>
            <img src={jordan} alt="logo" height="200" />
          </Col>
          <Col xs={{ order: 4 }}>
            <img src={airforce} alt="logo" height="200" />
          </Col>
        </Row>
        <Row>
          <Col xs={{ order: 4 }}>
            <img src={yeezy} alt="logo" width="200" />
          </Col>
          <Col xs={{ order: 4 }}>
            <img src={jordan} alt="logo" height="200" />
          </Col>
          <Col xs={{ order: 4 }}>
            <img src={airforce} alt="logo" height="200" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MainPage;
