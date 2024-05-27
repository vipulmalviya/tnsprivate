import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./HomeSlider.css";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import Button from '../buttons/Button';
import ButtonSec from '../buttons/ButtonSec';
import { FaPlay } from 'react-icons/fa';
import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci';
import { LuPlus } from 'react-icons/lu';

const Lcard = [
    {
        id: 1,
        Titlelogo: "openhaimer",
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
        Titlelogo: "The BatMan",
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
        Titlelogo: "DUNE",
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
        Titlelogo: "Joker",
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
        Titlelogo: "Avatar",
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
        Titlelogo: "The Green Knight",
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
        Titlelogo: "Saltburn",
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



const HomeSlider = () => {

    return (
        <>
            <section className="Homecontainer d-flex align-items-center justify-content-center">
                <Swiper
                    speed={1300}
                    autoplay={{ delay: 5000, disableOnInteraction: true , pauseOnMouseEnter: true ,waitForTransition: true}}
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 3,
                    }}Continue
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                    className="swiper_container"
                >
                    {Lcard.map((elem) => {
                        return <SwiperSlide key={elem} className='swiper-slide d-flex' style={{
                            background: `linear-gradient(to top, black, transparent), url(${elem.poster_path})`
                        }}>
                            <div className='container p-5 d-flex align-items-end'>
                                <div className='caption slider-active d-flex flex-column justify-content-end align-items-start gap-2'>
                                    <img height={"40%"} width={"40%"} src="images/BestOfAllTime.svg" alt="brand logo" />
                                    <h2>{elem.Titlelogo}</h2>
                                    <div className=' w-100 aboutMovie d-flex justify-content-center align-items-start flex-column mb-2 gap-3'>
                                        <div className='d-flex'>
                                            <p className='mb-0'>{elem.Genre}</p>
                                            <p className='mb-0'>{elem.Release_Date}</p>
                                            <p className='mb-0'>{elem.Runtime}</p>
                                        </div>
                                        <span className='h-100 w-100 d-flex align-items-center justify-content-start gap-2 position-relative'>
                                            <img height={"20px"} width={"22px"} src="images/latestlogo.svg" alt="" />
                                            <h2 className='d-flex align-items-start justify-content-center m-0'>{elem.popularity}</h2>
                                        </span>
                                    </div>
                                    <div className='movieBtns gap-2 d-flex'>
                                        <Button linkprop={"/SingleMoviePage"}>
                                            <FaPlay style={{ color: "black", }} />
                                            <p className='mb-0'> stream now</p>
                                        </Button>
                                        <ButtonSec>
                                            <LuPlus />
                                            <p className='mb-0'>add to watchlist</p>
                                        </ButtonSec>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    })}
                    <div className="slider-controler container d-flex ">
                        <div className="swiper-button-prev slider-arrow">
                            <CiCircleChevLeft />
                        </div>
                        <div className="swiper-button-next slider-arrow">
                            <CiCircleChevRight />
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
            </section >
        </>
    )
}

export default HomeSlider
