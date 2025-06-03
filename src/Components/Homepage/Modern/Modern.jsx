import React, { useRef } from "react";
import { Container, Button } from "react-bootstrap";
import battery from "../../../assets/Images/battery.webp";
import woman from "../../../assets/Images/woman.webp";
import man from "../../../assets/Images/man.webp";
import solar from "../../../assets/Images/solar.webp";
import car from "../../../assets/Images/car.webp";
import "./Modern.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const cards = [
  {
    image: battery,
    category: "PRODUCTS",
    title: "State-of-the-art solar and battery solutions",
    link: "#",
  },
  {
    image: woman,
    category: "LEARN",
    title: "NEM 3.0: What It Is and How It Affects California Home Solar",
    link: "#",
  },
  {
    image: man,
    category: "PLANS & PRICING",
    title: "Go solar with confidence",
    link: "#",
  },
  {
    image: solar,
    category: "COMPANY",
    title: "Our story: Lighting the way with solar energy",
    link: "#",
  },
  {
    image: car,
    category: "LEARN",
    title: "How much does it cost to install an EV charger at home?",
    link: "#",
  },
];
const ModernLiving = () => {
  const scrollRef = useRef(null);

  const scrollNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const scrollPrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  return (
    <div className="modern-living-section py-5">
      <Container className="pe-0 me-0">
        <h1 className="display-4 fw-medium mb-5 ms-5 " style={{maxWidth:"40%",}}>
          Power modern living with Sunrun
        </h1>
        <div className="position-relative">
          <div className="card-scroll-outer-wrapper">
            <div ref={scrollRef} className="card-scroll-wrapper">
              {cards.map((card, index) => (
                <div className="card-item text-start mx-4 ms-4 mt-4" key={index}>
                  <img
                    src={card.image}
                    alt={card.title}
                    className="img-fluid rounded mb-4"
                    style={{ height: "260px", width: "260px", objectFit: "cover" }}
                  />
                  <small className="text-uppercase fw-bold text-secondary">
                    {card.category}
                  </small>
                  <p className="card-title fw-semibold mt-1 fs-5" >
                    <a href={card.link} className="text-decoration-underline"style={{color:"#49517D"}}>
                      {card.title}
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className=" d-flex  justify-content-center gap-5 mt-4">
            <Button variant="outline-secondary" className="scroll-buttons" onClick={scrollPrev}>
              <FaArrowLeft />
            </Button>
            <Button variant="outline-secondary"className="scroll-buttons"  onClick={scrollNext}>
              <FaArrowRight />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ModernLiving;
