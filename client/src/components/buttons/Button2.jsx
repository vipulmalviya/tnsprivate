import React, { useState } from 'react';
import { BsExclamationLg } from 'react-icons/bs';
import { IoAlert } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";

const Button2 = ({ children, linkprop, propdata1, propdata2 }) => {
  const [clicked, setClicked] = useState(false);
  const isDisabled = !propdata1 || !propdata2 ;

  const handleClick = (event) => {
    if (isDisabled) {
      event.preventDefault();
      if (!clicked) {
        toast.error(<span>This information is required</span>);
        setClicked(true);
      }
    }
  };

  return (
    <button
      className={`mainbtn align-items-center justify-content-center d-flex  ${isDisabled ? 'disabled' : ''}`}
      onClick={handleClick}
    >
      <Link
        className='d-flex align-items-center justify-content-center gap-2 '
        style={{ pointerEvents: isDisabled ? 'none' : 'auto' }}
        to={linkprop}
      >
        {children}
      </Link>
    </button>
  );
}

export default Button2;
