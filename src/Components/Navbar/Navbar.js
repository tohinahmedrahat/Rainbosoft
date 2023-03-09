import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const Navbar = () => {
  // const [open, setOpen] = useState(false);

  // var scrollTrigger = 100;

  const [open, setOpen] = useState(false);

  // var className = "inverted";
  var scrollTrigger = 100;

  // window.onscroll = function () {
  //   // bg-[#41d7eb28]
  //   // We add pageYOffset for compatibility with IE.
  //   if (
  //     window.scrollY >= scrollTrigger ||
  //     window.pageYOffset >= scrollTrigger
  //   ) {
  //     document.getElementById("header").classList.remove("bg-[#2FCE9E]");
  //     document.getElementById("header").classList.add("bg-[#41d7eb28]");
  //     console.log("h");
  //   } else {
  //     document.getElementById("header").classList.add("bg-[#2FCE9E]");
  //     document.getElementById("header").classList.remove("bg-[#41d7eb28]");
  //     console.log("n");
  //   }
  // };

  window.onscroll = function () {
    // bg-[#41d7eb28]
    // We add pageYOffset for compatibility with IE.
    if (
      window.scrollY >= scrollTrigger ||
      window.pageYOffset >= scrollTrigger
    ) {
      document.getElementById("header").classList.remove("bg-[#2FCE9E]");
      document.getElementById("header").classList.add("bg-[#41d7eb28]");
      // console.log("h");
    } else {
      document.getElementById("header").classList.add("bg-[#2FCE9E]");
      document.getElementById("header").classList.remove("bg-[#41d7eb28]");
      // console.log("n");
    }
  };

  const menuItem = (
    <>
      <li>
        <Link
          className="nav-link text-gray-400 lg:bg-transparent bg-[#E02156] block  pb-1 pt-3 md:py-0"
          to="/"
        >
          Home{" "}
          <ArrowForwardIosIcon className="nav-icon opacity-0 lg:opacity-100"></ArrowForwardIosIcon>
        </Link>
      </li>

      <li>
        <Link
          className="nav-link  text-gray-400 lg:bg-transparent bg-[#E02156] block py-1 md:py-0"
          to="/about"
        >
          About Us{" "}
          <ArrowForwardIosIcon className="nav-icon opacity-0 lg:opacity-100"></ArrowForwardIosIcon>
        </Link>
      </li>

      <li>
        <Link
          className="nav-link text-gray-400 lg:bg-transparent bg-[#E02156] block py-1 md:py-0"
          to="/service"
        >
          Services{" "}
          <ArrowForwardIosIcon className="nav-icon opacity-0 lg:opacity-100"></ArrowForwardIosIcon>
        </Link>
      </li>

      <li>
        <Link
          className="nav-link text-gray-400 lg:bg-transparent bg-[#E02156] block py-1 md:py-0"
          to="/project"
        >
          Project{" "}
          <ArrowForwardIosIcon className="nav-icon opacity-0 lg:opacity-100"></ArrowForwardIosIcon>
        </Link>
      </li>
      <li>
        <Link
          className="nav-link text-gray-400 lg:bg-transparent bg-[#E02156] block pt-1 pb-3 md:py-0"
          to="/contact"
        >
          Contact{" "}
          <ArrowForwardIosIcon className="nav-icon opacity-0 lg:opacity-100"></ArrowForwardIosIcon>
        </Link>
      </li>
    </>
  );

  return (
    // <div className="sticky top-0 z-50 ">
    //   <div
    //     className=" flex w-full mx-auto items-center bg-[#41d7eb28] bg-[#0EE29C] bg-nav "
    //     // id="header"
    //   >
    //     <nav
    //       className=" w-full  px-4 py-4 flex justify-between items-center bg-[#2FCE9E] bg-nav"
    //       id="header"
    //     >
    //       <Link
    //         className="text-3xl font-bold leading-none flex items-center text-[#fffdfd]"
    //         to="/"
    //       >
    //         RainboSoft
    //       </Link>
    //       <ul className="hidden  md:flex md:items-center lg:w-auto lg:space-x-6">
    //         {menuItem}
    //       </ul>
    //       <button className="bg-[#ffffff93] px-5 py-3 text-[#000000] font-bold uppercase rounded-sm md:block hidden">
    //         Get A Quote
    //       </button>
    //       <button
    //         onClick={() => setOpen(!open)}
    //         className="md:hidden text-white"
    //       >
    //         <MenuIcon></MenuIcon>
    //       </button>
    //     </nav>
    //     <ul
    //       className={`${
    //         open ? "left-0" : "left-[-1200px]"
    //       } absolute w-full ease-in duration-700 md:hidden`}
    //     >
    //       {menuItem}
    //     </ul>
    //   </div>
    // </div>
    <div className="sticky top-0 z-50">
      <nav
        className=" px-4 py-4 flex justify-between items-center bg-[#2FCE9E]  bg-nav "
        id="header"
      >
        <Link
          className="text-3xl font-bold leading-none flex items-center text-[#fffdfd]"
          to="/"
        >
          RainboSoft
        </Link>
        {/* <div className="md:flex space-x-10"> */}
          <ul className="hidden lg:flex lg:mx-auto md:items-center lg:w-auto lg:space-x-6">
            {/* <li>
            <a className="nav-link text-gray-400  " to="/">
              Home{" "}
              <ArrowForwardIosIcon className="nav-icon"></ArrowForwardIosIcon>
            </a>
          </li>

          <li>
            <a className="nav-link  text-gray-400  " to="/about-us">
              About Us{" "}
              <ArrowForwardIosIcon className="nav-icon"></ArrowForwardIosIcon>
            </a>
          </li>

          <li>
            <a className="nav-link text-gray-400  " to="/services">
              Services{" "}
              <ArrowForwardIosIcon className="nav-icon"></ArrowForwardIosIcon>
            </a>
          </li>

          <li>
            <a className="nav-link text-gray-400  " to="/project">
              Project{" "}
              <ArrowForwardIosIcon className="nav-icon"></ArrowForwardIosIcon>
            </a>
          </li>
          <li>
            <a className="nav-link text-gray-400  " to="/contact">
              Contact{" "}
              <ArrowForwardIosIcon className="nav-icon"></ArrowForwardIosIcon>
            </a>
          </li> */}
            {menuItem}
          </ul>
          <button className="bg-[#ffffff93] px-5 py-3 text-[#000000] font-bold uppercase rounded-sm md:block hidden md:-mr-96 lg:mr-0">
            Get A Quote
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white"
          >
            {open ? <CloseIcon></CloseIcon> : <MenuIcon></MenuIcon>}
          </button>
        {/* </div> */}
      </nav>
      <ul
        className={`${
          open ? "left-0" : "left-[-1200px]"
        } absolute w-full ease-in duration-700 lg::hidden text-center`}
      >
        {/* <li>
          <a className="nav-link-2 bg-[#E02156] w-full px-4 py-2 block" to="/">
            Home{" "}
            <ArrowForwardIosIcon className="nav-icon"></ArrowForwardIosIcon>
          </a>
        </li>
        <hr />

        <li>
          <a
            className="nav-link-2  text-gray-400   bg-[#E02156] px-4 py-2 block"
            to="about-us"
          >
            About Us{" "}
            <ArrowForwardIosIcon className="nav-icon"></ArrowForwardIosIcon>
          </a>
        </li>
        <hr />
        <li>
          <a
            className="nav-link-2 text-gray-400   bg-[#E02156] px-4 py-2 block"
            to="/services"
          >
            Services{" "}
            <ArrowForwardIosIcon className="nav-icon"></ArrowForwardIosIcon>
          </a>
        </li>
        <hr />
        <li>
          <a
            className="nav-link-2 text-gray-400   bg-[#E02156] px-4 py-2 block"
            to="/project"
          >
            Project{" "}
            <ArrowForwardIosIcon className="nav-icon"></ArrowForwardIosIcon>
          </a>
        </li>
        <hr />
        <li>
          <a
            className="nav-link-2 text-gray-400   bg-[#E02156] px-4 py-2 block"
            to="/contact"
          >
            Contact{" "}
            <ArrowForwardIosIcon className="nav-icon"></ArrowForwardIosIcon>
          </a>
        </li> */}
        {menuItem}
      </ul>
    </div>
  );
};

export default Navbar;
