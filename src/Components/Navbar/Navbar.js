import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false)

    var className = "inverted";
    var scrollTrigger = 100;

    window.onscroll = function () {
        // bg-[#41d7eb28]
        // We add pageYOffset for compatibility with IE.
        if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
            document.getElementById("header").classList.remove('bg-[#2FCE9E]');
            document.getElementById("header").classList.add('bg-[#41d7eb28]');
            console.log('h')
        } else {
            document.getElementById("header").classList.add('bg-[#2FCE9E]');
            document.getElementById("header").classList.remove('bg-[#41d7eb28]');
            console.log('n')
        }
    };



    return (
        <div class="sticky top-0 z-50 ">
            <nav class=" px-4 py-4 flex justify-between items-center bg-[#2FCE9E]  bg-nav " id='header'>
                <Link class="text-3xl font-bold leading-none flex items-center text-[#fffdfd]" to="/">
                    RainboSoft
                </Link>
                <ul class="hidden  md:flex lg:mx-auto md:flex md:items-center lg:w-auto lg:space-x-6">
                    <li><a class="nav-link text-gray-400  " to="/">Home <ArrowForwardIosIcon className='nav-icon'></ArrowForwardIosIcon></a></li>

<<<<<<< HEAD
                    <li><a class="nav-link  text-gray-400  " to="/about-us">About Us <ArrowForwardIosIcon className='nav-icon'></ArrowForwardIosIcon></a></li>
=======
                    <li><Link class="nav-link  text-gray-400  " to="/about">About Us <ArrowForwardIosIcon className='nav-icon'></ArrowForwardIosIcon></Link></li>
>>>>>>> 1b689a752b8c50473053b8cdefcfa89bc7b8efd5

                    <li><a class="nav-link text-gray-400  " to="/services">Services <ArrowForwardIosIcon className='nav-icon'></ArrowForwardIosIcon></a></li>

                    <li><a class="nav-link text-gray-400  " to="/project">Project <ArrowForwardIosIcon className='nav-icon'></ArrowForwardIosIcon></a></li>
                    <li><a class="nav-link text-gray-400  " to="/contact">Contact <ArrowForwardIosIcon className='nav-icon'></ArrowForwardIosIcon></a></li>
                </ul>
                <button className='bg-[#ffffff93] px-5 py-3 text-[#000000] font-bold uppercase rounded-sm md:block hidden'>Get A Quote</button>
                <button onClick={() => setOpen(!open)} className='md:hidden text-white'><MenuIcon ></MenuIcon></button>
            </nav>
            <ul className={`${open ? 'left-0' : 'left-[-1200px]'} absolute w-full ease-in duration-700 md:hidden`}>
                <li><a class="nav-link-2 bg-[#E02156] w-full px-4 py-2 block" to="/">Home <ArrowForwardIosIcon className='nav-icon'></ArrowForwardIosIcon></a></li>
                <hr />

                <li><a class="nav-link-2  text-gray-400   bg-[#E02156] px-4 py-2 block" to="about-us">About Us <ArrowForwardIosIcon className='nav-icon'></ArrowForwardIosIcon></a></li>
                <hr />
                <li><a class="nav-link-2 text-gray-400   bg-[#E02156] px-4 py-2 block" to="/services">Services <ArrowForwardIosIcon className='nav-icon'></ArrowForwardIosIcon></a></li>
                <hr />
                <li><a class="nav-link-2 text-gray-400   bg-[#E02156] px-4 py-2 block" to="/project">Project <ArrowForwardIosIcon className='nav-icon'></ArrowForwardIosIcon></a></li>
                <hr />
                <li><a class="nav-link-2 text-gray-400   bg-[#E02156] px-4 py-2 block" to="/contact">Contact <ArrowForwardIosIcon className='nav-icon'></ArrowForwardIosIcon></a></li>
            </ul>
        </div>
    );
};

export default Navbar;