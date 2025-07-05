import { Container, Row, Col } from "react-bootstrap";
import story from "../../../assets/Images/story.webp";
import "./Story.css";

const Story = () => {
  return (
    <div className="story-section py-5">
      <Container style={{ width: "1320px" }}>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="story-content pe-md-5">
              <p className="story-subtitle text-uppercase text-muted mb-2">Our Story</p>
              <h2 className="story-title mb-4">Lighting the way with clean energy</h2>
              <p className="story-text">
                Since our inception in 2007, we've been pioneering ways to harness and store power by removing financial
                barriers and democratizing access to locally-generated, renewable energy. Today, we're the #1 clean energy
                provider for solar as a subscription.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="story-img text-center text-md-end mt-4 mt-md-0">
              <img src={story} alt="Our Story" className="img-fluid rounded-4 shadow-sm" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Story;
