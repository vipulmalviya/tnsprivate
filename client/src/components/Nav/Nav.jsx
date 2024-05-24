import React, { createContext, useState } from 'react'
import "./Nav.css"
import { Link, useNavigate } from 'react-router-dom'
import { MdArrowForward, MdKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md'
import { IoMdClose } from 'react-icons/io'
import { CiSearch } from 'react-icons/ci'
import { AiOutlineAppstoreAdd } from 'react-icons/ai'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Tagebutton from '../buttons/Tagebutton'

const Nav = ({ setQuery, query }) => {

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
            breakpoint: { max: 4000, min: 1860 },
            items: 10,
        },
        desktop: {
            breakpoint: { max: 1860, min: 1280 },
            items: 10,
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

    const Genres = ["Happy", "Sad", "Adventurous", "Romantic", "Scary", "Thought-Provoking", "Thrilling", "Slowburn", "Dark", "Mind-Bending", "Family-Friendly", "Epic", "Uplifting", "Mystical", "Humorous", "Nostalgic"]

    const [selectedGenres, setSelectedGenres] = useState([]);

    const handleGenreSelect = (genre) => {
        setSelectedGenres((prevSelected) => {
            if (prevSelected.includes(genre)) {
                return prevSelected.filter(g => g !== genre);
            } else if (prevSelected.length < 10) {
                return [...prevSelected, genre];
            } else {
                return prevSelected;
            }
        });
    };


    return (
        <div className='position-sticky top-0 z-3'>
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
                                <img height={"100%"} width={"100%"} src="images/bookmark.svg" alt="watchlist icone" />
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
                    {Genres.map((elem, index) => (
                        <Tagebutton
                            key={index}
                            tag={elem}
                            isSelected={selectedGenres.includes(elem)}
                            onSelect={handleGenreSelect}
                        />
                    ))}
                </Carousel>

            </div >
        </div>
    )
}

export default Nav