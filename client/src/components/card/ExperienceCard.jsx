import React, { useState } from 'react'

const ExperienceCard = ({ imageUrl, title }) => {

    const [Click, setClick] = useState(false)

    function onclick() {
        setClick(!Click)
    }

    return (
        <>
            <div onClick={onclick} className='ExperienceCardDiv d-flex align-items-center justify-content-center' style={{ backgroundImage: `url(${imageUrl})` }}>
                <div className={Click ? "effect" : ""}></div>
            </div >
        </>
    )
}

export default ExperienceCard
