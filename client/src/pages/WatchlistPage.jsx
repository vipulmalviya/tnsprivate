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
import { FiTag } from "react-icons/fi";
import List from '../components/dragableList/List.jsx';
import { PiUsersBold } from 'react-icons/pi';


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

const items = [
  { number: 1, title: 'Movie 1', genres: 'Action', year: 2021, duration: '2h', rating: '92.5', userRating: '98%(1.2k)', tag: 'Masterpiece', imageUrl: "images/12fail.png", },
  { number: 2, title: 'Movie 1', genres: 'Action', year: 2021, duration: '2h', rating: '92.5', userRating: '98%(1.2k)', tag: 'Masterpiece', imageUrl: "images/12fail.png", },
  { number: 3, title: 'Movie 1', genres: 'Action', year: 2021, duration: '2h', rating: '92.5', userRating: '98%(1.2k)', tag: 'Masterpiece', imageUrl: "images/12fail.png", },
  { number: 4, title: 'Movie 1', genres: 'Action', year: 2021, duration: '2h', rating: '92.5', userRating: '98%(1.2k)', tag: 'Masterpiece', imageUrl: "images/12fail.png", },
]


const handleDragStart = (e, index) => {
  e.dataTransfer.setData('text/plain', index);
};

const handleDragOver = (e, index) => {
  e.preventDefault();
};

const handleDrop = (e, index) => {
  const draggedIndex = e.dataTransfer.getData('text/plain');
  const newItems = [...items];
  const [draggedItem] = newItems.splice(draggedIndex, 1);
  newItems.splice(index, 0, draggedItem);

  // Update the number property based on the new order
  const updatedItems = newItems.map((item, idx) => ({
    ...item,
    number: idx + 1
  }));

  setItems(updatedItems);
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

  const [ModalShow, setModalShow] = useState(false)
  // const [watchlists, setWatchlists] = useState([]);
  const [isCardsShow, setIsCardsShow] = useState(false);
  const [Manage, setManage] = useState(false);
  


  function modalshow() {
    setModalShow(!ModalShow)
  }

  function manage() {
    setIsCardsShow(!isCardsShow)
    setModalShow(!ModalShow)
  }

  function mangefunc() {
    setManage(!Manage)
  }

  return (
    <fregment >
      {Manage && <> <section className='watchlistInfoSection d-flex align-items-start justify-content-center '>
        <div className="container d-flex align-items-center justify-content-start">
          <div className='d-flex align-items-center justify-content-between w-100'>
            <div className="watchlistsInfo d-flex align-items-center justify-content-start">
              <div className="watchlistAvatar mx-3">
                <img height={"100%"} width={"100%"} src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.1.516356470.1716545116&semt=sph" alt="" />
              </div>
              <div className='pagehadding'>
                <p className='mb-0'>Watchlist</p>
                <h2>Crime - Thriller Movies</h2>
                <p className=' d-flex align-items-center justify-content-start gap-2'><span>Rahul Malviya</span> . <span>8 Movies</span> . <span>2 TV Series</span></p>
              </div>
            </div>
            <IoMdMore style={{ fontSize: "2rem", }} />
          </div>
        </div>
      </section>
        <section className='listItemsSection'>
          <div className='listHead container d-grid align-items-center justify-content-center my-3'>
            <p className='div1 number mb-0 d-flex align-items-center justify-content-center mx-3'>#</p>
            <div className='div2 d-flex align-items-center justify-content-start gap-3'>
              <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 3.8335C1.5 3.05693 1.5 2.66864 1.62687 2.36236C1.79602 1.95398 2.12048 1.62952 2.52886 1.46036C2.83515 1.3335 3.22343 1.3335 4 1.3335H14C14.7766 1.3335 15.1649 1.3335 15.4711 1.46036C15.8795 1.62952 16.204 1.95398 16.3731 2.36236C16.5 2.66864 16.5 3.05693 16.5 3.8335C16.5 4.61007 16.5 4.99835 16.3731 5.30464C16.204 5.71302 15.8795 6.03747 15.4711 6.20663C15.1649 6.3335 14.7766 6.3335 14 6.3335H4C3.22343 6.3335 2.83515 6.3335 2.52886 6.20663C2.12048 6.03747 1.79602 5.71302 1.62687 5.30464C1.5 4.99835 1.5 4.61007 1.5 3.8335Z" stroke="white" stroke-width="1.5" />
                <path d="M1.5 12.1668C1.5 11.3903 1.5 11.002 1.62687 10.6957C1.79602 10.2873 2.12048 9.96285 2.52886 9.7937C2.83515 9.66683 3.22343 9.66683 4 9.66683H14C14.7766 9.66683 15.1649 9.66683 15.4711 9.7937C15.8795 9.96285 16.204 10.2873 16.3731 10.6957C16.5 11.002 16.5 11.3903 16.5 12.1668C16.5 12.9434 16.5 13.3317 16.3731 13.638C16.204 14.0463 15.8795 14.3708 15.4711 14.54C15.1649 14.6668 14.7766 14.6668 14 14.6668H4C3.22343 14.6668 2.83515 14.6668 2.52886 14.54C2.12048 14.3708 1.79602 14.0463 1.62687 13.638C1.5 13.3317 1.5 12.9434 1.5 12.1668Z" stroke="white" stroke-width="1.5" />
              </svg>
              Title</div>
            <div className='div3'>
              <img src="images/latestlogo.svg" alt="" />
            </div>
            <p className='div4 d-flex gap-2 mb-0'><PiUsersBold />User Rating</p>
            <p className="div5 mb-0"><FiTag /> Tag</p>
            <p className='mb-0 div6 d-flex align-items-center justify-content-center gap-4'>More Option</p>
          </div>
          <div>
            {items.map((item, index) => (
              <List
                key={item.number}
                index={index}
                number={item.number}
                title={item.title}
                genres={item.genres}
                year={item.year}
                duration={item.duration}
                rating={item.rating}
                userRating={item.userRating}
                tag={item.tag}
                image={item.imageUrl}
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              />
            ))}
          </div>
        </section> </>}
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
              <WatchlistCard  openList={mangefunc}/>
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
