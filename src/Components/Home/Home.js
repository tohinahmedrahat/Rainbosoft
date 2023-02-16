import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import HighPerformence from '../HighPerformence/HighPerformence';
import Management from '../Management/Management';
import OurProject from '../Ourproject/Ourproject';
import OurTeam from '../OurTeam/OurTeam';
import Pricing from '../Priceing/Priceing';
import Technology from '../Technology/Technology';
import Testimonial from '../Testimonial/Testimonial';
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

        
            <OurProject></OurProject>
            <Testimonial></Testimonial>
            {/* <OurTeam></OurTeam> *
            {/* <About></About> */}
            {/* <OurProject></OurProject> */}
            {/* <Testimonial></Testimonial> */}
            <Technology></Technology>
            <OurTeam></OurTeam>
            <Footer></Footer>
        </div>
    );
};

export default Home;