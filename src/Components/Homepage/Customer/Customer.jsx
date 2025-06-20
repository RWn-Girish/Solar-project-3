import { Col, Container, Row } from "react-bootstrap";
import customer from '../../../assets/Images/Videos/customer.mp4'
import CustomButton from "../../Common Comp/ButtonComp";
const Customer=()=>{
    return(
        <>
        <div className="customer py-5 bg-black">
            <Container style={{width:'1320px'}}>
            <Row className="align-items-center">
            <Col md={6}>
            <h6 className="text-uppercase  fw-bold-fs-6 text-secondary">Customer Stories</h6>
            <h2 className="text-white display-3 fw-semibold">Drew's gone solar</h2>
            <p className="text-secondary fs-5 fw-semibold" style={{maxWidth:'80%'}}>Join Drew Scott to learn why he went solar and why it’s one of 
                the biggest home improvements he’s ever made.</p>
            <CustomButton text="Watch now" className="fs-6 fw-medium" />
            </Col>
            <Col md={6}>
                <video  autoPlay muted loop playsInline style={{ width: '100%', borderRadius: '12px' }}>
                    <source src={customer} type="video/mp4" />
                </video>
            </Col>
            </Row>
            </Container>
        </div>
        </>
    )
}
export default Customer;