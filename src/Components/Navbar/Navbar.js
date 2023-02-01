import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Navbar = () => {
    const [open, setOpen] = useState(false)

    var className = "inverted";
    var scrollTrigger = 100;

    window.onscroll = function () {
        // We add pageYOffset for compatibility with IE.
        if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
            document.getElementById("header").classList.remove('bg-[#0EE29C]');
            console.log('h')
        } else {
            document.getElementById("header").classList.add('bg-[#0EE29C]');
            console.log('n')
        }
    };



    return (
        <div class="sticky top-0 z-50 ">
            <nav class=" px-4 py-4 flex justify-between items-center bg-[#41d7eb28] bg-[#0EE29C] bg-nav " id='header'>
                <a class="text-3xl font-bold leading-none flex items-center text-[#fffdfd]" href="#">
                    RainboSoft
                </a>
                <ul class="hidden  md:flex lg:mx-auto md:flex md:items-center lg:w-auto lg:space-x-6">
                    <li><a class="nav-link text-gray-400  " href="#">Home <ArrowForwardIosIcon className='nav-icon'></ArrowForwardIosIcon></a></li>

                    <li><a class="nav-link  text-gray-400  " href="#">About Us <ArrowForwardIosIcon className='nav-icon'></ArrowForwardIosIcon></a></li>

                    <li><a class="nav-link text-gray-400  " href="#">Services <ArrowForwardIosIcon className='nav-icon'></ArrowForwardIosIcon></a></li>

                    <li><a class="nav-link text-gray-400  " href="#">Project <ArrowForwardIosIcon className='nav-icon'></ArrowForwardIosIcon></a></li>
                    <li><a class="nav-link text-gray-400  " href="#">Contact <ArrowForwardIosIcon className='nav-icon'></ArrowForwardIosIcon></a></li>
                </ul>
                <button className='bg-[#ffffff93] px-5 py-3 text-[#000000] font-bold uppercase rounded-sm md:block hidden'>Get A Quote</button>
                <button onClick={() => setOpen(!open)} className='md:hidden text-white'><MenuIcon ></MenuIcon></button>
            </nav>
            <ul className={`${open ? 'left-0' : 'left-[-1200px]'} absolute w-full ease-in duration-700 md:hidden`}>
                <li><a class="nav-link-2 bg-[#E02156] w-full px-4 py-2 block" href="#">Home <ArrowForwardIosIcon className='nav-icon'></ArrowForwardIosIcon></a></li>
                <hr />

                <li><a class="nav-link-2  text-gray-400   bg-[#E02156] px-4 py-2 block" href="#">About Us <ArrowForwardIosIcon className='nav-icon'></ArrowForwardIosIcon></a></li>
                <hr />
                <li><a class="nav-link-2 text-gray-400   bg-[#E02156] px-4 py-2 block" href="#">Services <ArrowForwardIosIcon className='nav-icon'></ArrowForwardIosIcon></a></li>
                <hr />
                <li><a class="nav-link-2 text-gray-400   bg-[#E02156] px-4 py-2 block" href="#">Project <ArrowForwardIosIcon className='nav-icon'></ArrowForwardIosIcon></a></li>
                <hr />
                <li><a class="nav-link-2 text-gray-400   bg-[#E02156] px-4 py-2 block" href="#">Contact <ArrowForwardIosIcon className='nav-icon'></ArrowForwardIosIcon></a></li>
            </ul>
        </div>
    );
};

export default Navbar;