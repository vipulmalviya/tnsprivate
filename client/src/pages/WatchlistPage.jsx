import React, { useState } from 'react'
import CuratedSlider from '../components/Curated-Lists/CuratedSlider.jsx';
import Card from '../components/card/Card.jsx';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { GoArrowRight } from 'react-icons/go';
import { IoMdMore } from 'react-icons/io';
import { IoAddCircle, IoAddCircleOutline, IoCheckmarkDone } from 'react-icons/io5';
import Modal from '../components/card/Modal.jsx';
import WatchlistCard from '../components/card/WatchlistCard.jsx';

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

  const [ModalShow, setModalShow] = useState(false)
  const [watchlists, setWatchlists] = useState([]);
  const [isCardsShow, setIsCardsShow] = useState(false);


  function modalshow() {
    setModalShow(!ModalShow)
  }

  function manage() {
    setIsCardsShow(!isCardsShow)
    setModalShow(!ModalShow)
  }

  return (
    <fregment >
      {isCardsShow ? <section className='headersection d-flex flex-column'>
        <div onClick={modalshow} className="container d-flex flex-column align-items-start justify-content-center" >
          <h1>My Watchlist</h1>
          <div className="myWatchlistDiv d-flex flex-column align-items-center justify-content-center gap-2">
            <IoAddCircle />
            <p>Create your First Watchlist</p>
          </div>
          <div className='pagehadding'>
            <p><IoCheckmarkDone /> Creating watchlists for yourself can help track your favourite movies or shows easily and solves much fuse about what to watch next?</p>
            <p><IoCheckmarkDone /> You can simply add great movies or shows from our recommendations based titles or use TNS score to decide what to watch or what not to.</p>
          </div>
        </div>
      </section > :
        <section>
          <div className="container">
            <div className='header d-flex align-items-center'>
              <h2>My Watchlist</h2>
              <p onClick={modalshow} className='watchlistbtn mb-0 '><IoAddCircleOutline />Create New Watchlist</p>
            </div>
            <div className='cardContaienr d-grid'>
              <WatchlistCard />
            </div>
          </div>
        </section>

      }
      {ModalShow && <Modal onclick={manage} onclick2={modalshow} />}
      <section>
        <div className="container">
          <div className='cardHeaders d-flex'>
            <h3>Previously Watched Titles</h3>
            <span className="d-flex align-items-center justify-content-center gap-2" style={{ color: "white", cursor: "pointer" }}>See All <GoArrowRight /></span>
          </div>
          <Carousel className="MovieCards d-flex"
            responsive={responsive}
          >
            {data.map((elem, index) => <Card key={index} Poster={elem.Poster} Title={elem.Title || elem.original_name} catagory={elem.catagory} watch={elem.watch} btn={true} />)}
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
    </fregment>
  )
}

export default WatchlistPage
