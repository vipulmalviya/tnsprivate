import React, { useEffect, useRef, useState } from 'react';
import "./movieSlider.css";
// import OwlCarousel from 'react-owl-carousel';
import Card from '../card/Card.jsx';
import useFetch from '../fetch/useFetch.jsx';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const MovieSlider = ({ title, type }) => {
    // const [movies, setMovies] = useState([]);
    // const apiKey = '07d7941833065b1ddd54a729aaa554e5';
    // const fetchMovieData = async () => {
    //     try {
    //         const url = `https://api.themoviedb.org/3/discover/${type}?api_key=${apiKey}`;
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
    
    // console.log(movies);



    const [Watchlist, setWatchlist] = useState([])
    function cartfunc(params) {
        if (params.target.classList.contains("add")) {
            // alert("movie added")
            setWatchlist(Lcard[params.target.dataset.value])
        }
        
    }
    // console.log(Watchlist);

    const Lcard = [
        {
            id: 1,
            original_title: "The Godfather",
            Genre: [
                "Crime, ",
                "Drama"
            ],
            Runtime: "2h 55m",
            Censor_Rating: "CBFC: R",
            Release_Date: "1972",
            Directed_By: "Francis Ford Coppola",
            Written_By: "Mario Puzo & Francis Ford Coppola",
            Cinematograhy: "Gordon Willis",
            Accolades: "Nominated & won Oscar's for Best Picture, Best Actor, Best Adapted Screenplay",
            Plot: "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son, Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
            Abailibility_in_india: "On Subs: Prime Video",
            poster_path: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
            popularity: "91.5",
        },
        {
            id: 2,
            original_title: "The Godfather 2",
            Genre: [
                "Crime, ",
                "Drama"
            ],
            Runtime: "3h 22m",
            Censor_Rating: "CBFC: A",
            Release_Date: "1974",
            Directed_By: "Francis Ford Coppola",
            Written_By: "Mario Puzo & Francis Ford Coppola",
            Cinematograhy: "Gordon Willis",
            Accolades: "Nominated & won Oscar's for Best Picture, Best Actor, Best Adapted Screenplay",
            Plot: "Vito's popularity in the underworld is on the rise, while his son, Michael's career is swinging downwards. In order to redeem himself, Michael must fight his enemies, including his own brother.",
            Abailibility_in_india: "On Subs: Prime Video",
            poster_path: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
            popularity: "91.5",
        },
        {
            id: 3,
            original_title: "The Godfather 3",
            Genre: [
                "Crime, ",
                "Drama"
            ],
            Runtime: "2h 42m",
            Censor_Rating: "CBFC: R",
            Release_Date: "1990",
            Directed_By: "Francis Ford Coppola",
            Written_By: "Mario Puzo & Francis Ford Coppola",
            Cinematograhy: "Gordon Willis",
            Accolades: "Nominated & won Oscar's ",
            Plot: "Michael Corleone decides to put an end to all the criminal activities his family is involved in. However, the mob leader refuses to let him go. Also, his nephew wants a piece of his criminal empire.",
            Abailibility_in_india: "On Rent: YouTube",
            poster_path: "https://m.media-amazon.com/images/M/MV5BNWFlYWY2YjYtNjdhNi00MzVlLTg2MTMtMWExNzg4NmM5NmEzXkEyXkFqcGdeQXVyMDk5Mzc5MQ@@._V1_.jpg",
            popularity: "91.5",
        },
        {
            id: 4,
            original_title: "2001: A Space Odyssey ",
            Genre: [
                "Adventure, ",
                "Sci-Fi"

            ],
            Runtime: "2h 29m",
            Censor_Rating: "CBFC: U",
            Release_Date: "1968",
            Directed_By: "Stanley Kubrick",
            Written_By: "Stanley Kubrick & Arthur C. Clarke",
            Cinematograhy: "Geoffrey Unsworth",
            Accolades: "Nominated & Won Oscar's for Best Special Visual Effects",
            Plot: "Humanity discovers a mystifying, artificial object buried underneath the lunar surface. With the assistance of HAL 9000, an intelligent computer, mankind embarks on an interesting quest.",
            Abailibility_in_india: "On Rent - Prime, Apple Tv, Google Movies",
            poster_path: "https://upload.wikimedia.org/wikipedia/en/1/11/2001_A_Space_Odyssey_%281968%29.png",
            popularity: "91.5",
        },
        {
            id: 5,
            original_title: "The shining",
            Genre: [
                "Psychological, ",
                "Horror"
            ],
            Runtime: "2h 16m",
            Censor_Rating: "CBFC: A",
            Release_Date: "1980",
            Directed_By: "Stanley Kubrick",
            Written_By: "Stanley Kubrick & Diane Johnson",
            Cinematograhy: "John Alcott",
            Accolades: "Award for Worst Director & Actress",
            Plot: "Jack and his family move into an isolated hotel with a violent past. Living in isolation, Jack begins to lose his sanity, which affects his family members.",
            Abailibility_in_india: "On Rent - Prime, Apple Tv, Google Movies, YouTube",
            poster_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1uTHLLpBhlXQEVDzar5kTUuDxo99jueJWXgVeTaQN1N6N58Tq",
            popularity: "91.5",
        },
        {
            id: 6,
            original_title: "The shining",
            Genre: [
                "Psychological, ",
                "Horror"
            ],
            Runtime: "2h 16m",
            Censor_Rating: "CBFC: A",
            Release_Date: "1980",
            Directed_By: "Stanley Kubrick",
            Written_By: "Stanley Kubrick & Diane Johnson",
            Cinematograhy: "John Alcott",
            Accolades: "Award for Worst Director & Actress",
            Plot: "Jack and his family move into an isolated hotel with a violent past. Living in isolation, Jack begins to lose his sanity, which affects his family members.",
            Abailibility_in_india: "On Rent - Prime, Apple Tv, Google Movies, YouTube",
            poster_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1uTHLLpBhlXQEVDzar5kTUuDxo99jueJWXgVeTaQN1N6N58Tq",
            popularity: "91.5",
        },
        {
            id: 7,
            original_title: "The shining",
            Genre: [
                "Psychological, ",
                "Horror"
            ],
            Runtime: "2h 16m",
            Censor_Rating: "CBFC: A",
            Release_Date: "1980",
            Directed_By: "Stanley Kubrick",
            Written_By: "Stanley Kubrick & Diane Johnson",
            Cinematograhy: "John Alcott",
            Accolades: "Award for Worst Director & Actress",
            Plot: "Jack and his family move into an isolated hotel with a violent past. Living in isolation, Jack begins to lose his sanity, which affects his family members.",
            Abailibility_in_india: "On Rent - Prime, Apple Tv, Google Movies, YouTube",
            poster_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1uTHLLpBhlXQEVDzar5kTUuDxo99jueJWXgVeTaQN1N6N58Tq",
            popularity: "91.5",
        },
        {
            id: 8,
            original_title: "The shining",
            Genre: [
                "Psychological, ",
                "Horror"
            ],
            Runtime: "2h 16m",
            Censor_Rating: "CBFC: A",
            Release_Date: "1980",
            Directed_By: "Stanley Kubrick",
            Written_By: "Stanley Kubrick & Diane Johnson",
            Cinematograhy: "John Alcott",
            Accolades: "Award for Worst Director & Actress",
            Plot: "Jack and his family move into an isolated hotel with a violent past. Living in isolation, Jack begins to lose his sanity, which affects his family members.",
            Abailibility_in_india: "On Rent - Prime, Apple Tv, Google Movies, YouTube",
            poster_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1uTHLLpBhlXQEVDzar5kTUuDxo99jueJWXgVeTaQN1N6N58Tq",
            popularity: "91.5",
        },

    ];
    // const { data, loading } = useFetch(`/discover/${type}`)

    // const skItem = () => {
    //     return (
    //         <div className="card">
    //             <div className='posterBlock skeleton' />
    //             <div className='textBlock skeleton'>
    //                 <span className='d-flex'>
    //                     <h4></h4>
    //                     <img height={"30px"} src="" alt="" />
    //                 </span>
    //                 <span className='d-flex'>
    //                     <p></p>
    //                     <span className="number"></span>
    //                 </span>
    //                 <button className='skeleton'><Link to=""></Link></button>
    //             </div>
    //         </div>
    //     )
    // }

    const responsive = {
        superlargedesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 7,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 7,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2.5,
        },
        mobile: {
            // margin:"200px",
            breakpoint: { max: 464, min: 0 },
            items: 1.5,
        }
    };
    return (
        <section>
            <div className="container ">
                <h3 className='SectionLable'>{title} <IoIosArrowForward /></h3>
                {<Carousel className="MovieCards flex"
                    responsive={responsive}
                    removeArrowOnDeviceType={["tablet", "mobile"]}>
                    {Lcard.map((elem, index) =>
                        <Card value={index} onclick={cartfunc} key={elem.id} Poster={elem.poster_path} Title={elem.original_title || elem.original_name} catagory={elem.Genre} watch={elem.popularity} btn={true} />
                    )}
                </Carousel>}
            </div>
        </section>
    )
}

export default MovieSlider;
