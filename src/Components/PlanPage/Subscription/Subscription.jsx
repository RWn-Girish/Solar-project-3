import { Col, Container, Row } from 'react-bootstrap';
import './Subscription.css'

const Subscription = ()=>{
    return(
        <>
      <Container>
        <Row>
            <Col xs={6}>
                <h2>
                    Sunrun Subscription Plan vs. solar panels ownership
                </h2>
                <p>Our solar lease subscription plan offers predictable, affordable rates for as little as $0 down in upfront costs, or you could purchase solar panels outright.</p>
            </Col>
        </Row>
      </Container>
        </>
    )
}


export default Subscription;