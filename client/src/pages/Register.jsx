import React, { Fragment, useState } from 'react'
import Button from '../components/buttons/Button.jsx';
import ButtonSec from '../components/buttons/ButtonSec.jsx';
import axios from 'axios'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc';
import SecNav from '../components/secNav/SecNav.jsx';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import { BsFacebook } from 'react-icons/bs';

const Register = ({ click, prop, open }) => {
    const navigate = useNavigate()
    const [password, setPassword] = useState(false)

    // const [open, setOpen] = useState(false)
    const [email, setEmail] = useState()
    const [pass, setPass] = useState()
    // const navigate = useNavigate(); // Initialize the useNavigate hook

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     axios.post('http://localhost:5000/register', { email, pass })
    //         .then(result => {
    //             console.log(result);
    //             navigate('/login');
    //         })
    //         .catch(err => console.log(err));
    //     // console.log(email,pass);


    function passfunc(params) {
        setPassword(!password)
    }

    return (
        <Fragment>
            <SecNav />
            <section className='fullSection border-0 d-flex align-items-start justify-content-center'>
                <div className="containerSm d-flex align-items-start justify-content-cente flex-column gap-2">
                    <div className='pagehadding'>
                        <h1>Create an TNS account </h1>
                        <p>It will help provide you a specific room for your saved information</p>
                    </div>
                    <form className="registerForm d-flex align-items-center justify-content-center flex-column gap-4">
                        <label className="gap-1 d-flex flex-column">Email address
                            <input placeholder='' type="text" />
                        </label>
                        <label className=" gap-1 d-flex flex-column">Password
                            <div className='passwordinput w-100 position-relative'>
                                <input onChange={(e) => setPass(e.target.value)} autoComplete="current-password" type={password ? "password" : "text"} />
                                <span onClick={passfunc}>{password ? <IoIosEyeOff /> : <IoIosEye />}</span>
                            </div>
                        </label>
                        <div className='switchbtn d-flex'>
                            <span className="switch d-flex align-items-start">
                                <input id="switch-rounded" type="checkbox" />
                                <label htmlFor="switch-rounded">
                                    <img src="imgage" alt="" />
                                </label>
                                <p className='d-flex align-items-start'>Receive great facts about great cinema,our technical updates and more.</p>
                            </span>
                        </div>
                        <Button>Continue with Email</Button>
                    </form>
                    <p className='my-3 sperator d-flex align-items-center justify-content-center'>
                        OR
                    </p>
                    <div className='buttonDiv d-flex align-items-start justify-content-cente flex-column gap-2'>
                        <Button><FcGoogle />Continue with Google</Button>
                        <Button><BsFacebook />Continue with Facebook</Button>
                    </div>
                    <p className='mt-3 mb-0'>By Signing up i agree to Thenextstream’s <span> Terms of Service </span> and <span> Privacy Policy.</span></p>
                    <p className='m-0'>Already have an account? <span onClick={() => navigate('/login')}> Log in.</span></p>
                </div>
            </section>
        </Fragment >
    )
}

export default Register
