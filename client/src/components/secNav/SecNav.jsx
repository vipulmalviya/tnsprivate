import React, { useState } from 'react'
import "./SecNav.css"
import { Link } from 'react-router-dom'
import { CiSearch } from 'react-icons/ci'
import { IoClose } from 'react-icons/io5'
const SecNav = ({ }) => {

    // const [Nav, setNav] = useState(false)


    return (
        <header className=' SecNavHeader'>
            <nav className=' container d-flex align-items-center'>
                <div className=" d-flex">
                    <Link to="/" className="logo"><img height={"100%"} weight={"100%"} src="images/latestlogo.svg" alt="" /></Link>
                </div>
            </nav >
        </header >
    )
}

export default SecNav
