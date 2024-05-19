import React, { useState } from 'react'
import "./Footer.css"
import { GoArrowUpRight } from 'react-icons/go'
import { FaInstagram } from 'react-icons/fa'
import { ImFacebook } from 'react-icons/im'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { IoIosArrowDropup } from 'react-icons/io'

const Footer = () => {


    return (
        <footer className='footer'>
            <div className="container footerT d-flex align-items-center">
                <Link to="/" className='Flogo'>
                    <img src="images/originallogo.svg" alt="" />
                </Link>
                <div className='social d-flex'>
                    <a href="https://www.instagram.com/thenextstream/">
                        <FaInstagram />
                    </a>
                    <a href="#">
                        <ImFacebook />
                    </a>
                    <a href="#">
                        <FaXTwitter />
                    </a>
                </div>
            </div>
            <div className="container footerM d-flex">
                <div className='footerM-l'>
                    <h2 className=''>
                        Still couldn’t figure out?<br /> What to watch?<br />
                        <span> Join our Fight-Club</span>
                    </h2>
                    <p>It’s free to join and helps finding underrated titles, around like minded there is a sense of cinema.</p>
                    <div className='footerbtns d-flex'>
                        <a href="https://www.instagram.com/thenextstream/"><img src="images/in.svg" alt="" /></a>
                        <a href=""><img src="images/Frame 50.svg" alt="" /></a>
                    </div>
                </div>
                <div className='footerM-r d-flex' >
                    <div className='d-flex flex-column gap-2'>
                        <h3 className=''>Usefull links</h3>
                        <div className='d-flex footeM-r-box'>
                            <div className='links'>
                                <p>About Thenextstream</p>
                                <p>What is TNS Score?</p>
                                <p>Buy an Advance for us</p>
                                <p>Contact</p>
                            </div>
                            <div className='links'>
                                <p>FAQ's</p>
                                <p>Term & Conditions</p>
                                <p>Privacy Policy</p>
                                <p>Help</p>
                            </div>
                        </div>
                        <div className="search">
                            <input type="email" className="input-with-icon" placeholder='Bandiya would love....' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='footerB d-flex align-content-center justify-content-center'>
                {/* <div></div> */}
                <p>© 2024 Silvertounge. All Rights Reserved.</p>
                <a href='#'><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="34" height="34" rx="17" stroke="#CDCDCD" />
                    <path d="M22.25 19.875L17.5 15.125L12.75 19.875" stroke="#CDCDCD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                </a>
            </div>
        </footer>
    )
}

export default Footer
