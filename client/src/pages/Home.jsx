import React, { Fragment } from 'react'
import HandSlider from '../components/top-hand-pick-slider/HandSlider.jsx';
import MovieSlider from '../components/Top-Movies-Suggestions/MovieSlider.jsx';
import CuratedSlider from '../components/Curated-Lists/CuratedSlider.jsx';
import { IoIosArrowForward } from 'react-icons/io';
import HomeSlider from '../components/HomeBanner/HomeSlider.jsx';
import LGScard from '../components/LGScards/LGScard.jsx';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from '../components/buttons/Button.jsx';


const Home = () => {

  const dataL = [
    {
      svg: "images/english.svg",
      title: "English",
    },
    {
      svg: "images/Hindi 1.svg",
      title: "Hindi",
    },
    {
      svg: "images/malyalam.svg",
      title: "Malayalam",
    },
    {
      svg: "images/tamil.svg",
      title: "Tamil",
    },
    {
      svg: "images/telugu.svg",
      title: "Telugu",
    },
    {
      svg: "images/gujrati.svg",
      title: "Gujarati",
    },
    {
      svg: "images/marathi.svg",
      title: "Marathi",
    },
    {
      svg: "images/korean.svg",
      title: "Korean",
    },
    {
      svg: "images/japanese.svg",
      title: "Japanese",
    },
    {
      svg: "images/iran.svg",
      title: "Iran",
    },
    {
      svg: "images/franch.svg",
      title: "French",
    },
  ]
  const dataG = [
    {
      svg: "images/action.svg",
      title: "Action",
    },
    {
      svg: "images/adventure.svg",
      title: "Adventure",
    },
    {
      svg: "images/anime.svg",
      title: "Anime",
    },
    {
      svg: "images/awards.svg",
      title: "Awards",
    },
    {
      svg: "images/comedy.svg",
      title: "Comedy",
    },
    {
      svg: "images/cinematic.svg",
      title: "Cinematic",
    },
    {
      svg: "images/crime.svg",
      title: "Crime",
    },
    {
      svg: "images/documentary.svg",
      title: "Documentary",
    },
    {
      svg: "images/dystopian.svg",
      title: "Dystopian",
    },
    {
      svg:"images/family.svg",
      title: "Family",
    },
    {
      svg: "images/fantasy.svg",
      title: "Fantastic",
    },
    {
      svg: "images/gangstar.svg",
      title: "Gangsters",
    },
    {
      svg: "images/historical.svg",
      title: "Historical",
    },
    {
      svg: "images/horror.svg",
      title: "Horror",
    },
    {
      svg: "images/musical.svg",
      title: "Musical",
    },
    {
      svg: "images/mystery.svg",
      title: "Mystery",
    },
    {
      svg: "images/psychological.svg",
      title: "Psychological",
    },
    {
      svg: "images/romance.svg",
      title: "Romance",
    },
    {
      svg: "images/sci-fi.svg",
      title: "Sci-Fi",
    },
    {
      svg: "images/short-films.svg",
      title: "Short films",
    },
    {
      svg: "images/sport.svg",
      title: "Sport",
    },
    {
      svg: "images/thriller.svg",
      title: "Thriller",
    },
    {
      svg: "images/superhero.svg",
      title: "Superhero",
    },
    {
      svg: "images/western.svg",
      title: "Western",
    },
    {
      svg: "images/war.svg",
      title: "War",
    },
  ]

  const dataS = [
    {
      image: "images/sonylive.svg",
      color: "black",
    },
    {
      image: "images/logos_netflix.svg",
      color: "black",
    },
    {
      image: "images/mubi.svg",
      color: "#0A0966",
    },
    {
      image: "images/hbo.svg",
      color: "#20226C",

    },
    {
      image: "images/youtube.svg",
      color: "black",
    },
    {
      image: "images/primeVideo.svg",
      color: "#209BFF",

    },
    {
      image: "images/Disney+_Hotstar_logo.svg",
      color: "#01147C",
    },
    {
      image: "images/appletv.svg",
      color: "black",
    },
    {
      image: "images/jiocinema.svg",
      color: "black",
    }
  ]

  const responsive = {
    superlargedesktop: {
      breakpoint: { max: 4000, min: 1860 },
      items: 8.7,
    },
    desktop: {
      breakpoint: { max: 1860, min: 1280 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5.2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2.7,
    }
  }


  return (
    <Fragment>
      <HomeSlider />
      <section className='carftSection'>
        <div className="container">
          <h3 className='SectionLable mb-4 align-align-items-center'
          >
            Craft Your Watchlist
            <IoIosArrowForward />
          </h3>
          <div className='pcontainer d-flex ' style={{backgroundImage: `url("images/pcontainer.svg")`}}>
            <div className=' d-flex flex-column gap-3 align-items-start justify-content-center' >
              <h2>Add Titles to Your Watchlist Which Better Suits Your Mood & Taste</h2>
              <Button linkprop={"/watchlistPage"}> <img height={"15px"} width={"15px"} src="images/cardsplus.svg" alt="icone" /> Add to Watchlist</Button>
            </div>
          </div>

        </div>
      </section>

      <LGScard truep={true} data={dataL} sectiontitle={"Titles from different languages"} />
      <LGScard truep={false} data={dataG} sectiontitle={"Titles from different genres"} />


      <section>
        <div className='container'>
          <h3 className='SectionLable mb-4 align-align-items-center'>Titles from streaming services <IoIosArrowForward /></h3>
          <Carousel
            removeArrowOnDeviceType={["tablet", "mobile"]}
            responsive={responsive}
            className='cardContainer d-flex align-items-center '
          >
            {dataS.map((elem) => {
              return <div className='serviceCards d-flex align-items-center justify-content-center' style={{ backgroundColor: elem.color }}>
                <img height={"100%"} width={"100%"} src={elem.image} alt="" />
              </div>
            })}
          </Carousel>
        </div>
      </section>

      {/* <HandSlider /> */}
      <MovieSlider type={"movie"} title={"Handpicked Movies For You "} />
      <MovieSlider type={"tv"} title={"Handpicked TV Series For You"} />
      <MovieSlider type={"movie"} title={"Best Crime Drama Movies For You"} />
      <MovieSlider type={"tv"} title={"True Crime Tv Series For You"} />
      <CuratedSlider title={"Curated Lists Just For You "} />
    </Fragment >
  )
}

export default Home
