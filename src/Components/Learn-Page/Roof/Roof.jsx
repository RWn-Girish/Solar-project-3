import { Container, Row, Col } from "react-bootstrap";
import roof from "../../../assets/Images/roof.webp";
import "./Roof.css";
import CustomButton from "../../Common Comp/ButtonComp";

const Roof = () => {
  return (
    <div className="roof-section py-5">
      <Container style={{width: '1320px' }}>
        <Row className="align-items-start">
          <Col md={6}>
            <div className="roof-img">
  <img src={roof} alt="Aerial rooftops" className="roof-fixed-img" />
</div>

          </Col>
          <Col md={6}>
            <h2 className="roof-heading display-3 fw-medium">Real change from the rooftops</h2>
            <p className="roof-text">
              When you power your home with solar panels and backup storage, you're not just cutting costs—you're cutting down on global 
              carbon emissions. Get reliable energy while making a positive impact on the planet.
            </p>
            <CustomButton text="See our impact" className="fs-6 fw-medium mt-3 btn-outline-dark" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Roof;

