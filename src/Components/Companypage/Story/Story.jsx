import { Container, Row, Col } from "react-bootstrap";
import story from "../../../assets/Images/story.webp";
import "./Story.css";

const Story = () => {
  return (
    <div className="story-section py-5">
      <Container fluid="lg">
        <Row className="align-items-center gx-5">
          {/* Text Content */}
          <Col xs={12} md={6} className="mb-4 mb-md-0">
            <div className="story-content pe-md-4 text-center text-md-start">
              <p className="story-subtitle text-uppercase text-muted mb-2">Our Story</p>
              <h2 className="story-title mb-4">Lighting the way with clean energy</h2>
              <p className="story-text">
                Since our inception in 2007, we've been pioneering ways to harness and store power by removing financial
                barriers and democratizing access to locally-generated, renewable energy. Today, we're the #1 clean energy
                provider for solar as a subscription.
              </p>
            </div>
          </Col>

          {/* Image */}
          <Col xs={12} md={6}>
            <div className="story-img text-center text-md-end">
              <img
                src={story}
                alt="Our Story"
                className="img-fluid rounded-4 shadow-sm"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Story;

