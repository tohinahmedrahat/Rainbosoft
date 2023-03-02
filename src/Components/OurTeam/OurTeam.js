import React from 'react';
import './OurTeam.scss';
import turin from '../../assets/img/tohin.webp'
import shamim from '../../assets/img/shamim.png'
import EmailIcon from '@mui/icons-material/Email';

const OurTeam = () => {

    return (
        <div className='grid lg:grid-cols-3 pb-5'>
            <div class="card w-80 p-5 mx-auto " data-state="#about">
                <div class="">
                    <div class="card-cover text-center" ></div>
                    <img class="w-24 rounded-full shadow-xl  h-24 mx-auto" src={turin} alt="avatar" />
                    <h4 class="mt-4 text-center text-xl font-bold">Tohin Ahamed</h4>
                    <h5 class=" mt-3 font-bold text-black text-center">Programmer & Support Engineer</h5>
                    <h5 class=" mt-3 font-bold text-black text-center flex gap-3 items-center justify-center"> <EmailIcon></EmailIcon>
                        tohin@rainbosoft.com</h5>
                        <button className='bg-[#eb3068af] px-4 py-2 w-1/2 block text-white font-bold rounded-3xl mt-5 mx-auto'>Call Now</button>
                </div>
            </div>
            <div class="card w-80 p-5 mx-auto " data-state="#about">
                <div class="">
                    <div class="card-cover text-center" ></div>
                    <img class="w-24 rounded-full shadow-xl  h-24 mx-auto" src={shamim} alt="avatar" />
                    <h4 class="mt-4 text-center text-xl font-bold">Shamim Islam</h4>
                    <h5 class=" mt-3 font-bold text-black text-center">Programmer</h5>
                    <h5 class=" mt-3 font-bold text-black text-center flex gap-3 items-center justify-center"> <EmailIcon></EmailIcon>
                        shamim@rainbosoft.com</h5>
                        <button className='bg-[#eb3068af] px-4 py-2 w-1/2 block text-white font-bold rounded-3xl mt-5 mx-auto'>Call Now</button>
                </div>
            </div>
            <div class="card w-80 p-5 mx-auto " data-state="#about">
                <div class="">
                    <div class="card-cover text-center" ></div>
                    <img class="w-24 rounded-full shadow-xl  h-24 mx-auto" src={turin} alt="avatar" />
                    <h4 class="mt-4 text-center text-xl font-bold">Razibul Islam</h4>
                    <h5 class=" mt-3 font-bold text-black text-center">Programmer</h5>
                    <h5 class=" mt-3 font-bold text-black text-center flex gap-3 items-center justify-center"> <EmailIcon></EmailIcon>
                        razibul@rainbosoft.com</h5>
                        <button className='bg-[#eb3068af] px-4 py-2 w-1/2 block text-white font-bold rounded-3xl mt-5 mx-auto'>Call Now</button>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;