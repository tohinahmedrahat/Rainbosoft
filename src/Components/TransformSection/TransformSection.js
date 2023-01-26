import React from 'react';
import './TransformSection.css';
const TransformSection = () => {
    return (
        <div className='transform lg:px-10 md:px-5 px-5'>
            <div className='md:flex'>
                <div className=''>
                    <img src="https://templates.envytheme.com/seku/default/assets/img/transform-img.jpg" alt="" />
                </div>
                <div className='md:w-[50%]'>
                    <div className='transform-content'>
                        <h2 className='text-4xl'>Transform Your Digital Workflow Be Productive Reduce Risk
                        </h2>
                        <p className='mb-8'>Lorem ipsum dolor sit elit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum suspendisse Workflow Be productive consectetur adipiscing elit, sed</p>
                        <div className='skill-bar mb-5' data-percentage="80">
                            <h4 className='progress-title-holder'>
                                <span className='progress-title'>Web Desing</span>
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
                                <span className='progress-title'>Web Development</span>
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
                                <span className='progress-title'>web site performence</span>
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