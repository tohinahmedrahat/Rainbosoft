import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import lustration from '../../assets/img/us.webp'

const WhyChose = () => {
    return (
        <div className='md:flex justify-between gap-10 items-center p-5'>
            <img className='md:w-1/2' src={lustration} alt="" />
            <div>
                <h3 className='md:text-5xl text-2xl text-[#fff] my-10'>Why Choose Us</h3>
                <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel.</p>
                <div className='my-5'>
                    <h4 className='flex gap-4 mt-2 text-white'><CheckIcon className='bg-white rounded-full p-1 text-[#f81b1b]'></CheckIcon>Extemly low response time at all time</h4>
                    <h4 className='flex gap-4 mt-2 text-white'><CheckIcon className='bg-white rounded-full p-1 text-[#f81b1b]'></CheckIcon>Extemly low response time at all time</h4>
                    <h4 className='flex gap-4 mt-2 text-white'><CheckIcon className='bg-white rounded-full p-1 text-[#f81b1b]'></CheckIcon>Extemly low response time at all time</h4>
                </div>
                <button className='px-5 py-3 bg-[#ffffff88]'>Learn More</button>
            </div>
        </div>
    );
};

export default WhyChose;