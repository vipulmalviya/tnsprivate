import React, { useState } from 'react'
import "./Footer.css"
import { FaInstagram } from 'react-icons/fa'
import { ImFacebook } from 'react-icons/im'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = () => {


    return (
        <footer className='footer'>
            <div className='container d-flex align-content-center'>
                <div className="fleft container footerM d-flex">
                    <div className='vip d-flex flex-column align-content-center '>
                        <p>We at TheNextStream are determined to make your life binge by providing you a Handpicked collection of Best Web Series & Movies which you can enjoy solo, with your family and friends.</p>
                        <div className='socialdiv'>
                            <h3> Join our Fight-Club </h3>
                            <div className='socialIcone gap-1 d-flex'>
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
                    </div>
                </div>
                <div className='fright container d-flex align-items-start justify-content-center' >
                    <div className='d-flex flex-column gap-2'>
                        <h3 className='hadd'>What to Watch</h3>
                        <div className='d-flex footeM-r-box'>
                            <div className='links'>
                                <p>Cult Classic Movies</p>
                                <p>Award Winning Movies</p>
                                <p>Best TV Shows</p>
                                <p>Binge Worthy TV Show</p>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex flex-column gap-2'>
                        <h3 className='hadd'>What’s Streaming</h3>
                        <div className='d-flex footeM-r-box'>
                            <div className='links'>
                                <p>What’s On Netflix</p>
                                <p>What’s On Prime Video</p>
                                <p>What’s On Jio Cinema</p>
                                <p>What’s On Mubi</p>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex flex-column gap-2'>
                        <h3 className='hadd'>Company</h3>
                        <div className='d-flex footeM-r-box'>
                            <div className='links'>
                                <p>About TheNextStream</p>
                                <p>What is TNS Score?</p>
                                <p>Buy a Coffee for Us</p>
                                <p>Help</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footerb">
                <div className='footerbcontainer container d-flex align-align-items-center justify-content-between'>
                    <p className='d-flex align-items-center mb-0'>© 2024 TheNextstream. All Rights Reserved.</p>
                    <Link to="/" className='Flogo d-flex align-items-center'>
                        <img src="images/latestlogo.svg" alt="" />
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
