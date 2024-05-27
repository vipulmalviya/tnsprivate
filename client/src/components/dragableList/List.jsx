
import "./List.css"
import { FiTag } from 'react-icons/fi';
import { MdDone, MdOutlineDragIndicator } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { IoMdMore } from 'react-icons/io';
import WathlistOptionCard from "../card/WathlistOptionCard";
import { useEffect, useRef, useState } from "react";

const List = ({ number, title, genres, year, duration, rating, userRating, tag, onDragStart, onDragOver, onDrop, index, image }) => {

  const [ShowOption, setShowOption] = useState(false)

  const wrapperRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowOption(-1);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <>
      <div
        ref={wrapperRef}
        className='listItem position-relative container d-grid align-items-center justify-content-cetner p-3'
        draggable="true"
        onDragStart={(e) => onDragStart(e, index)}
        onDragOver={(e) => onDragOver(e, index)}
        onDrop={(e) => onDrop(e, index)}
      >
        <h4 className='div1 number'><MdOutlineDragIndicator className="hinglight" /> {number}</h4>
        <div className='div2 d-flex align-items-center justify-content-start gap-3'>
          <img height={"80px"} width={"50px"} src={image} alt="Movie Poster" style={{ borderRadius: "5px", }} />
          <div className='d-flex align-align-items-center justify-content-center flex-column gap-1'>
            <h4 className='mb-0'>{title}</h4>
            <p className='mb-0'> {genres}</p>
            <p className='mb-0'> {year} . {duration}</p>
          </div>
        </div>
        <h4 className='div3'>{rating}</h4>
        <h4 className='div4'>{userRating}</h4>
        <p className="hinglight div5 mb-0"><FiTag /> {tag}</p>
        <span className='position-relative div6 d-flex align-items-center justify-content-center gap-4'>
          <button><MdDone style={{ color: "#71E839", }} /></button>
          <button><RiDeleteBin6Line style={{ color: "#FE5E2C", }} /></button>
          <button className="position-relative"><IoMdMore onClick={() => setShowOption(index === ShowOption ? -1 : index)} style={{ color: "#FFFF", }} />
            {ShowOption === index && <WathlistOptionCard />}
          </button>
        </span>
      </div>
    </>
  );
};

export default List;
