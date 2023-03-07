import React from 'react';
import tohin from '../../assets/img/tohin.webp'
import shamim from '../../assets/img/shamim.png'
import razibul from "../../assets/img/razibul.png"
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import "./OurTeam.css"

const OurTeam = () => {
    return (
        <div className='grid lg:grid-cols-3 md:w-[90%] w-[100%] md:mx-auto pb-5 md:gap-7 container'>
            <div className="card-cover md:m-[50px] md:w-[350px] w-[300px]">
                <img src={tohin} alt="" />
                <div className='linkShareSection'>
                    <a href="https://www.facebook.com/Bleaklife/"><FacebookIcon fontSize='large'></FacebookIcon></a>
                    <a href="https://www.linkedin.com/in/tohim-ahmed/"><LinkedInIcon fontSize='large'></LinkedInIcon></a>
                    <a href="https://twitter.com/tohinahmed15"><TwitterIcon fontSize='large'></TwitterIcon></a>
                    <a href="https://www.facebook.com/Bleaklife/"><InstagramIcon fontSize='large'></InstagramIcon></a>
                </div>
                <div className='intro'>
                    <h1 className='font-bold text-2xl m-2'>Tohin Ahmed</h1>
                    <div className='customIntro'>
                        <h2 className='font-semibold md:text-xl m-2'>Programmer & Support Engineer</h2>
                        <h3 className='text-lg m-2'><EmailIcon className='text-green-400'></EmailIcon> tohin@rainbosoft.com</h3>
                    </div>
                </div>
            </div>
            <div className="card-cover md:m-[50px] md:w-[350px] w-[300px]">
                <img src={shamim} alt="" />
                <div className='linkShareSection'>
                    <a href="https://www.facebook.com/Bleaklife/"><FacebookIcon fontSize='large'></FacebookIcon></a>
                    <a href="https://www.linkedin.com/in/tohim-ahmed/"><LinkedInIcon fontSize='large'></LinkedInIcon></a>
                    <a href="https://twitter.com/tohinahmed15"><TwitterIcon fontSize='large'></TwitterIcon></a>
                    <a href="https://www.facebook.com/Bleaklife/"><InstagramIcon fontSize='large'></InstagramIcon></a>
                </div>
                <div className='intro'>
                    <h1 className='font-bold text-2xl m-2'>Shamim Islam</h1>
                    <div className='customIntro'>
                        <h2 className='font-semibold text-xl m-2'>Programmer</h2>
                        <h3 className='text-lg m-2'><EmailIcon className='text-green-400'></EmailIcon>shamim@rainbosoft.com</h3>
                    </div>
                </div>
            </div>
            <div className="card-cover md:m-[50px] w-[300px] md:w-[350px]">
                <img src={razibul} alt="" />
                <div className='linkShareSection'>
                    <a href="https://www.facebook.com/Bleaklife/"><FacebookIcon fontSize='large'></FacebookIcon></a>
                    <a href="https://www.linkedin.com/in/tohim-ahmed/"><LinkedInIcon fontSize='large'></LinkedInIcon></a>
                    <a href="https://twitter.com/tohinahmed15"><TwitterIcon fontSize='large'></TwitterIcon></a>
                    <a href="https://www.facebook.com/Bleaklife/"><InstagramIcon fontSize='large'></InstagramIcon></a>
                </div>
                <div className='intro'>
                    <h1 className='font-bold text-2xl m-2'>Razibul Islam</h1>
                    <div className='customIntro'>
                        <h2 className='font-semibold text-xl m-2'>Programmer</h2>
                        <h3 className='text-lg m-2'><EmailIcon className='text-green-400'></EmailIcon>razibul@rainbosoft.com</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;