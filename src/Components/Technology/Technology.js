import React from 'react';
import HTML from './img/html.svg'
import css from './img/css.svg'
import javascript from './img/javascript.svg'
import bootstrap from './img/bootstrap.svg'
import tailwind from './img/tailwind.svg'
import react from './img/react.svg'



const Technology = () => {
    return (
        <div>
            <h3 className='text-2xl font-bold text-center text-white my-20'>We Used Modern Technology For Web & Application Development </h3>
            <div className='flex flex-wrap gap-20 justify-center my-20'>
                <img  className='h-32 w-32 bg-[#ffffff75] p-3 rounded-md  ' src={HTML} alt="" />
                <img className='h-32 w-32 bg-[#ffffff75] p-3 rounded-md ' src={css} alt="" />
                <img className='h-32 w-32 bg-[#ffffff75] p-3 rounded-md ' src={react} alt="" />
                <img className='h-32 w-32 bg-[#ffffff75] p-3 rounded-md ' src={tailwind} alt="" />
                <img className='h-32 w-32 bg-[#ffffff75] p-3 rounded-md ' src={bootstrap} alt="" />
                <img className='h-32 w-32 bg-[#ffffff75] p-3 rounded-md ' src={javascript} alt="" />
            </div>

        </div>
    );
};

export default Technology;