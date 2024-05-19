import React, { Fragment, useEffect, useRef } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import Button from "./../components/buttons/Button.jsx"
import ButtonSec from "./../components/buttons/ButtonSec.jsx"
import HandSlider from '../components/top-hand-pick-slider/HandSlider.jsx';
import MovieSlider from '../components/Top-Movies-Suggestions/MovieSlider.jsx';
import CuratedSlider from '../components/Curated-Lists/CuratedSlider.jsx';
import { IoIosArrowForward } from 'react-icons/io';
import { FaPlay } from 'react-icons/fa';
import { IoAdd } from 'react-icons/io5';
import BlackBtn from '../components/buttons/BalckBtn.jsx';
import HomeSlider from '../components/HomeBanner/HomeSlider.jsx';

const Home = () => {

  const Lcard = [
    {
      id: 1,
      Titlelogo: "images/oppenheimerlogo.svg",
      Genre: [
        "Biography, ",
        "Drama"
      ],
      Runtime: "2h 55m",
      Release_Date: "2023",
      Accolades: "During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project...",
      poster_path: "images/openhaimer.jpg",
      popularity: "92.5",
    },
    {
      id: 2,
      Titlelogo: "images/thebatman.png",
      Genre: [
        "Action, ",
        "Crime"
      ],
      Runtime: "2h 55m",
      Release_Date: "2022",
      Accolades: "During World War II, Lt. Gen. Leslie Groves Jr. appoints Batman is called to intervene when the mayor of Gotham City is murdered. Soon...",
      poster_path: "images/batmanhome.png",
      popularity: "92.5",
    },
    {
      id: 3,
      Titlelogo: "images/dunelogo.svg",
      Genre: [
        "Sci-fi, ",
        "Adventure"
      ],
      Runtime: "2h 55m",
      Release_Date: "2021",
      Accolades: "During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project...",
      poster_path: "images/dunehome.png",
      popularity: "92.5",
    },
    {
      id: 4,
      Titlelogo: "images/jokerlogo.svg",
      Genre: [
        "Crime ",
        "Thriller"
      ],
      Runtime: "2h 55m",
      Release_Date: "20219",
      Accolades: "Arthur Fleck, a party clown, leads an impoverished life with his ailing mother. However, when society shuns him and brands him as a freak....",
      poster_path: "images/jokerhome.png",
      popularity: "92.5",
    },
    {
      id: 5,
      Titlelogo: "images/avatarlogo.svg",
      Genre: [
        "Action, ",
        "Sci-fi"
      ],
      Runtime: "2h 55m",
      Release_Date: "2022",
      Accolades: "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora...",
      poster_path: "images/Avatarhome.png",
      popularity: "92.5",
    },
    {
      id: 6,
      Titlelogo: "images/theGreenKnightlogo.svg",
      Genre: [
        "Advanture, ",
        "Horror"
      ],
      Runtime: "2h 55m",
      Release_Date: "2021",
      Accolades: "Sir Gawain, King Arthur's young nephew, embarks on an adventurous journey and deals with ghosts, thieves and giants as he sets out to defeat Green Knight, a giant...",
      poster_path: "images/theGreenKnighthome.png",
      popularity: "92.5",
    },
    {
      id: 7,
      Titlelogo: "images/saltburnlogo.svg",
      Genre: [
        "Comedy, ",
        "Thriller"
      ],
      Runtime: "2h 55m",
      Release_Date: "2023",
      Accolades: "Distraught by his classmate Oliver's unfortunate living situation, Felix, a rich student, invites him over to his estate. Soon, a series of horrifying events engulf...",
      poster_path: "images/saltburnhome.png",
      popularity: "92.5",
    }

  ];
  // useEffect(() => {
  //   // gsap.registerPlugin(ScrollTrigger);
  //   // gsap.to(".SectionLable", {
  //   //   scrollTrigger: {
  //   //     trigger: ".carftSection .SectionLable",
  //   //     start: "top 80%", // Adjust as needed
  //   //     end: "bottom 20%", // Adjust as needed
  //   //   },
  //   //   y: "0rem",
  //   //   opacity: 1,
  //   //   duration: 1,
  //   // });


  //   // gsap.to(".pcontainer", {
  //   //   scrollTrigger: {
  //   //     trigger: ".pcontainer",
  //   //     start: "top 80%", // Adjust as needed
  //   //     end: "bottom 20%", // Adjust as needed
  //   //     markers:true,
  //   //   },
  //   //   y: "0rem",
  //   //   opacfromity: 1,
  //   //   duration: 1,
  //   // });

  //   // gsap.to(".pcontainer h2", {
  //   //   scrollTrigger: {
  //   //     trigger: ".pcontainer  ",
  //   //     start: "top 80%", // Adjust as needed
  //   //     end: "bottom 20%", // Adjust as needed
  //   //     markers:true,
  //   //   },
  //   //   y: "0rem",
  //   //   opacity: 1,
  //   //   duration: 1,
  //   // });
  //   // gsap.to(".pcontainer .mainbtnSec", {
  //   //   scrollTrigger: {
  //   //     trigger: ".pcontainer ",
  //   //     start: "top 80%", // Adjust as needed
  //   //     end: "bottom 20%", // Adjust as needed
  //   //     markers:true,
  //   //   },
  //   //   y: "0rem",
  //   //   opacity: 1,
  //   //   duration: 1,
  //   // });
  // }, []);
  return (
    <Fragment>

      <HomeSlider />
      {/* <section className='homeCarousel position-relative'>
        <Carousel>
          {Lcard.map((elem, index) => <Carousel.Item className='carousel-item' key={index}>
            <Link rel="stylesheet" to="/SingleMoviePage">
              <div className='movieposter' style={{
                background: `linear-gradient(to top, black, transparent), url(${elem.poster_path})`
              }}
              // initial={{ opacity: 0, scale: 0 }}
              // animate={{ opacity: 1, scale: 1 }}
              // transition={{ duration: 0.5 }}
              >
              </div>
            </Link>
            <Carousel.Caption className='Caption d-flex flex-column justify-content-center align-items-start'>
              <Link rel="stylesheet" to="/SingleMoviePage">
                <img height={"100%"} width={"100%"} src={elem.Titlelogo} alt="" className='mb-3 movieLogo'
                // initial={{ y: "-5rem" }}
                // animate={{ y: "0rem" }}
                // transition={{ duration: 0.5 }}
                ></img>
              </Link>
              <div
              // initial={{ y: "5rem" }}
              //   animate={{ y: "0rem" }}
              //   transition={{ duration: 0.5 }}
              >
                <div className='w-100 aboutMovie d-flex justify-content-start align-items-center mb-2'>
                  <p className='mb-0'>{elem.Genre}</p>
                  <p className='mb-0'>{elem.Release_Date}</p>
                  <span className='h-100 w-100 d-flex align-items-center justify-content-start gap-2 position-relative'>
                    <img height={"100%"} width={"100%"} src="images/Logo.svg" alt="" />
                    <p className='d-flex align-items-start justify-content-center m-0'>{elem.popularity}</p>
                  </span>
                </div>
                <p className='movieDescription'>{elem.Accolades}</p>
                <div className='movieBtns gap-3 d-flex'>
                  <Button linkprop={"/SingleMoviePage"}>
                    <FaPlay style={{ color: "black", }} />
                    <p className='mb-0'> stream now</p>
                  </Button>
                  <ButtonSec>
                  <IoAdd />
                    <p className='mb-0'>add to watchlist</p>
                  </ButtonSec>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>)}
        </Carousel>
      </section> */}
      <section className='carftSection'>
        <div className="container">
          <h3 className='SectionLable mb-4 align-align-items-center'
          >
            Craft Your Watchlist
            <IoIosArrowForward />
          </h3>
          <div className='pcontainer d-flex align-items-center' >
            <h2>Create a Watchlist that value your taste and time.!</h2>
            <BlackBtn linkprop={"/watchlistPage"}> <p className='mb-0'> Let’s see what you’ve got </p></BlackBtn>
          </div>
        </div>
      </section>
      <HandSlider />
      <MovieSlider type={"movie"} title={"Top Movies Suggestions "} />
      <MovieSlider type={"tv"} title={"Top Tv Series Suggestions"} />
      <CuratedSlider title={"Curated Lists Just For You "} />
    </Fragment >
  )
}

export default Home
