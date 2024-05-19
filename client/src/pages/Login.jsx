import React, { Fragment, useState } from 'react'
import Button from '../components/buttons/Button.jsx';
import ButtonSec from '../components/buttons/ButtonSec.jsx';
// import Home from '../HomePage/Home.jsx'
import { Link, useNavigate } from 'react-router-dom'
// import { motion } from 'framer-motion'
import axios from 'axios'
import CuratedSlider from '../components/Curated-Lists/CuratedSlider.jsx';
import { FcGoogle } from 'react-icons/fc';
import SecNav from '../components/secNav/SecNav.jsx';
import { FaHammer } from 'react-icons/fa';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';


const Login = ({ clickkro, open2, prop }) => {
  const [email, setEmail] = useState()
  const [pass, setPass] = useState()
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/login', { email, pass })
      .then(result => {
        console.log(result);
        if (result.data === "success") {
          navigate('/Home');
        }
      })
      .catch(err => console.log(err));
  }

  const [show, setShow] = useState(false)
  const [password, setPassword] = useState(false)

  function NavFunc(params) {
    setShow(!show)
  }

  function passfunc(params) {
    setPassword(!password)
  }

  return (
    <Fragment>
      <SecNav NavFunc={NavFunc} show={show} />
      <section
        initial={{ right: "-100%" }}
        animate={{ right: open2 ? "0%" : "-100%" }}
        transition={{ duration: 0.5 }}
        exit={{ right: "-50%" }}
        className="logindiv d-flex flex-column justify-content-center" >
        <div className='loginmaindiv d-flex align-items-center justify-content-center'>
          <CuratedSlider title={"Curated list just for you"} />
        </div>
        <div className={`loginformdiv d-flex flex-column justify-content-center ${show ? "open2" : ""}`}>
          <h2 className='subhadding hinglight'>Welcome Back!</h2>
          <p>Log in to your account</p>
          <form action="" onSubmit={handleSubmit} method="" className='Rform d-flex '>
            <label >Email address</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"
              type="email" />
            <label >Password</label>
            <div className='passwordinput w-100 position-relative'>
              <input onChange={(e) => setPass(e.target.value)} autoComplete="current-password" type={password ? "password" : "text"} />
              <span onClick={passfunc}>{password ? <IoIosEye /> : <IoIosEyeOff />}</span>
            </div>
            <Button>Log in</Button>
          </form>
          <br />
          <ButtonSec className="mb-1 d-flex">
            <FcGoogle />
            <p className='d-flex'>
              Log in with Google
            </p>
          </ButtonSec>
          <div className='Rfooter'>
            <Link onClick={prop} to="/">Dont't have an account?<span onClick={clickkro} className='hinglight'> Sign up now!</span></Link>
          </div>
        </div>
      </section>
    </Fragment >
  )
}

export default Login
