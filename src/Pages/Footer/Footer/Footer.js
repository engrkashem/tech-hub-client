import React from 'react';
import '../../../Styles/Footer/Footer.css';
import logo from '../../../images/logoes/logo.png';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    //Vanilla css is scripted in Footer.css file
    return (
        <footer className='footer-container p-10 '>
            <div className='flex justify-between items-center'>
                <div>
                    <img src={logo} alt="" />
                    <h6>Get Your Tech Need at One Stop</h6>
                </div>
                <div>
                    <h5>Find Us</h5>
                    <div className='mt-4 flex gap-3 '>
                        <GoogleIcon className='cursor-pointer' />
                        <FacebookIcon className='cursor-pointer' />
                        <InstagramIcon className='cursor-pointer' />
                        <LinkedInIcon className='cursor-pointer' />
                    </div>

                </div>
            </div>
            <hr className='my-8' />
            <div className=' text-center'>
                <small>Copyright 	&copy; Reserved to TECH HUB <span className=' text-rose-500 font-bold'>{new Date().getFullYear()}</span></small>
            </div>
        </footer>
    );
};

export default Footer;