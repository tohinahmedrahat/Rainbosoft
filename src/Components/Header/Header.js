import React from 'react';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';


const Header = () => {
    return (
        <div className='bg-[#0CB7BA] p-3 text-white font-medium lg:px-20 md:px-10 px-5 flex justify-between items-center'>  
            <div className='flex items-center gap-2'>
            <LocalPostOfficeIcon/>
            info@rainbosoft.com
            </div>
            <div className='flex gap-3'>
                <FacebookIcon/>
                <LinkedInIcon/>
                <TwitterIcon/>
            </div>
        </div>
    );
};

export default Header;