import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./Contact.css";
const Contact = () => {
    return (
        <div>
            <div className='page-header'>
                <div className='page-header__bg'>
                </div>
                <div className='container'>
                    <h6 className='text-white text-2xl font-semibold ml-4'>Home / Contact</h6>
                    <h5 className='text-white text-5xl mt-1 font-semibold ml-4'>Contact</h5>
                </div>
            </div>
            <div className='mt-8'>
                <div className='bg-[#F9F6FF] md:flex w-[90%] mx-auto'>
                    <div className='p-20'>
                        <h4 className='text-[#9c2ede] font-bold text-base'>Contact With Us</h4>
                        <h2 className='text-5xl font-bold mt-1'>Join Us To Get IT Free <br /> Consultations</h2>
                        <form action="" className='mt-12 custom-form'>
                            <input className='h-[56px] pl-7 mr-3 w-[295px]' type="text" placeholder='Your Name' />
                            <input className='h-[56px] pl-7 w-[295px]' type="email" placeholder='Your Email' /><br />
                            <textarea className='mt-4 pl-7 pt-5' placeholder='Write Message' cols="59" rows="8"></textarea>
                            <button type="submit" className='btn-grad'>Send A Message</button>
                        </form>
                    </div>
                    <div className='contact-aside'>
                        <div className='relative'>
                            <h3 className='text-white font-bold text-lg uppercase tracking-widest'>Address</h3>
                            <p className='text-[#CBB8F6] mt-1 leading-7'>88 New Street, Washington DC
                               <br /> United States, America</p>
                        </div>
                        <div className='relative mt-9'>
                            <h3 className='text-white font-bold text-lg uppercase tracking-widest'>Phone</h3>
                            <p className='text-[#CBB8F6] mt-1 leading-7'>Phone: <span className='contact-one__item__text'>+8801317-713199</span>
                               <br /> phone: <span className='contact-one__item__text'>+8801867-585183</span></p>
                        </div>
                        <div className='relative mt-9'>
                            <h3 className='text-white font-bold text-lg uppercase tracking-widest'>Email</h3>
                            <p className='text-[#CBB8F6] mt-1 leading-7'>Email : <span className='contact-one__item__text'>input your company email</span>
                               <br />Email : <span className='contact-one__item__text'>add second email</span> </p>
                        </div>
                        <div className='relative md:pt-44'>
                            <h3 className='uppercase mb-2 font-semibold text-white text-2xl'>follow us on</h3>
                            <a href='afjdskjfds'><FacebookIcon className='custom-icon' fontSize='large'></FacebookIcon></a>
                            <a href='afjdskjfds'><TwitterIcon className='custom-icon' fontSize='large'></TwitterIcon></a>
                            <a href='afjdskjfds'><InstagramIcon className='custom-icon' fontSize='large'></InstagramIcon></a>
                            <a href='afjdskjfds'><LinkedInIcon className='custom-icon' fontSize='large'></LinkedInIcon></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;