import React from 'react';
import './TransformSection.css';
const TransformSection = () => {
    return (
        <div className='transform lg:px-10 md:px-5 px-5 mt-10 z-10'>
            <div className='md:flex'>
                <div className=''>
                    <img className='h-[27rem]' src="https://img.freepik.com/free-vector/app-development-concept-with-desktop_23-2148700922.jpg?w=740&t=st=1674924396~exp=1674924996~hmac=411ac6e84b12de695f94235bc2696c1e6913eb8308810be5eb87e0c31ecd2959" alt="" />
                </div>
                <div className='md:w-[50%] '>
                    <div className='transform-content bg-[#c876b656] md:ml-[-100px]'>
                        <h2 className='text-4xl text-white'>Transform Your Digital Workflow Be Productive Reduce Risk
                        </h2>
                        <p className='mb-8'>Lorem ipsum dolor sit elit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum suspendisse Workflow Be productive consectetur adipiscing elit, sed</p>
                        <div className='skill-bar mb-5' data-percentage="80">
                            <h4 className='progress-title-holder'>
                                <span className='progress-title text-white'>Web Desing</span>
                                <span className='progress-number-wrapper'>
                                    <span className='progress-number-mark' style={{left:'80%'}}>
                                        <span className='percent'>80%</span>
                                        <span className='down-arrow'></span>
                                    </span>
                                </span>
                            </h4>
                            <div className='progress-content-outter'>
                                <div className='progress-content' style={{width:"80%"}}></div>
                            </div>
                        </div>
                        <div className='skill-bar mb-5' data-percentage="90">
                            <h4 className='progress-title-holder'>
                                <span className='progress-title text-white'>Web Development</span>
                                <span className='progress-number-wrapper'>
                                    <span className='progress-number-mark' style={{left:'90%'}}>
                                        <span className='percent'>90%</span>
                                        <span className='down-arrow'></span>
                                    </span>
                                </span>
                            </h4>
                            <div className='progress-content-outter'>
                                <div className='progress-content' style={{width:"90%"}}></div>
                            </div>
                        </div>
                        <div className='skill-bar mb-5' data-percentage="70">
                            <h4 className='progress-title-holder'>
                                <span className='progress-title text-white'>web site performence</span>
                                <span className='progress-number-wrapper'>
                                    <span className='progress-number-mark' style={{left:'70%'}}>
                                        <span className='percent'>70%</span>
                                        <span className='down-arrow'></span>
                                    </span>
                                </span>
                            </h4>
                            <div className='progress-content-outter'>
                                <div className='progress-content' style={{width:"70%"}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='shape-1'>
                <img src="https://templates.envytheme.com/seku/default/assets/img/shape/3.png" alt="" />
            </div>
            <div className='shape-2'>
                <img src="https://templates.envytheme.com/seku/default/assets/img/shape/4.png" alt="" />
            </div>
        </div>
    );
};

export default TransformSection;