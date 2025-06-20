import React from 'react';
import Banner from '../../Common Comp/Banner';
import plansBanner from '../../../assets/Images/Plan-img-1.webp';

function planBanner() {
  return (
    <Banner
      bgImage={plansBanner}
      heading="Lots of Plans. One Trusted Partner."
      subheading="The Sunrun Solar Subscription is the best selling subscription in America. Find the best plan for your home."
      buttonText="View Plans"
    />
  );
}
export default planBanner
