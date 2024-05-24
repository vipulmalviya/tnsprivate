import React, { useState } from 'react'
import "./Card.css"
import Button from '../buttons/Button'
import ButtonSec from '../buttons/ButtonSec'
import { Link } from 'react-router-dom'


const Modal = ({onclick , onclick2}) => {

    return (
        <>
            <section className='modal d-flex align-content-center justify-content-center'>
                <div className='modal_warrper d-flex align-items-center justify-content-between'>
                    <div className='modal-right flex-column d-flex align-items-start justify-content-center'>
                        <h1>Create a new watchlist</h1>
                        <form action="">
                            <input className='model-input' type="text" placeholder='Add a title in 5 words...' />
                        </form>
                        <div className='d-flex align-items-center justify-content-start gap-3' >
                            <Button onClick={onclick}>Continue</Button>
                            <Link onClick={onclick2} className='backbtn' rel="stylesheet" to="#"> Cancel </Link>
                        </div>
                    </div>
                    <div className='modal-left d-flex flex-column align-items-center justify-content-center'>
                        <h3>Pick an avatar</h3>
                        <div className='watchlistAvatar'>

                        </div>
                        <ButtonSec>Avatar Gallery</ButtonSec>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Modal
