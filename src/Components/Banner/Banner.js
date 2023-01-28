import React from 'react';
import './Banner.css'
import avatar from '../../assets/img/banner-site-img.png'

const Banner = () => {
    return (
        <div className='md:flex justify-between gap-10 items-center md:px-20 p-5 '>
            <img className='md:hidden' src={avatar} alt="avatar" />
            <div className='md:w-1/2'>
                <p className='text-white'>All Research up to Blockchain Interoperability is completed</p>
                <h1 className='text-5xl font-bold mt-2 text-white'>Real-Time Monitoring <br />  Your Infrastructure </h1>
                <p className='mt-4 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil architecto laborum eaque! Deserunt maxime, minus quas molestiae reiciendis esse natus nisi iure.</p>
                <div>
                    <button className='bg-[#ffeef8af] px-10 mt-5 py-3 text-black font-bold uppercase rounded-sm '>Hire Us</button>
                </div>
            </div>
            <img className='md:w-2/5 hidden md:block' src={avatar} alt="avatar" />
        </div>
    );
};

export default Banner;