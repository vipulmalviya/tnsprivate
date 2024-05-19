import React, { Fragment, useEffect, useState } from 'react'
import "./HandSlider.css"
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useFetch from '../../components/fetch/useFetch.jsx';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

const HandSlider = ({ title, type }) => {

    // document.querySelector(".owl-prev span").innerHTML = ">";


    // const [movies, setMovies] = useState([]);
    // const apiKey = '07d7941833065b1ddd54a729aaa554e5';
    // const fetchMovieData = async () => {
    //     try {
    //         const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&size=10`;
    //         const response = await fetch(url);
    //         const jsonData = await response.json();
    //         setMovies(jsonData.results);
    //     } catch (error) {
    //         console.error('Error fetching movie data:', error);
    //     }
    // };
    // useEffect(() => {
    //     fetchMovieData();
    // },[type]);

    // const { data, loading } = useFetch("/movie/upcoming")

    const Lcard = [
        {
            id: 1,
            poster_path: "images/saltburn.png",
        },
        {
            id: 2,
            poster_path: "images/KillersOfTheFlowerMoon.png",
        },
        {
            id: 3,
            poster_path: "images/12fail.png",
        },
        {
            id: 4,
            poster_path: "images/Barbie.png",
        },
        {
            id: 5,
            poster_path: "images/ThreeOfUs.png",
        },
        {
            id: 6,
            poster_path: "images/Sambhadur.png",
        },
        {
            id: 7,
            poster_path: "images/wonka.png",
        },
        {
            id: 8,
            poster_path: "images/salaar.png",
        },
        {
            id: 9,
            poster_path: "images/killerSoup.png",
        },
        {
            id: 10,
            poster_path: "images/napoleo.png",
        },
    ];

    const responsive = {
        superlargedesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
          },
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4.5,
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2.5,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1.7,
          }
    };

    return (
        <section>
            <div className="container">
                <h3 className='SectionLable '>Top Hand-Pick Suggestions <IoIosArrowForward /> </h3>
                <Carousel className="HandCards d-flex"
                    responsive={responsive}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                    {Lcard.map((elem, index) => <Link to={"/SingleMoviePage"} className="card d-flex align-items-center justify-content-center" key={index}>
                        <h1 className='d-flex align-items-center justify-content-center'>{index + 1}</h1>
                        <img height={"100%"} width={"100%"} src={elem.poster_path} alt="" />
                    </Link>)}
                </Carousel>
            </div>
        </section>
    )
}

export default HandSlider
