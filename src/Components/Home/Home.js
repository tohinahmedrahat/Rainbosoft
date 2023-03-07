import React from 'react';
import Banner from '../Banner/Banner';
import HighPerformence from '../HighPerformence/HighPerformence';
import Management from '../Management/Management';
import OurTeam from '../OurTeam/OurTeam';
import Pricing from '../Priceing/Priceing';
import Technology from '../Technology/Technology';
import TransformSection from '../TransformSection/TransformSection';
import WhyChose from '../WhyChose/whyChose';

const Home = () => {
    return (
        <div className='home'> 
            <Banner></Banner>
            <HighPerformence></HighPerformence>
            <TransformSection></TransformSection>
            <Pricing></Pricing>
            <Management></Management>
            <WhyChose></WhyChose>
            <Technology></Technology>
            <OurTeam></OurTeam>
        </div>
    );
};

export default Home;