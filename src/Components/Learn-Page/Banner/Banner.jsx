import Banner from '../../Common Comp/Banner'
import learnBanner from '../../../assets/Images/Learnbanner.webp';

const LearnBanner =() =>{
  return (
    <Banner
      bgImage={learnBanner}
      heading="Modern Power for Modern Life " 
      buttonText="Get a quote"
    />
  );
}
export default LearnBanner;