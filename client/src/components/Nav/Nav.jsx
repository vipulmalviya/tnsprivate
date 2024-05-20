import React, { createContext, useState } from 'react'
import "./Nav.css"
import { Link, useNavigate } from 'react-router-dom'
import { MdArrowForward, MdKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'
import { IoMdClose } from 'react-icons/io'
import { CiSearch } from 'react-icons/ci'
import { AiOutlineAppstoreAdd } from 'react-icons/ai'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Nav = ({ setQuery, query }) => {


    function active(elem) {
        elem.classList.toggle("at")
    }


    const [Nav, setNav] = useState(false)

    function NavFunc(params) {
        setNav(!Nav)
    }

    const navigate = useNavigate()

    const handleNavigate = (event) => {
        navigate('/search')
    };


    const responsive = {
        superlargedesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 12,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 12,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 10,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 6,
        }
    }


    const array = [
        {
            category: "Top_Rated",
            value: "Top Rated",
            Poster: "images/wonka.png",
            title: "Wonka",
        },
        {
            category: "Top_Rated",
            value: "Top Rated",
            Poster: "images/wonka.png",
            title: "Wonka",
        },
        {
            category: "Top_Rated",
            value: "Top Rated",
            Poster: "images/wonka.png",
            title: "Wonka",
        },
        {
            category: "Top_Rated",
            value: "Top Rated",
            Poster: "images/wonka.png",
            title: "Wonka",
        },
        {
            category: "Top_Rated",
            value: "Top Rated",
            Poster: "images/wonka.png",
            title: "Wonka",
        },
        {
            category: "AcademyWinner",
            value: "Academy Winner",
            Poster: "images/wonka.png",
            title: "Wonka",

        },
        {
            category: "Around_the_Globe",
            value: "Around the Globe",
            Poster: "images/wonka.png",
            title: "Wonka",

        },
        {
            category: "User’s_Choice",
            value: "User’s Choice",
            Poster: "images/wonka.png",
            title: "Wonka",

        },
        {
            category: "Handpicked",
            value: "Handpicked",
            Poster: "images/wonka.png",
            title: "Wonka",

        },
        {
            category: "Classics",
            value: "Classics",
            Poster: "images/wonka.png",
            title: "Wonka",

        },
        {
            category: "Classics",
            value: "Classics",
            Poster: "images/wonka.png",
            title: "Wonka",

        },
        {
            category: "Classics",
            value: "Classics",
            Poster: "images/wonka.png",
            title: "Wonka",

        },
        {
            category: "Family_Friendly",
            value: "Family Friendly",
            Poster: "images/wonka.png",
            title: "Wonka",

        },
        {
            category: "Family_Friendly",
            value: "Family Friendly",
            Poster: "images/wonka.png",
            title: "Wonka",

        },
        {
            category: "Family_Friendly",
            value: "Family Friendly",
            Poster: "images/wonka.png",
            title: "Wonka",

        },
        {
            category: "Family_Friendly",
            value: "Family Friendly",
            Poster: "images/wonka.png",
            title: "Wonka",

        },
        {
            category: "Family_Friendly",
            value: "Family Friendly",
            Poster: "images/wonka.png",
            title: "Wonka",

        }
    ]



    return (
        <>
            <header className='d-flex align-items-center justify-content-center'>
                <div className="container">
                    <nav className='d-flex align-items-center gap-3'>
                        <div className="left d-flex">
                            <Link to="/" className="logo"><img height={"100%"} weight={"100%"} src="images/latestlogo.svg" alt="" /></Link>
                        </div>
                        <div className="navM gap-4 align-items-center justify-content-end">
                            <form action="" className='d-flex align-items-center '>
                                <input
                                    onClick={handleNavigate}
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    type="text"
                                    placeholder='Search for movies, tv series, curated lists... ' />
                                <CiSearch />
                            </form>
                            <div className='watchlistDiv d-flex gap-2 align-items-center'>
                                <img height={"100%"} width={"100%"} src="images/watchlistplus.svg" alt="watchlist plus icone" />
                                <p>My Watchlist</p>
                            </div>
                            <img data-toggle="tooltip" title="My Profile" height={"35px"} width={"35px"} src="images/Ellipse 33.svg" alt="" />
                            <div className="hamburgur" onClick={NavFunc} >
                                <img height={"30px"} width={"30px"} src="images/menu-alt-1.svg" alt="" />
                            </div>
                        </div>
                        <div className={`p-2 side-menu d-flex align-items-center justify-content-start flex-column ${Nav ? "open" : ""}`}>
                            <IoMdClose className='closebtn' onClick={NavFunc} />
                            <div className='w-75 d-flex justify-content-center flex-column '>
                                <div className="dropdown">
                                    <button className=" dropdown-toggle d-flex align-items-center justify-content-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <h2>Movies</h2>
                                        {/* { true ?<MdOutlineKeyboardArrowUp /> :<MdKeyboardArrowDown>} */}
                                    </button>
                                    <ul className="dropdown-menu" >
                                        <li><button className="dropdown-item" type="button"><MdArrowForward /> Action</button></li>
                                        <li><button className="dropdown-item" type="button"><MdArrowForward /> Another action</button></li>
                                        <li><button className="dropdown-item" type="button"><MdArrowForward /> Something else here</button></li>
                                    </ul>
                                </div>
                                <div className="dropdown">
                                    <button className=" dropdown-toggle d-flex align-items-center justify-content-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <h2>TV Series</h2>
                                    </button>
                                    <ul className="dropdown-menu" >
                                        <li><button className="dropdown-item" type="button"><MdArrowForward /> Action</button></li>
                                        <li><button className="dropdown-item" type="button"><MdArrowForward /> Another action</button></li>
                                        <li><button className="dropdown-item" type="button"><MdArrowForward /> Something else here</button></li>
                                    </ul>
                                </div>
                                <ul className='navbar-nav'>
                                    <li><Link to="/WatchlistPage" className="dropdown-item" type="button">Curated Lists</Link></li>
                                    <li><button className="dropdown-item" type="button">Weekend Watchlists</button></li>
                                    <li><button className="dropdown-item" type="button">Film’s Club</button></li>
                                    <li><button className="dropdown-item" type="button">Viewer’s Guide</button></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header >
            <div className="subHeader d-flex align-items-center justify-content-center">
                <Carousel
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    responsive={responsive}
                    className='container d-flex gap-2 align-items-center justify-content-start'>
                    {array.map((elem, index) => {
                        return <button onClick={(event) => active(event.currentTarget)} key={index} data-name={elem.category} className="Categorybtns d-flex align-items-center justify-content-center"> <span>{elem.value}</span>
                        </button>
                    })}
                </Carousel>

            </div >
        </>
    )
}

export default Nav