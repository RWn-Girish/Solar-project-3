import { Container, Row, Col, Image } from 'react-bootstrap';
import appvdo from '../../../assets/Images/appvdo.mp4'; 
import QRcode from '../../../assets/Images/scanner.png';
import appImg from '../../../assets/Images/Appimg.webp';
import { FaRegCheckCircle } from 'react-icons/fa';
const AppComp= () => {
  return (
    <div className=" app-promo py-5" style={{backgroundColor:"#FFFCF5"}}>
      <Container style={{width:'1320px'}}>
        <Row className="align-items-center">
          <Col md={6}>
            <h6 className="text-uppercase text-muted fw-bold fs-6">Sunrun App</h6>
            <h1 className="display-4 fw-semibold">Monitor your system,<br />anytime, anywhere</h1>
            <ul className="list-unstyled mt-4 mb-4">
              <li className="mb-3 fs-5 fw-medium"><FaRegCheckCircle className='me-3' /> Track your system's performance*</li>
              <li className="mb-3 fs-5 fw-medium"><FaRegCheckCircle className='me-3' /> Pay your bills with ease</li>
              <li className="mb-3 fs-5 fw-medium"><FaRegCheckCircle className='me-3' /> Live chat for support</li>
            </ul>
            <div className="d-flex align-items-center gap-3 pb-3">
              <Image src={QRcode} alt="QR Code" width={120} />
              <div>
                <a href="#" target="_blank" rel="noreferrer">
                  <Image src={appImg} alt="App Store" className="mb-2" width={150}  />
                </a>
              </div>
            </div>
            <p className="text-muted pt-5 fs-5" >*Your app experience may vary based on your system's equipment.</p>
          </Col>
          <Col md={6} className="text-center">
            <video  autoPlay muted loop playsInline style={{ width: '100%', borderRadius: '12px' }}>
            <source src={appvdo} type="video/mp4" />
            </video>
        </Col>
        </Row>
      </Container>
    </div>
  );
};
export default AppComp;
