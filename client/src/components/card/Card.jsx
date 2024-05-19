import React, { useState } from 'react'
import "./Card.css"
import Button from '../buttons/Button'
import { Link } from 'react-router-dom'
import ButtonSec from '../buttons/ButtonSec'
import { LuPencilLine } from "react-icons/lu";
import { MdDone } from 'react-icons/md'
import { BiPlus } from 'react-icons/bi'
import { IoIosPulse } from 'react-icons/io'
import { IoAdd } from 'react-icons/io5'


const Card = ({ index, Poster, Title, catagory, watch, btn, onclick, value }) => {
    const [ChangeBtn, setChangeBtn] = useState(false)
    function btnchange() {
        setChangeBtn(!ChangeBtn)
    }
    return (
        <>
            <div onClick={onclick} className="singlecard" key={index}>
                <img height={"70%"} width={"100%"} src={Poster} alt="" />
                <div className='movieDetails d-flex justify-content-between flex-column'>
                    <div className=' d-flex justify-content-between'>
                        <span className='position-relative gap-1 h-75  d-flex justify-content-start align-items-start flex-column '>
                            <h4 data-toggle="tooltip" title={Title} >{Title}</h4>
                            <p>{catagory}</p>
                        </span>
                        <span className='logospan position-relative gap-2 h-75  d-flex flex-column justify-content-start align-items-center'>
                            <img className='mt-1' height={"20px"} src="images/TNS 1.svg" alt="" />
                            <span className="number">{watch}</span>
                        </span>
                    </div>{
                        btn
                            ? <Button value={value} colorProp={ChangeBtn} onClickprop={btnchange}>
                                {ChangeBtn ? <>{<MdDone />} Added</> : <>{<IoAdd />} Add to Watchlist</>}
                            </Button>
                            : <ButtonSec><LuPencilLine /> Write a Review </ButtonSec>
                    }
                </div>
            </div>
        </>
    )
}

export default Card
