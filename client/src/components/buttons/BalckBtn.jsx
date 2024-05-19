import React from 'react'
import "./Button.css"
import { Link } from 'react-router-dom'

const BlackBtn = ({ children, linkprop }) => {
  return (
    <button className="add BlackBtn align-items-center d-flex">
      <Link className='d-flex align-items-center justify-content-center gap-2' to={linkprop}>
        {children}
      </Link>
    </button>
  )
}

export default BlackBtn
