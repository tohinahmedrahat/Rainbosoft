import React from 'react';
import img from '../../assets/img/about-1.jpg';
import tohin from '../../assets/img/tohin.webp';
import teamShine from "../../assets/img/team-shine-1-1.png";
import welcomeVideo from "../../assets/video/welcome video.mp4"
import './About.css';
const About = () => {
    return (
        <div className=''>
            <div className='page-header'>
                <div className='about-banner'>
                    <h3 className='absolute top-40 text-white left-5 text-xl'><span>Home</span> / <span>About</span></h3>
                    <h1 className='absolute top-48 text-white left-5 text-3xl font-bold'>About Us</h1>
                </div>
            </div>
            <div className='bg-[#D1BEF7] md:pt-16'>
                <div className='md:flex md:w-11/12 mx-auto gap-x-16'>
                    <div className='relative inline-block w-full'>
                        <div className='about-team-img'>
                            <img className='relative' src={img} alt="team pic" />
                        </div>
                    </div>
                    <div className='w-full'>
                        <h4 className='text-center text-xl text-[#9c2ede] uppercase font-bold'>About Company</h4>
                        <h2 className='text-5xl'>The World’s Development Company</h2>
                        <p className='mt-3 text-gray-500'>Rainbosoft is a top web development company providing custom web solutions for businesses. With a team of experts in web development, design, and digital marketing, Rainbosoft creates websites that meet the unique needs and goals of each client. Using the latest technologies and design techniques, they build beautiful, functional, and user-friendly websites that perform well on all devices. Contact Rainbosoft today to take your online presence to the next level.</p>
                    </div>
                </div>
            </div>
            <div className='py-5 text-center bg-[#e9e3f5]'>
                <h2 className='text-[#8E2DE2] text-lg'>OUR TEAM MEMBERS</h2>
                <h3 className='text-[#2D1165] text-5xl mt-2 font-semibold'>Our Expert Person to Provide <br /> IT Solution Services</h3>
                <div className='mt-5 md:grid gap-x-5 grid-cols-4 md:w-11/12 mx-auto'>
                    <div className='bg-white rounded-md card-1'>
                        <div className='relative flex justify-center mx-auto team-img'>
                            <img src={tohin} alt="" />
                            <img className='absolute top-0 h-[272px] right-0' src={teamShine} alt="" />
                        </div>
                        <div className='text-left custom-title'>
                            <h3>Tohin</h3>
                            <h5>Developer</h5>
                        </div>
                    </div>
                    <div className='bg-white rounded-md card-1'>
                        <div className='relative flex justify-center mx-auto team-img'>
                            <img src={tohin} alt="" />
                            <img className='absolute top-0 h-[272px] right-0' src={teamShine} alt="" />
                        </div>
                        <div className='text-left custom-title'>
                            <h3>Tohin</h3>
                            <h5>Developer</h5>
                        </div>
                    </div>
                    <div className='bg-white rounded-md card-1'>
                        <div className='relative flex justify-center mx-auto team-img'>
                            <img src={tohin} alt="" />
                            <img className='absolute top-0 h-[272px] right-0' src={teamShine} alt="" />
                        </div>
                        <div className='text-left custom-title'>
                            <h3>Tohin</h3>
                            <h5>Developer</h5>
                        </div>
                    </div>
                    <div className='bg-white rounded-md card-1'>
                        <div className='relative flex justify-center mx-auto team-img'>
                            <img src={tohin} alt="" />
                            <img className='absolute top-0 h-[272px] right-0' src={teamShine} alt="" />
                        </div>
                        <div className='text-left custom-title'>
                            <h3>Tohin</h3>
                            <h5>Developer</h5>
                        </div>
                    </div>


                </div>
            </div>
            <div className=' mt-5'>
                <div className='md:flex gap-5 md:mx-5'>
                    <div className='md:w-[50%]'>
                        <h1 className='text-[#8E2DE2] text-2xl font-semibold my-3'>More About Us</h1>
                        <p className='text-[#433D50]'>Welcome to RainboSoft, a leading web development company that is dedicated to helping businesses succeed online. Our team of experts leverages cutting-edge technology and a customer-centric approach to deliver custom solutions that meet the unique needs of each of our clients.

                            At RainboSoft, we believe that a website is more than just a digital brochure; it's an integral part of your business that should drive results and support your goals. That's why we work closely with our clients to understand their unique needs and craft custom solutions that are both beautiful and functional.

                            Our wide range of web development services includes custom website design and development, e-commerce solutions, and web application development. Whether you're looking to launch a new website or revamp an existing one, our team is equipped to handle projects of all sizes and complexity levels.

                            We are proud to use the latest technology and best practices to deliver seamless user experiences that engage and convert visitors into customers. Our developers and designers work together to create websites that not only look great, but also deliver results and drive ROI.

                            At RainboSoft, we believe that great web development is just the beginning. That's why we are committed to providing ongoing support and maintenance to ensure that your website stays up-to-date and secure. Whether you need help with a technical issue or want to make updates to your site, our team is always here to help.

                            If you're looking for a partner that you can trust to deliver custom web development solutions that drive results, look no further than RainboSoft. Contact us today to learn more about how we can help you succeed online.</p>
                    </div>
                    <div className="fullscreen-bg md:w-[50%]">
                        <video autoPlay loop muted controls className="fullscreen-bg__video">
                            <source src={welcomeVideo} type='video/mp4' />
                        </video>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;