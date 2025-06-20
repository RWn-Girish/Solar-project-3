import Banner from '../../Common Comp/Banner'
import homeBanner from '../../../assets/Images/homebanner.webp';

function HBanner() {
  return (
    <Banner
      bgImage={homeBanner}
      heading="Power Life on Your Terms"
      subheading="Get ahead of your energy needs with cutting-edge solar and home battery."
      buttonText="Get a quote"
    />
  );
}
export default HBanner