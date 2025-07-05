
import {  Button } from 'react-bootstrap';
import './plans.css';
import planImg from '../../../assets/Images/plans.webp'; 
import { FaSun } from 'react-icons/fa';
import CustomButton from '../../Common Comp/ButtonComp';

const Plans = () => {
  return (
     <div
      className="overlay-plans"
      style={{ backgroundImage: `url(${planImg})` }}
    >
      <div className="content-box text-white mt-5" >
        <p className="text-label">Plans & Pricing</p>
        <h1 className="main-heading display-3 fw-semibold" style={{maxWidth:'50%'}}>Sunrun Subscription Plan</h1>
        <p className="description fw-medium"style={{maxWidth:'53%'}}>
          From installation to maintenance, enjoy an effortless and affordable solar experience with the Sunrun Subscription Plan.
        </p>
        <ul className="features fw-medium list-unstyled fs-5 "style={{maxWidth:'60%'}}>
          <li className='mb-2'><FaSun className='me-2' /> Best-in-class solar panels and battery storage</li>
          <li className='mb-2'><FaSun className='me-2' /> Industry-leading equipment guarantee</li>
          <li className='mb-2'><FaSun className='me-2' /> Predictable monthly payments with locked-in rates</li>
        </ul>
        <CustomButton text="Compare plans"  className="mt-3" />
      </div>
    </div>
  );
};

export default Plans;




