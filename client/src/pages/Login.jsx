import React, { Fragment, useState } from 'react'
import Button from '../components/buttons/Button.jsx';
import ButtonSec from '../components/buttons/ButtonSec.jsx';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import CuratedSlider from '../components/Curated-Lists/CuratedSlider.jsx';
import { FcGoogle } from 'react-icons/fc';
import SecNav from '../components/secNav/SecNav.jsx';
import { FaHammer } from 'react-icons/fa';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import { BsFacebook } from "react-icons/bs"

const Login = ({ clickkro, open2, prop }) => {
  const navigate = useNavigate()

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios.post('http://localhost:5000/login', { email, pass })
  //     .then(result => {
  //       console.log(result);
  //       if (result.data === "success") {
  //         navigate('/Home');
  //       }
  //     })
  //     .catch(err => console.log(err));
  // }

  return (
    <Fragment>
      <SecNav />
      <section className='fullSection border-0 d-flex align-items-start justify-content-center'>
        <div className="px-4  containerSm d-flex align-items-start justify-content-cente flex-column gap-2">
          <div className='pagehadding'>
            <h1>Welcome to The Next Stream!</h1>
            <p>Your gateway to personalised movie and TV series recommendations.</p>
          </div>
          <form className="loginForm d-flex align-items-center justify-content-center flex-column gap-4">
            <label className="gap-1 d-flex flex-column">Email address
              <input placeholder='' type="text" />
            </label>
            <label className=" gap-1 d-flex flex-column">Password
              <input placeholder='' type="text" />
            </label>
            <Button linkprop={"/home"}>log in</Button >
          </form>
          <p className='my-3 sperator d-flex align-items-center justify-content-center'>
            OR
          </p>
          <div className='buttonDiv d-flex align-items-start justify-content-cente flex-column gap-2'>
            <Button><FcGoogle />Continue with Google</Button>
            <Button><BsFacebook />Continue with Facebook</Button>
          </div>
          <p className='mt-3'>Dont't have an account? <span onClick={() => navigate('/register')} >Signup now!</span ></p>
        </div>
      </section>
    </Fragment>
  )
}

export default Login
