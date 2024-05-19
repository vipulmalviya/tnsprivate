import React from 'react'
import "./Button.css"
import { Link } from 'react-router-dom'

const Button = ({children ,sty,col,onClickprop,colorProp,value,linkprop ,func}) => {
  return (
    <button  onSubmit={func} data-value={value} onClick={onClickprop} className={`add mainbtn align-items-center justify-content-center d-flex ${colorProp ? "bg-white" : "" }`} style={{background:sty ,color:col}}>
      <Link className='d-flex align-items-center justify-content-center gap-2' to={linkprop}>
      {children}
      </Link>
    </button>
  )
}

export default Button
