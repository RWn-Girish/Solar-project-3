import { Col, Container, Row } from "react-bootstrap";
import CustomButton from "../../Common Comp/ButtonComp";
import quote1 from "../../../assets/Images/quote-1.webp";
import quote2 from "../../../assets/Images/Quote-2.webp";
import "./Quote.css";

const Quote = () => {
  return (
    <>
    <div className="quote-section py-5 bg-light">
      <Container style={{width:'1320px'}}>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-5">
          <div>
            <h1 className="fw-bold">Flip the switch</h1>
            <p className="text-secondary fs-5">Save on bills, invest in your future</p>
          </div>
          <div>
            <CustomButton
              text="Get a quote today"
              variant="light"
              className="fs-6 fw-medium"
              style={{
                color: "#1F2647",
                backgroundColor: "transparent",
                border: "1px solid #1F2647",
              }}
            />
          </div>
        </div>
        <Row className="g-4">
          <Col lg={6} md={12}>
            <div className="quote-info  rounded overflow-hidden h-100 p-3">
              <img src={quote1} alt="Traditional Power" className=" rounded mb-3"  />
              <h5 className=" fs-4 my-3">Reduce dependence on traditional power</h5>
              <p className="text-secondary">
                Grid power is expensive and unreliable – and getting more so, due to aging infrastructure and reliance on nonrenewable resources.
              </p>
            </div>
          </Col>
          <Col lg={6} md={12}>
            <div className="quote-info  rounded overflow-hidden  h-100 p-3">
              <img src={quote2} alt="Modern Power" className=" rounded mb-3" />
              <h5 className=" fs-4 my-3">Step into modern power</h5>
              <p className="text-secondary ">
                Create solar power right at home, with predictable pricing and the ability to store and control that energy so it's there when you 
                need it most.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <hr/>
    </>
  );
};

export default Quote;
