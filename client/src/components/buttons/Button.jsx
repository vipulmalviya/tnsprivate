import React, { useState } from 'react';
import { BsExclamationLg } from 'react-icons/bs';
import { IoAlert } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Button = ({ children, linkprop, onclick}) => {

  return (
    <button
    onClick={onclick}
      className={`mainbtn align-items-center justify-content-center d-flex`}>
      <Link
        className='d-flex align-items-center justify-content-center gap-2'
        to={linkprop}>
        {children}
      </Link>
    </button>
  );
}

export default Button;
