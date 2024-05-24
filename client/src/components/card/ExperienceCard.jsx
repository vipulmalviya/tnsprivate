import React, { useState } from 'react'

const ExperienceCard = ({ imageUrl, title }) => {

    const [Click, setClick] = useState(false)

    function onclick() {
        setClick(!Click)
    }

    return (
        <>
            <div onClick={onclick} className='ExperienceCardDiv d-flex align-items-center justify-content-center'>
                <div className='cardbg d-flex'>
                <img src={imageUrl} alt="" />
                <div className={`hover ${Click ? "effect" : ""}`}></div>
                </div>
            </div >
        </>
    )
}

export default ExperienceCard
