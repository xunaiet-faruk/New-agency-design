import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const SwipeableTemporaryDrawer = () => {
    const [state, setState] = React.useState({
        bottom: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            className="bg-[#0596a1] text-white overflow-y-auto"
            sx={{ height: '100%', width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <div className='mt-16'>
                    <div className='flex justify-center items-center '>
                        <a href=""><img className='w-[65px]' src="https://i.ibb.co/BVGF7hx/image.png" alt="" /></a>
                    </div>
                    <div className='flex justify-around items-center'>
                        <div className='mt-12'>
                            <ul className='space-y-7' style={{ fontFamily: "'Raleway', sans-serif", fontWeight: '550' }}>
                                <li className='text-3xl  '><a href="">Home</a></li>
                                <li className='text-3xl  '><a href="">About</a></li>
                                <li className='text-3xl  '><a href="">Work</a></li>
                                <li className='text-3xl  '><a href="">Pricing</a></li>
                                <li className='text-3xl  '><a href="">Contact</a></li>
                            </ul>
                        </div>
                        <div className='space-y-5'>
                            <div>
                                <span className='text-[14px] font-normal'>+1 631 123 4567</span><br />
                                <span className='text-[14px]'>email@website.com</span>
                            </div>
                            <div className='pt-6 flex gap-8 '>
                                <a href=""><FaFacebookF className='hover:bg-white rounded-full transition-colors duration-500 ease-in-out hover:border bg-transparent hover:text-[#0596a1]' /></a>
                                <a href=""><FaTwitter className='hover:bg-white rounded-full transition-colors duration-500 ease-in-out hover:border bg-transparent hover:text-[#0596a1]' /></a>
                                <a href=""><FaYoutube className='hover:bg-white rounded-full transition-colors duration-500 ease-in-out hover:border bg-transparent hover:text-[#0596a1]' /></a>
                                <a href=""><FaInstagram className='hover:bg-white rounded-full transition-colors duration-500 ease-in-out hover:border bg-transparent hover:text-[#0596a1]' /></a>
                            </div>
                            <p className='text-[14px]'>© 2024 MegaOne. Made With Love by <br /> Themesindustry</p>
                        </div>
                    </div>
                </div>
                <hr className='border-1 border-solid mt-12 border-[#bbb] w-[900px] mx-auto' />
            </List>
        </Box>
    );

    return (
        <div className='fixed z-10 p-5'>
            <Button onClick={toggleDrawer('bottom', true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer">
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
            </Button>
            <SwipeableDrawer
                anchor={'bottom'}
                open={state['bottom']}
                onClose={toggleDrawer('bottom', false)}
                onOpen={toggleDrawer('bottom', true)}
                sx={{ '& .MuiDrawer-paper': { height: '95%' } }}
            >
                {list('bottom')}
            </SwipeableDrawer>
        </div>
    );
}

export default SwipeableTemporaryDrawer;
