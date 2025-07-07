import { Accordion, Col, Container, Row } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa";
import "./FAQ.css";
import CustomButton from "../ButtonComp";

const FAQSection = ({ title = "FAQs", faqs = [], theme = "dark", showCTA = false }) => {
  const isDark = theme === "dark";

  return (
    <div className={`faq-section py-5 ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
      <Container fluid="lg">
        <h1 className="faq-title mb-4 text-center">{title}</h1>
        <Row className="gx-4 gy-4">
          {faqs.map((faq, index) => (
            <Col xs={12} lg={6} key={index}>
              <Accordion flush>
                <Accordion.Item eventKey="0" className="faq-accordion-item mb-3">
                  <Accordion.Header className="fs-5">
                    <div
                      className="fa-icon-wrapper me-2"
                      style={{
                        backgroundColor: isDark ? "white" : "black",
                        borderColor: isDark ? "white" : "black",
                      }}
                    >
                      <FaChevronRight
                        className="fa-icon"
                        style={{ color: isDark ? "black" : "white" }}
                      />
                    </div>
                    {faq.question}
                  </Accordion.Header>
                  <Accordion.Body className={isDark ? "text-white" : "text-black"}>
                    {Array.isArray(faq.answer) ? (
                      faq.answer.map((para, i) => <p key={i}>{para}</p>)
                    ) : (
                      <p>{faq.answer}</p>
                    )}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          ))}
        </Row>

        {showCTA && (
          <div className="d-flex justify-content-center align-items-center mt-4">
            <span className={`me-3 ${isDark ? "text-secondary" : "text-muted"} fs-6 fw-medium`}>
              Have a different question?
            </span>
            <CustomButton text="Browse all FAQs" className="fs-6 fw-medium" />
          </div>
        )}
      </Container>
    </div>
  );
};

export default FAQSection;


