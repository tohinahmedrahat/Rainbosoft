import React from 'react';
import graph from '../../assets/img/dashboard.jpg'

const Management = () => {
    return (
        <div className='my-20 md:flex gap-10 justify-between px-10 items-center'>
            <img className='md:w-1/2' src={graph} alt="graph" />
            <div>
                <h2 className='md:text-5xl text-2xl my-5 font-bold text-white mt-5'>Admin Panel Statistics Graph</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsumv
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel.</p>
                    <h3 className='my-5 text-white font-bold text-2xl  md:text-4xl'>Easy way to manage <br /> Business </h3>
            </div>
        </div>
    );
};

export default Management;