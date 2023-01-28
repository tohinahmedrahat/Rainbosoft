import React from 'react';
import './Pricing.css'

const Pricing = () => {
    return (
        <div>
            <h1 className='text-center text-4xl font-bold  my-10 text-white'>Our Pricing </h1>
            <p className='text-center md:w-2/3 mx-auto my-10 text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem sapiente quo voluptatem voluptates cumque, quam repellat nobis vitae optio minima nihil laudantium repellendus corporis, placeat quas est nisi! Facere, sit!</p>
            <div class="flex flex-col md:flex-row md:transform md:scale-75 lg:scale-100 justify-center gap-10">
                <div class="rounded-lg  text-center p-5 mx-auto md:mx-0 my-2 md:my-6 bg-[#4CE8F6] font-medium z-10 shadow-lg">
                    <div class="">Basic</div>
                    <h2 className='text-white font-bold text-center text-5xl my-10 px-5'>8000 BDT</h2>
                    <hr />
                    <div class="text-sm my-3">500 GB Storage</div>
                    <hr />
                    <div class="text-sm my-3">2 Users Allowed</div>
                    <hr />
                    <div class="text-sm my-3">Send up to 3 GB</div>
                    <hr />
                    <a href="#" target="_blank">
                            <div class="bg-white border border-white hover:bg-transparent text-blue-600 hover:text-white font-bold uppercase text-xs mt-5 py-2 mpx-4 rounded cursor-pointer">Learn More</div>
                        </a>
                </div>

                <div class="border-transparent rounded-lg text-center p-5 mx-auto md:mx-0 my-2 pricing bg-[#ccc8c880] text-white font-medium z-10 shadow-lg">
                    <div class="py-4">Professional
                    <h2 className='text-white font-bold text-center text-5xl my-10 px-5'>8000 BDT</h2>
                        <hr />
                        <div class="text-sm my-3">1 TB Storage</div>
                        <hr />
                        <div class="text-sm my-3">5 Users Allowed</div>
                        <hr />
                        <div class="text-sm my-3">Send up to 10 GB</div>
                        <hr />
                        <a href="#" target="_blank">
                            <div class="bg-white border border-white hover:bg-transparent text-blue-600 hover:text-white font-bold uppercase text-xs mt-5 py-2 mpx-4 rounded cursor-pointer">Learn More</div>
                        </a>
                    </div>
                </div>

                <div class="rounded-lg   text-center p-5 mx-auto md:mx-0 my-2 md:my-6 bg-[#D4A3D2] font-medium z-10 shadow-lg">
                    <div class="">Master</div>
                    <h2 className='text-white font-bold text-center text-5xl my-10 px-5'>8000 BDT</h2>
                    <hr />
                    <div class="text-sm my-3">2 TB Storage</div>
                    <hr />
                    <div class="text-sm my-3">10 Users Allowed</div>
                    <hr />
                    <div class="text-sm my-3">Send up to 20 GB</div>
                    <hr />
                    <a href="#" target="_blank">
                            <div class="bg-white border border-white hover:bg-transparent text-blue-600 hover:text-white font-bold uppercase text-xs mt-5 py-2 mpx-4 rounded cursor-pointer">Learn More</div>
                        </a>
                </div>
            </div>
        </div>
    );
};

export default Pricing;