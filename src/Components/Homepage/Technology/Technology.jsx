import { Button, Col, Container, Row } from "react-bootstrap";
import Techvdo from '../../../assets/Images/Videos/tech.mp4';
import Techimg from '../../../assets/Images/tech-img.webp';
import CustomButton from "../../Common Comp/ButtonComp";


const Technology = () => {
    return (
        <div className="tech py-5">
            <Container className="text-center" style={{ maxWidth: '1320px' }}>
                <div className="tech-head mb-5">
                    <h1 className="display-1 mx-auto" style={{ maxWidth: '80%' }}>
                        Bringing you breakthrough technology
                    </h1>
                </div>

                <Row className="d-flex align-items-center mb-5">
                    <Col md={6}>
                        <div className="tech-vdo">
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                style={{ width: '80%', borderRadius: '12px' }}
                            >
                                <source src={Techvdo} type="video/mp4" />
                            </video>
                        </div>
                    </Col>
                    <Col md={6} className="text-start">
                        <div className="tech-content mb-3">
                            <h1 className="display-4 fw-medium" style={{maxWidth:'80%'}}>Introducing the Tesla Powerwall 3</h1>
                            <p className="fs-6 text-secondary" style={{maxWidth:'50%'}}>Stay powered through outages and peak hours with seamless  
                                solar integration.</p></div>
                            <CustomButton text="Learn More" variant="light"className="fs-6 fw-medium"style={{ color: '#1F2647',
                                 backgroundColor: 'transparent', border: '1px solid #1F2647' }} />
                    </Col>
                </Row>
               <Row className=" d-flex align-items-center ">
                    <Col md={6} className="text-start ">
                        <div className="tech-content mb-3 ms-5 ps-5">
                            <h1 className="display-4 fw-medium " style={{maxWidth:'80%'}}>Vehicle-to-home charging with Ford</h1>
                            <p className="">
                                We partnered with Ford to create the Home Integration System, a
                                first-of-its-kind technology that lets you power your life on and off the road.
                            </p>                    
                    <CustomButton text="Learn More" variant="light"className="fs-6 fw-medium"style={{ color: '#1F2647', 
                             backgroundColor: 'transparent',  border: '1px solid #1F2647' }} />
                     </div>
                    </Col>
                    <Col md={6}>
                        <div className="tech-img">
                            <img src={Techimg} alt="Technology"style={{ width: '80%', height: 'auto', borderRadius: '12px' }}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Technology;
