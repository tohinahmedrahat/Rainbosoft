import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HighPerformence from '../HighPerformence/HighPerformence';
import Management from '../Management/Management';
import Navbar from '../Navbar/Navbar';
import OurProject from '../Ourproject/Ourproject';
import OurTeam from '../OurTeam/OurTeam';
import Pricing from '../Priceing/Priceing';
import Testimonial from '../Testimonial/Testimonial';
import TransformSection from '../TransformSection/TransformSection';
import WhyChose from '../WhyChose/whyChose';

const Home = () => {
    return (
        <div className='home'>
            <Header></Header>
            <Navbar></Navbar>
            <Banner></Banner>
            <HighPerformence></HighPerformence>
            <TransformSection></TransformSection>
            <Pricing></Pricing>
            <Management></Management>
            <WhyChose></WhyChose>
            <About></About>
            <OurProject></OurProject>
            <Testimonial></Testimonial>
            {/* <OurTeam></OurTeam> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;