import React, { Fragment, useState } from 'react'
import Button from '../components/buttons/Button.jsx';
import ButtonSec from '../components/buttons/ButtonSec.jsx';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc';
import SecNav from '../components/secNav/SecNav.jsx';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';

const Register = ({ click, prop, open }) => {
    // const [open, setOpen] = useState(false)
    const [email, setEmail] = useState()
    const [pass, setPass] = useState()
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/register', { email, pass })
            .then(result => {
                console.log(result);
                navigate('/login');
            })
            .catch(err => console.log(err));
        // console.log(email,pass);
    }


    const [show, setShow] = useState(false)
    const [password, setPassword] = useState(false)

    function NavFunc() {
        setShow(!show)
    }


    function passfunc(params) {
        setPassword(!password)
    }
    return (
        <Fragment>
            <SecNav NavFunc={NavFunc} show={show} />
            <div className='ragisterdiv d-flex'>
                <div className='container d-flex'>
                    <div
                        initial={{ left: "100%" }}
                        animate={{ left: "0%" }}
                        transition={{ duration: 0.5 }}
                        exit={{ left: "100%" }}
                        className="Rleft d-flex align-items-center justify-content-center" >
                        <h1 className='hinglight'>Find Classics to Hidden Gems: Where Every Frame Tells a Tale</h1>
                        <p>Discover, Explore, and Experience the Best in Movies & Shows, Curated Just for You</p>
                        <li><img src='images/Icon.svg' className="icone" /><span>Personalized Recommendations</span></li>
                        <li><img src='images/Icon (2).svg' className="icone" /><span>Curated Suggestion lists</span></li>
                        <li><img src='images/Icon (3).svg' className="icone" /><span>Community Engagement</span></li>
                        <li><img src='images/Icon (4).svg' className="icone" /><span>AI-Powered Assistance</span></li>
                        <li><img src='images/Icon (2).svg' className="icone" /><span>Unlock Unseen Treasures</span></li>
                        <li><img src='images/Icon (3).svg' className="icone" /><span>Shareable Watch lists to Collaborate</span></li>
                    </div>
                    <div
                        initial={{ right: "-50%" }}
                        animate={{ right: show ? "-100%" : "0%" }}
                        transition={{ duration: 0.5 }}
                        exit={{ right: "-50%" }}
                        className={`Rright d-flex align-items-end justify-content-center ${show ? "open2" : " "} `} >
                        <h2 className='subhadding hinglight'>Create an account</h2>
                        <p>It will help provide you a specific room for your saved information</p>
                        <form
                            className='Rform d-flex' >
                            <label >Email address</label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                autoComplete='username'
                                type="email" />
                            <label>Password</label>
                            <div className='passwordinput w-100 position-relative'>
                                <input onChange={(e) => setPass(e.target.value)} autoComplete="current-password" type={password ? "password" : "text"} />
                                <span onClick={passfunc}>{password ? <IoIosEye /> : <IoIosEyeOff />}</span>
                            </div>
                            <div className='switchbtn d-flex'>
                                <span className="switch d-flex">
                                    <input id="switch-rounded" type="checkbox" />
                                    <label htmlFor="switch-rounded">
                                    </label>
                                    <p>Receive great facts about great cinema,  our <br /> technical updates and more.</p>
                                </span>
                            </div>
                            <Button func={handleSubmit} type={"submit"} >Sign up</Button>
                        </form>
                        <br />
                        <ButtonSec className="mb-1">
                            <FcGoogle />
                            <span>
                                Log in with Google
                            </span>
                        </ButtonSec>
                        <br />
                        <div className='Rfooter'>
                            <p>
                                By Signing up i agree to Thenextstream’s <span className='hinglight'>Terms of</span> <br /> <span className="hinglight">Service</span> and <span className="hinglight">Privacy Policy.</span>
                            </p>
                            <br />
                            <Link to="/login" onClick={prop}>Already have an account<span className='hinglight'> Log in</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default Register
