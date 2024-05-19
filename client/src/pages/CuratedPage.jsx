import React from 'react'
// import "../App.css"
import { Fragment } from 'react'
import Button from '../components/buttons/Button.jsx';
import ButtonSec from '../components/buttons/ButtonSec.jsx';
// import { Link } from 'react-router-dom'
import CuratedSlider from '../components/Curated-Lists/CuratedSlider.jsx'
import { FaPlay, FaPlus } from 'react-icons/fa';
import { LuPlus } from 'react-icons/lu';
export const CuratedPage = () => {

    const data = [
        {
            id: "01.",
            title: "images/oppenheimerlogo.svg",
            type: "Biography, Thriller, War",
            pg: "CBFC: U/A",
            time: "1h 54m",
            year: "2014",
            directer: "Morten Tyldum",
            accolades: "Academy Award for Best Adapted Screenplay",
            plot: "Alan Turing, a British mathematician, joins the cryptography team to decipher the German enigma code. With the help of his fellow mathematicians, he builds a machine to crack the codes.",
            tnsScore: "92.6",
            userReviews: "9.6",
            link: "images/oppenheimer.png"
        },
        {
            id: "02.",
            title: "images/thebatman.png",
            type: "Biography, Thriller, War",
            pg: "CBFC: U/A",
            time: "1h 54m",
            year: "2014",
            directer: "Morten Tyldum",
            accolades: "Academy Award for Best Adapted Screenplay",
            plot: "Alan Turing, a British mathematician, joins the cryptography team to decipher the German enigma code. With the help of his fellow mathematicians, he builds a machine to crack the codes.",
            tnsScore: "92.6",
            userReviews: "9.6",
            link: "images/thebatmanposter.jpg"
        },
        {
            id: "03.",
            title: "images/theGreenKnightlogo.svg",
            type: "Biography, Thriller, War",
            pg: "CBFC: U/A",
            time: "1h 54m",
            year: "2014",
            directer: "Morten Tyldum",
            accolades: "Academy Award for Best Adapted Screenplay",
            plot: "Alan Turing, a British mathematician, joins the cryptography team to decipher the German enigma code. With the help of his fellow mathematicians, he builds a machine to crack the codes.",
            tnsScore: "92.6",
            userReviews: "9.6",
            link: "images/MartinKaspar_GreenKnight.jpg"
        },
        {
            id: "04.",
            title: "images/saltburnlogo.svg",
            type: "Biography, Thriller, War",
            pg: "CBFC: U/A",
            time: "1h 54m",
            year: "2014",
            directer: "Morten Tyldum",
            accolades: "Academy Award for Best Adapted Screenplay",
            plot: "Alan Turing, a British mathematician, joins the cryptography team to decipher the German enigma code. With the help of his fellow mathematicians, he builds a machine to crack the codes.",
            tnsScore: "92.6",
            userReviews: "9.6",
            link: "images/slatburnposter.jpg"
        },
    ]

    return (
        <Fragment>
            <div className='Curated_banner' style={{ background: ` url(${"images/openhaimer.jpg"})` }}
            >
                <div className='Curated_movie_details d-flex flex-column'>
                    <span className='tag'>Curated List</span>
                    <h2>Biographical Movies Like Oppenheimer That’ll Impact You Deeply</h2>
                    <p>Ranked According to TNS score</p>
                </div>
            </div>
            {data.map((elem) => <section>
                <div className="container Curated_list_Container d-flex ">
                    <div className='number_div'>{elem.id}</div>
                    <div className='center_div'>
                        <div className='Sleft d-flex '>
                            <div className="trailerCard d-flex ">
                                <div className="imgbox">
                                    <img width={"100%"} height={"100%"} src={elem.link} alt={"movie image"} />
                                </div>
                            </div>
                            <div className="aboutMovies">
                                <div className='aboutMoviesContainer'>
                                    <div className="movieTitle">
                                    <img width={"100%"} height={"100%"} src={elem.title} alt={"movie logo"} />
                                    </div>
                                    <div className='movieReales align-items-center d-flex gap-3 '>
                                        <div className="MovieTag movieType">{elem.type}</div>
                                        <div className="MovieTag moviePG">{elem.pg}</div>
                                        <div className="movieTime">{elem.time}</div>
                                        <div className="movieYear">{elem.year}</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="Details d-flex ">
                                        <h3>Details:</h3>
                                        <div className='d-flex '>
                                            <p className="key">Directed By:</p>
                                            <p className="value">{elem.directer}</p>
                                        </div>
                                        <div className='d-flex '>
                                            <p className="key">Accolades:</p>
                                            <p className="value">{elem.accolades}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='Plot'>
                                        <h3>Plot:</h3>
                                        <div className="value">{elem.plot}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='ratting_div d-flex align-items-center justify-content-between'>
                        <div className='movieScore d-flex flex-column gap-3'>
                            <div className="aboutTns">
                                <h4>Rating & Reviews</h4>
                                <div className='d-flex align-items-center justify-content-center '>
                                    <div >
                                        <div className="tnsScore">{elem.tnsScore}</div>
                                        <p className='tnsScore_user'>TNS Score</p>
                                    </div>
                                    <div className='rating_reviews'>
                                        <div className="UserRiview">{elem.userReviews}</div>
                                        <p className='tnsScore_user'>User Reviews</p>
                                    </div>
                                </div>
                            </div>
                            <div className='buttonDiv d-flex flex-column '>
                                <h4>Quick options</h4>
                                <Button>
                                    <FaPlay />
                                    <p>stream now</p>
                                </Button>
                                <ButtonSec>
                                    <LuPlus />
                                    <p>add to watchlist</p>
                                </ButtonSec>
                            </div>
                        </div>
                    </div>
                </div>
            </section>)}
            <CuratedSlider title={"Curated Lists Just For You"} />
        </Fragment>
    )
}
