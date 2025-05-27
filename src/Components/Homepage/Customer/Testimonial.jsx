import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight,  FaStar } from 'react-icons/fa';
import './TestimonialCarousel.css'; 

const testimonials = [
  {
    name: "Ron",
    location: "San Diego, CA",
    rating: 5,
    review:"Everything about this company was first class from design to installation including the Tesla reserve battery pack.",
  },
  {
    name: "Eugenia",
    location: "Sacramento, CA",
    rating: 5,
    review:"From start to finish our process has been super smooth. Love the sleek new system and battery backup for when PGE elects to turn our power off.",
  },
  {
    name: "Michael",
    location: "San Diego, CA",
    rating: 5,
    review:
      "They did a nice job and it was clean. They put it together quickly and it was better than expected. It's all working well and it worked during an outage.",
  }

];


const StarRating = () => (
  <div className="star-rating d-flex justify-content-center gap-1 mb-3">
    {[...Array(5)].map((_, i) => (
      <FaStar key={i} color="#4C5C74" size={32} />
    ))}
  </div>
);


const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="testimonial-bg">
      <Container className="text-center py-5" style={{width:'1320px'}}>
       <div className="test-header text-start">
        <h2 className="display-4 fw-medium my-5" style={{maxWidth:'40%'}}>
              Easy Process. Better Technology. Happy Customers.
            </h2>
       </div>
         

        <div className="testimonial-box">
          <StarRating count={testimonials[index].rating} />
          <p className="location">{testimonials[index].name}, {testimonials[index].location}</p>
          <h3 className="review display-6 fw-normal">"{testimonials[index].review}"</h3>
        </div>

      
        <div className="carousel-controls mt-4 d-flex justify-content-center align-items-center gap-4">
          <button onClick={handlePrev} className="nav-btn">
            <FaArrowLeft/>
          </button>

          <div className="dots">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`dot ${i === index ? 'active' : ''}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>

          <button onClick={handleNext} className="nav-btn">
            <FaArrowRight />
          </button>
        </div>
      </Container>
    </div>
  );
};

export default TestimonialCarousel;


