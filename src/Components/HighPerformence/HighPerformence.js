import React from 'react';
import WebIcon from '@mui/icons-material/Web';
import './HighPerformence.css'
import { Link } from 'react-router-dom';

const HighPerformence = () => {
    return (
        <div>
            <h1 className='text-center text-[#0e0129] font-bold mb-4 capitalize text-5xl'>High-Performance Solutions</h1>
            <p className='text-center md:w-3/5 mx-auto '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quam neque quibusdam corrupti aspernatur corporis alias nisi dolorum expedita veritatis voluptates minima.</p>
            <div className='md:grid grid-cols-3 lg:px-10 md:px-5 px-5 mt-5 gap-4'>
                <div className='text-center bg-[#010414] single-card'>
                    <WebIcon className='icon'></WebIcon>
                    <h3 className='mb-2 font-semibold text-2xl capitalize text-white'>Confidential Information</h3>
                    <p className='text-white mb-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sit amet, dolor consectetur</p>
                    <Link className='read-more'>Read More</Link>
                    <img src="https://templates.envytheme.com/seku/default/assets/img/shape/6.png" alt="" />
                </div>
                <div className='text-center bg-[#010414] single-card'>
                    <WebIcon className='icon'></WebIcon>
                    <h3 className='mb-2 font-semibold text-2xl capitalize text-white'>Confidential Information</h3>
                    <p className='text-white mb-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sit amet, dolor consectetur</p>
                    <Link className='read-more'>Read More</Link>
                    <img src="https://templates.envytheme.com/seku/default/assets/img/shape/6.png" alt="" />
                </div>
                <div className='text-center bg-[#010414] single-card'>
                    <WebIcon className='icon'></WebIcon>
                    <h3 className='mb-2 font-semibold text-2xl capitalize text-white'>Confidential Information</h3>
                    <p className='text-white mb-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sit amet, dolor consectetur</p>
                    <Link className='read-more'>Read More</Link>
                    <img src="https://templates.envytheme.com/seku/default/assets/img/shape/6.png" alt="" />
                </div>
                <div className='text-center bg-[#010414] single-card'>
                    <WebIcon className='icon'></WebIcon>
                    <h3 className='mb-2 font-semibold text-2xl capitalize text-white'>Confidential Information</h3>
                    <p className='text-white mb-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sit amet, dolor consectetur</p>
                    <Link className='read-more'>Read More</Link>
                    <img src="https://templates.envytheme.com/seku/default/assets/img/shape/6.png" alt="" />
                </div>
                <div className='text-center bg-[#010414] single-card'>
                    <WebIcon className='icon'></WebIcon>
                    <h3 className='mb-2 font-semibold text-2xl capitalize text-white'>Confidential Information</h3>
                    <p className='text-white mb-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sit amet, dolor consectetur</p>
                    <Link className='read-more'>Read More</Link>
                    <img src="https://templates.envytheme.com/seku/default/assets/img/shape/6.png" alt="" />
                </div>
                <div className='text-center bg-[#010414] single-card'>
                    <WebIcon className='icon'></WebIcon>
                    <h3 className='mb-2 font-semibold text-2xl capitalize text-white'>Confidential Information</h3>
                    <p className='text-white mb-2 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sit amet, dolor consectetur</p>
                    <Link className='read-more'>Read More</Link>
                    <img src="https://templates.envytheme.com/seku/default/assets/img/shape/6.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default HighPerformence;