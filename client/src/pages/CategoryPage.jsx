import React, { Fragment, useState } from 'react'
import { MdArrowForward } from 'react-icons/md'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Cards from '../components/card/Card';
import { ImForward, ImForward2 } from 'react-icons/im';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
const CategoryPage = () => {
    const array = [
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

        }
    ]

    const [Par, setPar] = useState("movie")

    function category(params) {
        setPar(params.target.innerText)
    }


    const responsive = {
        superlargedesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5.7,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5.3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2.5,
        },
        mobile: {
            // margin:"200px",
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
    };
    return (
        <Fragment>
            <section className='categoryCardSection d-flex align-items-center justify-content-center'>
                <div className='container d-flex align-items-center'>
                    <div className="dropdown">
                        <button className=" Active dropdown-toggle d-flex align-items-center justify-content-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <h6>{Par}</h6>
                        </button>
                        <ul className="dropdown-menu" >
                            <li><button onClick={category} className="dropdown-item" type="button"><MdArrowForward />TV Series</button></li>
                            <li><button onClick={category} className="dropdown-item" type="button"><MdArrowForward />Movies</button></li>
                            <li><button onClick={category} className="dropdown-item" type="button"><MdArrowForward />Curated List</button></li>
                        </ul>
                    </div>
                    <Carousel
                        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                        responsive={responsive}
                        className='innerContianer d-flex gap-2 align-items-center'>
                        {array.map((elem, index) => {
                            return <card key={index} data-name={elem.category} className='Categorybtns'
                            >
                                {elem.value}
                            </card>
                        })}
                    </Carousel>
                </div>
            </section>
            <section className='pt-5 pb-5'>
                <div className="container">
                    <div className="breadcrumb">
                        <h3>Showing results for <span>{"Hidden Gems"} / {"Tv Series"}</span></h3>
                        <p className=''>Search only for <span>{"Hidden Gems"}</span></p>
                    </div>
                    <div className="cardsitems">
                        {array.map((elem) => {
                            return <Cards Poster={elem.Poster} btn={true} Title={elem.title} watch={92.9} catagory={"comady, drama"} />
                        })}
                    </div>
                </div>
            </section>
            <section className='pt-5 pb-5'>
                <div className="container d-flex align-content-center justify-content-center">
                    <nav aria-label="Page navigation"
                        className='bg-transparent'
                    >
                        <ul className="pagination mb-0  d-flex align-items-center justify-content-center gap-2 ">
                            <li className=" page-item disabled"><a className="page-link " href="#"><IoIosArrowBack />Previous</a></li>
                            <li className="page-item active"><a className="page-link acitve" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item "><a className="page-link" href="#">3</a></li>
                            <li className="page-item active "><a className="page-link" href="#">Next < IoIosArrowForward/ ></a></li>
                        </ul>
                    </nav>
                </div>
            </section>
        </Fragment>
    )
}

export default CategoryPage
