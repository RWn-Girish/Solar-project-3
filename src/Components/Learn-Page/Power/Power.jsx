import { Col, Container, Row } from "react-bootstrap";
import power1 from '../../../assets/Images/power-1.webp';
import power2 from '../../../assets/Images/power-2.webp';
import power3 from '../../../assets/Images/power-3.webp';
import power4 from '../../../assets/Images/power-4.webp';
import './Power.css';
const powerItems = [
  {
    img: power1,
    title: "Solar panels",
    desc: "Create your own energy right at home with the industry's top panels.",
  },
  {
    img: power2,
    title: "Battery storage",
    desc: "Offset peak rates, power through outages, or add storage with our battery options.",
  },
  {
    img: power3,
    title: "Home EV charging",
    desc: "Top of the line EV chargers to power your adventures beyond the home.",
  },
  {
    img: power4,
    title: "Power management",
    desc: "Real-time energy insights and total control of your energy anytime, from anywhere.",
  },
];

const Power = () => {
  return (
    <div className="power my-5">
      <Container style={{width: '1320px' }}>
        <h1 className=" display-4 fw-bold my-5">
          Power your home with future-ready solutions
        </h1>
        <Row className="g-4">
          {powerItems.map((item, index) => (
            <Col xs={12} sm={6} md={3} key={index}>
              <div className="power-content h-100 ">
                <img
                  src={item.img}
                  alt={item.title}
                  className="img-fluid rounded power-img mb-3"
                  width={'250px'}
                />
                <h5 className="my-3 fw-semibold">{item.title}</h5>
                <p className="text-muted">{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default Power;
