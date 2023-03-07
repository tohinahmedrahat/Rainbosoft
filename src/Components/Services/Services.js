import React from "react";
import bg from "../../assets/img/breadcurmb.jpg";
import web from "../../assets/img/webdevelopment.png";
import costume from "../../assets/img/costume.png";
import about from "../../assets/img/service-about1.png";
import location from "../../assets/img/location.png";
import message from "../../assets/img/message.png";
import phone from "../../assets/img/phone.png";
import "./Services.css";

const Services = () => {
  const services = [
    {
      firstName: "Web",
      lastName: "Development",
      text: "Sixart have got quite a few already made templates for better project management that you can use now.",
      btn: "Order Now",
      image: web,
    },
    {
      firstName: "Web Costume",
      lastName: "Solution",
      text: "Sixart have got quite a few already made templates for better project management that you can use now.",
      btn: "Order Now",
      image: costume,
    },
  ];

  return (
    <div>
      <div
        className="pt-[300px] pb-40 bg-cover bg-center md:px-24 px-5"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <h1 className="md:text-5xl text-3xl lg:text-6xl text-[#151718] pb-[10px] font-bold">
          Rainbosoft Service
        </h1>
        <p className="uppercase text-base font-medium text-[#151718]">
          Home &#10095; Services
        </p>
      </div>

      {/* Service Card Section */}

      <div className="mt-20">
        <h1 className="md:text-4xl text-3xl lg:text-5xl text-[#151718] pb-[10px] font-semibold text-center">
          Our Services
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-7xl mx-auto mt-10 background-radial-gradient gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className="py-14 px-9 border border-[#f5f5f5] rounded-[20px] box"
            >
              <img src={service.image} className="mx-auto" alt="" />
              <div className="text-center px-5">
                <h1 className="text-2xl font-semibold mb-8">
                  {service.firstName}
                  <br />
                  {service.lastName}
                </h1>
                <p className="text-[#6A6A74] text-lg mb-[1rem]">
                  {service.text}
                </p>
                <button className="bg-[#98ac3e93] px-5 py-3 text-[#000000] font-bold uppercase rounded-sm">
                  {service.btn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* About Us Section */}
      <div className="flex max-w-7xl mx-auto justify-center my-20 flex-wrap lg:flex-nowrap items-center px-5 lg:px-0">
        <div className="lg:w-1/2">
          <img src={about} alt="" />
        </div>
        <div className="lg:w-1/2">
          <p className="serviceEffect inline-block rounded-full text-[#52525C] bg-white relative px-8 mb-[30px] py-[10px]">
            Who we are?
          </p>
          <h1 className="pb-[30px] text-4xl md:text-5xl lg:text-6xl font-semibold">
            We are dynamic team of creative design and development
          </h1>
          <p className="text-[#6A6A74] text-lg md:text-xl mb-4">
            We have almost 12+ years of experience for helping consulting
            services and business solutions and best protect.
          </p>
          <button className="bg-[#98ac3e93] px-5 py-3 text-[#000000] font-bold uppercase rounded-sm">
            About Our Agency
          </button>
        </div>
      </div>

      {/* Contact form */}
      <div className="bg-[#f7f7f7] py-[120px] px-5">
        <div className="max-w-7xl bg-white mx-auto lg:px-[120px] py-20 flex flex-wrap md:flex-nowrap px-5">
          <div className="md:w-1/2">
            <p className="serviceContactEffect inline-block rounded-full text-[#52525C] bg-white relative px-8 mb-[30px] py-[10px]">
              Contact Us
            </p>
            <h1 className="font-semibold text-[45px] leading-tight mb-[60px]">
              Let’s Work <br /> Together.
            </h1>
            <div className="flex p-[30px] mb-[10px] lg:mr-[120px] border border-[#f5f5f5] items-center rounded-[20px]">
              <img src={location} alt="" />
              <p className="text-sm text-[#151718] leading-[18px] ml-5">
                Wisconsin Ave, Suite 700 <br />
                Chevy Chase, Maryland 20815
              </p>
            </div>
            <div className="flex p-[30px] mb-[10px] md:mr-[120px] border border-[#f5f5f5] items-center rounded-[20px]">
              <img src={message} alt="" />

              <a
                className="text-sm text-[#151718] leading-[18px] ml-5"
                href="mailto:rainbosoft@gmail.com"
              >
                rainbosoft@gmail.com
              </a>
            </div>
            <div className="flex p-[30px] mb-[10px] md:mr-[120px] border border-[#f5f5f5] items-center rounded-[20px]">
              <img src={phone} alt="" />
              <a
                className="text-sm text-[#151718] leading-[18px] ml-5"
                href="tel:+880 1317713199"
              >
                +880 1317713199
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-medium -tracking-wide mb-5">
              Fill The Form
            </h2>
            <input
              type="text"
              placeholder="Your Name / Company Name"
              className="block w-full px-5 text-[15px] text-[#151718] bg-[#f7f7f7] border border-transparent rounded-[5px] mb-5 h-[60px] focus:border-[#33cc79]"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="block w-full px-5 text-[15px] text-[#151718] bg-[#f7f7f7] border border-transparent rounded-[5px] mb-5 h-[60px] focus:border-[#33cc79]"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Write Your Message here..."
              className="block w-full p-5 text-[15px] text-[#151718] bg-[#f7f7f7] border border-transparent rounded-[5px] mb-5 h-[215px] resize-none focus:border-[#33cc79]"
            ></textarea>
            <button className="bg-[#98ac3e93] px-8 py-4 text-[#000000] font-bold uppercase rounded-sm">
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
