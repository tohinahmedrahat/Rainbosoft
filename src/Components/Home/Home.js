import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import OurProject from '../Ourproject/Ourproject';
import OurTeam from '../OurTeam/OurTeam';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <OurProject></OurProject>
            <Testimonial></Testimonial>
            <OurTeam></OurTeam>
            <Footer></Footer>
        </div>
    );
};

export default Home;