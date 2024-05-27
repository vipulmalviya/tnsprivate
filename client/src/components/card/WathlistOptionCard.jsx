import React from 'react'
import "./Card.css"
import { GrShareOption } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";
import { HiOutlinePencil } from "react-icons/hi2";
import { PiCaretRightLight } from "react-icons/pi";

const WathlistOptionCard = () => {
    return (
        <div className='wathlistOptions position-absolute d-flex align-items-center justify-content-center'>
            <ul className='d-flex align-items-center justify-content-center flex-column'>
                <li><HiOutlinePencil /> Rename</li>
                <li><RiDeleteBinLine /> Delete List</li>
                <li><GrShareOption /> Share Watchlist <PiCaretRightLight /></li>
            </ul>
        </div>
    )
}

export default WathlistOptionCard
