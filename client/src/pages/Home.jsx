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
      svg: "EN",
      title: "English",
    },
    {
      svg: "हिन्दी",
      title: "Hindi",
    },
    {
      svg: "മലയാളം",
      title: "Malayalam",
    },
    {
      svg: "தமிழ்",
      title: "Tamil",
    },
    {
      svg: "తెలుగు",
      title: "Telugu",
    },
    {
      svg: "ગુજરાતી",
      title: "Gujarati",
    },
    {
      svg: "मराठी",
      title: "Marathi",
    },
    {
      svg: "ㅊ",
      title: "Korean",
    },
    {
      svg: "日本語",
      title: "Japanese",
    },
    {
      svg: "گ",
      title: "Iran",
    },
    {
      svg: "FR",
      title: "French",
    },
  ]
  const dataG = [
    {
      svg: "EN",
      title: "Action",
    },
    {
      svg: "हिन्दी",
      title: "Adventure",
    },
    {
      svg: "മലയാളം",
      title: "Anime",
    },
    {
      svg: "தமிழ்",
      title: "Awards",
    },
    {
      svg: "తెలుగు",
      title: "Comedy",
    },
    {
      svg: "ગુજરાતી",
      title: "Cinematic",
    },
    {
      svg: "मराठी",
      title: "Crime",
    },
    {
      svg: "ㅊ",
      title: "Documentary",
    },
    {
      svg: "日本語",
      title: "Dystopian",
    },
    {
      svg: "گ",
      title: "Family",
    },
    {
      svg: "FR",
      title: "Fantastic",
    },
    {
      svg: "FR",
      title: "Gangsters",
    },
    {
      svg: "FR",
      title: "Historical",
    },
    {
      svg: "FR",
      title: "Horror",
    },
    {
      svg: "FR",
      title: "Musical",
    },
    {
      svg: "FR",
      title: "Mystery",
    },
    {
      svg: "FR",
      title: "Psychological",
    },
    {
      svg: "FR",
      title: "Romance",
    },
    {
      svg: "FR",
      title: "Sci-Fi",
    },
    {
      svg: "FR",
      title: "Short films",
    },
    {
      svg: "FR",
      title: "Sport",
    },
    {
      svg: "FR",
      title: "Thriller",
    },
    {
      svg: "FR",
      title: "Superhero",
    },
    {
      svg: "FR",
      title: "Western",
    },
    {
      svg: "FR",
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
      breakpoint: { max: 4000, min: 3000 },
      items: 8.5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8.5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 5,
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
          <div className='pcontainer d-flex '>
            <div className=' d-flex flex-column gap-3 align-items-start justify-content-center' >
              <h2>Add Titles to Your Watchlist Which Better Suits Your Mood & Taste</h2>
              <Button linkprop={"/watchlistPage"}> <img height={"15px"} width={"15px"} src="images/cardsplus.svg" alt="icone" /> Add to Watchlist</Button>
            </div>
            <img src="images/pcontainer.png" alt="" />
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
      <MovieSlider type={"movie"} title={"Top Movies Suggestions "} />
      <MovieSlider type={"tv"} title={"Top Tv Series Suggestions"} />
      <CuratedSlider title={"Curated Lists Just For You "} />
    </Fragment >
  )
}

export default Home
