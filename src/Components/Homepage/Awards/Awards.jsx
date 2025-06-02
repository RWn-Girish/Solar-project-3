import { Col, Container, Row } from "react-bootstrap";
import award1 from '../../../assets/Images/award-1.webp';
import award2 from '../../../assets/Images/award-2.webp';
import award3 from '../../../assets/Images/award-3.webp';
import award4 from '../../../assets/Images/award-4.webp';

const Awards = () => {
    return (
        <div className="awards">
            <Container style={{width:'1320px'}}>
                <div className="award-head text-start mb-4">
                    <p className="text-uppercase text-secondary">Awards & Recognition</p>
                    <h1 className="display-5 fw-semibold">Trusted by the Best</h1>
                </div>
                <Row className="award-content text-start">
                    <Col md={3} sm={6} xs={12} className="mb-4">
                        <img src={award1} alt="Award 1" className="img-fluid mb-4" width={'250px'} height={'200px'} style={{borderRadius:'12px'}}/>
                        <h4 style={{maxWidth:'80%'}}>Consumer Affairs Buyer's Choice Award</h4>
                    </Col>
                    <Col md={3} sm={6} xs={12} className="mb-4">
                        <img src={award2} alt="Award 2" className="img-fluid mb-4" width={'250px'} height={'200px'} style={{borderRadius:'12px'}}/>
                        <h4>BBB A+ rated</h4>
                    </Col>
                    <Col md={3} sm={6} xs={12} className="mb-4">
                        <img src={award3} alt="Award 3" className="img-fluid mb-4"width={'250px'} height={'200px'} style={{borderRadius:'12px'}} />
                        <h4>Best Company</h4>
                    </Col>
                    <Col md={3} sm={6} xs={12} className="mb-4">
                        <img src={award4} alt="Award 4" className="img-fluid mb-4" width={'250px'} height={'200px'} style={{borderRadius:'12px'}}/>
                        <h4>Good Housekeeping</h4>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Awards;
