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
    const menuItem = <React.Fragment>
        <li><Link class="nav-link text-gray-400" to="/">Home <ArrowForwardIosIcon className='nav-icon'></ArrowForwardIosIcon></Link></li>

        <li><Link class="nav-link  text-gray-400" to="/about">About Us <ArrowForwardIosIcon className='nav-icon'></ArrowForwardIosIcon></Link></li>

        <li><Link class="nav-link text-gray-400" to="/service">Services <ArrowForwardIosIcon className='nav-icon'></ArrowForwardIosIcon></Link></li>

        <li><Link class="nav-link text-gray-400" to="/project">Project <ArrowForwardIosIcon className='nav-icon'></ArrowForwardIosIcon></Link></li>
        <li><Link class="nav-link text-gray-400" to="/contact">Contact <ArrowForwardIosIcon className='nav-icon'></ArrowForwardIosIcon></Link></li>
    </React.Fragment>


    return (
        <div class="sticky top-0 z-50 ">
            <nav class=" px-4 py-4 flex w-full mx-auto items-center bg-[#41d7eb28] bg-[#0EE29C] bg-nav " id='header'>

            <nav class=" px-4 py-4 flex justify-between items-center w-full bg-[#2FCE9E]  bg-nav " id='header'>

                <Link class="text-3xl font-bold leading-none flex items-center text-[#fffdfd]" to="/">
                    RainboSoft
                </Link>
                <ul class="hidden  md:flex md:items-center lg:w-auto lg:space-x-6">
                    {menuItem}
                   

                </ul>
                <button className='bg-[#ffffff93] px-5 py-3 text-[#000000] font-bold uppercase rounded-sm md:block hidden'>Get A Quote</button>
                <button onClick={() => setOpen(!open)} className='md:hidden text-white'><MenuIcon ></MenuIcon></button>
            </nav>
            <ul className={`${open ? 'left-0' : 'left-[-1200px]'} absolute w-full ease-in duration-700 md:hidden`}>

                {menuItem}

            
            </ul>
            </nav>
        </div>
    );
};

export default Navbar;