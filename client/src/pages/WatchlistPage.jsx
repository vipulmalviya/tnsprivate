import React, { useState } from 'react'
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import CuratedSlider from '../components/Curated-Lists/CuratedSlider.jsx';
import Card from '../components/card/Card.jsx';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { GoArrowRight } from 'react-icons/go';
import { IoMdMore } from 'react-icons/io';
import { IoAddCircleOutline } from 'react-icons/io5';
const arr = [
  {
    img: "images/oppenheimer.png",
  },
  {
    img: "images/sambhadur.png",
  },
  {
    img: "images/96ec47c5bba1a99388ccc5c88666398e.png",
  },
  {
    img: "images/da92a39b19b38d7c9b6e839bfff30d13.png",
  }

]


const data = [
  {
    Poster: 'images/dune.png',
    Title: 'Dune Part Two',
    watch: "94.5",
    catagory: "Sci-Fi, Adventure",
  },
  {
    Poster: 'images/KillersOfTheFlowerMoon.png',
    Title: 'Killers of the Flower Moon',
    watch: "90.5",
    catagory: "Crime, Western",
  },
  {
    Poster: 'images/saltburn.png',
    Title: 'Saltburn',
    watch: "91.5",
    catagory: "Comedy, Drama",
  },
  {
    Poster: 'images/Barbie.png',
    Title: 'Barbie',
    watch: "87.5",
    catagory: "Comedy, Fantasy",
  },
  {
    Poster: 'images/ThreeOfUs.png',
    Title: 'Three of us',
    watch: "91.3",
    catagory: "Drama",
  },
  {
    Poster: 'images/Sambhadur.png',
    Title: 'Sam Bhadur',
    watch: "89.5",
    catagory: "Biography, Drama",
  }
]


const responsiveone = {
  superlargedesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 3.5,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2.5,
  },
  mobile: {
    // margin:"200px",
    breakpoint: { max: 464, min: 0 },
    items: 1,
  }
};

const responsive = {
  superlargedesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2.5,
  },
  mobile: {
    // margin:"200px",
    breakpoint: { max: 464, min: 0 },
    items: 1,
  }
};



const WatchlistPage = () => {
  return (
    <>
      <section className='headersection'>
        <div className="container">
          <div className='header d-flex'>
            <h2>My Watchlist </h2>
            <div className='watchlistbtn d-flex align-items-center justify-content-center gap-3'>
              <IoAddCircleOutline />
              <p className='mb-0 d-flex align-items-center justify-content-center'>Create New Watchlist</p>
            </div>
          </div>
          <div className='watchlistCards d-flex'>
            <div className="watchlistCard">
              <div className='gap-2 d-flex align-items-center justify-content-between'>
                <h3>Crime - Thriller Movies</h3>
                <div className="moreBtn">
                  <IoMdMore />
                </div>
              </div>
              <Carousel className='cardContainer d-flex '
                responsive={responsiveone}
              >
                {arr.map((elem, index) =>
                  <div className='card d-flex' key={index} style={{ background: `url(${elem.img})` }}>
                  </div>
                )}
              </Carousel>
              <span className='titlecount'>5 Titles Watched out of 10 till Feb</span>
              <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                <div className="progress-bar" style={{ width: '25%', backgroundColor: "#BACC4A", }} />
              </div>
            </div>
            <div className="watchlistCard">
              <div className='gap-2 d-flex align-items-center justify-content-between'>
                <h3>Crime - Thriller Movies</h3>
                <div className="moreBtn"> <IoMdMore /></div>
              </div>
              <Carousel className='cardContainer d-flex '
                responsive={responsiveone}
              >
                {arr.map((elem, index) =>
                  <div className='card d-flex' key={index} style={{ background: `url(${elem.img})` }}>
                  </div>
                )}
              </Carousel>
              <span className='titlecount'>5 Titles Watched out of 10 till Feb</span>
              <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                <div className="progress-bar" style={{ width: '25%', backgroundColor: "#BACC4A", }} />
              </div>
            </div>
          </div>
        </div>
      </section >
      <section>
        <div className="container">
          <div className='cardHeaders d-flex'>
            <h3>Previously Watched Titles</h3>
            <span className="d-flex align-items-center justify-content-center gap-2" style={{ color: "white", cursor: "pointer" }}>See All <GoArrowRight /></span>
          </div>
          <Carousel className="MovieCards d-flex"
            responsive={responsive}
          >
            {data.map((elem, index) => <Card key={index} Poster={elem.Poster} Title={elem.Title || elem.original_name} catagory={elem.catagory} watch={elem.watch} btn={false} />)}
          </Carousel>
        </div>
      </section>
      <section>
        <div className="container">
          <div className='cardHeaders d-flex'>
            <h3>Top Suggestions Matches with your Taste </h3>
          </div>
          <Carousel className="MovieCards d-flex"
            responsive={responsive}
          >
            {data.map((elem, index) => <Card key={index} Poster={elem.Poster} Title={elem.Title || elem.original_name} catagory={elem.catagory} watch={elem.watch} btn={true} />)}
          </Carousel>
        </div>
      </section>
      <CuratedSlider title={"Curated Lists Just For You"} />
    </>

  )
}

export default WatchlistPage
