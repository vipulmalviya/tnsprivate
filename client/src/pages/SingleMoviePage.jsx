import React, { Fragment } from 'react'
// import Button from '../../Component/buttons/Button'
import { Link } from 'react-router-dom'
// import "../App.css"
import Button from '../components/buttons/Button.jsx';
import ButtonSec from '../components/buttons/ButtonSec.jsx';
import MovieSlider from '../components/Top-Movies-Suggestions/MovieSlider'
import { FaPlay, FaPlus, FaSpotify } from 'react-icons/fa';
import { LuPlus } from 'react-icons/lu';




const SingleMoviePage = () => {

  return (
    <Fragment>
      <div className='Movieposter'
        style={{ background: `linear-gradient(to top, black, transparent), url(${"images/openhaimer.jpg"})` }}
      ></div>
      <section className='singleSection'>
        <div className="container movieContianer d-flex">
          <div className='Sleft d-flex'>
            <div className="trailerCard d-flex">
              <div className="imgbox">
                <img width={"100%"} height={"100%"} src="images/opSubImage.png" alt="" />
              </div>
              <Button>
                <FaPlay />
                <p className='mb-0'>stream now</p>
              </Button>
              <ButtonSec>
                <LuPlus />
                <p className='mb-0'>add to watchlist</p>
              </ButtonSec>
              <ButtonSec>
                <FaSpotify />
                <p className='mb-0'>Listen on Spotify</p>
              </ButtonSec>
            </div>
            <div className="aboutMovies">
              <div className='aboutMoviesContainer'>
                <div className="movieTitle">
                  <img src="images/oppenheimerlogo.svg" alt="" />
                </div>
                <div className='align-items-center movieReales d-flex'>
                  <p className="MovieTag movieType">Biography, Drama</p>
                  <p className="MovieTag moviePG">PG-13</p>
                  <p className="movieTime">2h 36m</p>
                  <p className="movieYear">2023</p>
                </div>
              </div>
              <div>
                <div className="Details d-flex">
                  <h3>Details:</h3>
                  <div className='d-flex'>
                    <p className="key">Directed By:</p>
                    <p className="value">Christopher Nolan</p>
                  </div>
                  <div className='d-flex'>
                    <p className="key">Written By:</p>
                    <p className="value">Christopher Nolan</p>
                  </div>
                  <div className='d-flex'>
                    <p className="key">Cinematography By:</p>
                    <p className="value">Hoyte van Hoytema</p>
                  </div>
                  <div className='d-flex'>
                    <p className="key">Accolades:</p>
                    <p className="value">Best Picture, Best Director, Best Actor, Best Actor In Supporting Role, Best Cinematography, Best Film Editing, Best Original Score</p>
                  </div>
                </div>
              </div>
              <div>
                <div className='Plot'>
                  <h3>Plot:</h3>
                  <div className="value">During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project...During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project.</div>
                </div>
              </div>
            </div>
          </div>
          <div className='Sright'>
            <div className='movieScore d-flex justify-content-center align-items-center'>
              <div className="aboutTns d-flex flex-column justify-content-center align-items-center gap-2">
                <div className='d-flex align-items-center'>
                  <div className="tnslogo">
                    <img height={"50px"} width={"85px"} src="images/Logo.svg" alt="" />
                  </div>
                  <p className="tnsScore">92.6</p>
                </div>
                <h4>TNS Score</h4>
                <Link>What is TNS Score?</Link>
              </div>
              <div className="UserRiviews d-flex flex-column justify-content-center align-items-center gap-2">
                <div className='d-flex align-items-center'>
                  <div className="UserIcone">
                    <img height={"50px"} width={"50px"} src="images/users.svg" alt="" />
                  </div>
                  <p className="UserRiview">9.6</p>
                </div>
                <h4>User Reviews Rating</h4>
                <Link>(541 Users)</Link>
              </div>
            </div>
            <div className='Alluser d-flex flex-column gap-2 '>
              <div className="viewAll">
                <p>View All</p>
              </div>
              <div className="usercard d-flex">
                <img height={"50px"} width={"50px"} src="images/userimg.png" alt="" />
                <div className="userDetails d-flex flex-column justify-content-center align-items-center">
                  <h4>Cillian Murphy</h4>
                  <p>J. Robert Oppenheimer</p>
                </div>
              </div>
              <div className="usercard d-flex">
                <img height={"50px"} width={"50px"} src="images/userimg.png" alt="" />
                <div className="userDetails d-flex flex-column justify-content-center align-items-center">
                  <h4>Cillian Murphy</h4>
                  <p>J. Robert Oppenheimer</p>
                </div>
              </div>
              <div className="usercard d-flex">
                <img height={"50px"} width={"50px"} src="images/userimg.png" alt="" />
                <div className="userDetails d-flex flex-column justify-content-center align-items-center">
                  <h4>Cillian Murphy</h4>
                  <p>J. Robert Oppenheimer</p>
                </div>
              </div>
              <div className="usercard d-flex">
                <img height={"50px"} width={"50px"} src="images/userimg.png" alt="" />
                <div className="userDetails d-flex flex-column justify-content-center align-items-center">
                  <h4>Cillian Murphy</h4>
                  <p>J. Robert Oppenheimer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container movierating d-flex">
          <div className="left d-flex flex-column justify-content-center align-items-center gap-4">
            <h3>User Rating & Review </h3>
            <div className='leftT d-flex align-items-center'>
              <div className="score">9.6</div>
              <Link className='d-flex'>based on 541 users reviews</Link>
            </div>
            <div className='ratingContainer d-flex flex-column gap-2 '>
              <div className='d-flex justify-content-between'>
                <h4>Storyline</h4>
                <div className="rating-stars d-flex">
                  <input type="radio" name="rating" id="rs0" defaultChecked /><label htmlFor="rs0" />
                  <input type="radio" name="rating" id="rs1" /><label htmlFor="rs1" />
                  <input type="radio" name="rating" id="rs2" /><label htmlFor="rs2" />
                  <input type="radio" name="rating" id="rs3" /><label htmlFor="rs3" />
                  <input type="radio" name="rating" id="rs4" /><label htmlFor="rs4" />
                  <input type="radio" name="rating" id="rs5" /><label htmlFor="rs5" />
                  <input type="radio" name="rating" id="rs6" /><label htmlFor="rs6" />
                  <input type="radio" name="rating" id="rs7" /><label htmlFor="rs7" />
                  <input type="radio" name="rating" id="rs8" /><label htmlFor="rs8" />
                  <input type="radio" name="rating" id="rs9" /><label htmlFor="rs9" />
                  <span className="rating-counter" />
                </div>
              </div>
              <div className='d-flex justify-content-between'>
                <h4>Acting</h4>
                <div className="rating-stars">
                  <input type="radio" name="rating" id="rs0" defaultChecked /><label htmlFor="rs0" />
                  <input type="radio" name="rating" id="rs1" /><label htmlFor="rs1" />
                  <input type="radio" name="rating" id="rs2" /><label htmlFor="rs2" />
                  <input type="radio" name="rating" id="rs3" /><label htmlFor="rs3" />
                  <input type="radio" name="rating" id="rs4" /><label htmlFor="rs4" />
                  <input type="radio" name="rating" id="rs5" /><label htmlFor="rs5" />
                  <input type="radio" name="rating" id="rs6" /><label htmlFor="rs6" />
                  <input type="radio" name="rating" id="rs7" /><label htmlFor="rs7" />
                  <input type="radio" name="rating" id="rs8" /><label htmlFor="rs8" />
                  <input type="radio" name="rating" id="rs9" /><label htmlFor="rs9" />
                  <span className="rating-counter" />
                </div>
              </div>
              <div className='d-flex justify-content-between'>
                <h4>Direction</h4>
                <div className="rating-stars">
                  <input type="radio" name="rating" id="rs0" defaultChecked /><label htmlFor="rs0" />
                  <input type="radio" name="rating" id="rs1" /><label htmlFor="rs1" />
                  <input type="radio" name="rating" id="rs2" /><label htmlFor="rs2" />
                  <input type="radio" name="rating" id="rs3" /><label htmlFor="rs3" />
                  <input type="radio" name="rating" id="rs4" /><label htmlFor="rs4" />
                  <input type="radio" name="rating" id="rs5" /><label htmlFor="rs5" />
                  <input type="radio" name="rating" id="rs6" /><label htmlFor="rs6" />
                  <input type="radio" name="rating" id="rs7" /><label htmlFor="rs7" />
                  <input type="radio" name="rating" id="rs8" /><label htmlFor="rs8" />
                  <input type="radio" name="rating" id="rs9" /><label htmlFor="rs9" />
                  <span className="rating-counter" />
                </div>
              </div>
              <div className='d-flex justify-content-between'>
                <h4>Production Quality</h4>
                <div className="rating-stars">
                  <input type="radio" name="rating" id="rs0" defaultChecked /><label htmlFor="rs0" />
                  <input type="radio" name="rating" id="rs1" /><label htmlFor="rs1" />
                  <input type="radio" name="rating" id="rs2" /><label htmlFor="rs2" />
                  <input type="radio" name="rating" id="rs3" /><label htmlFor="rs3" />
                  <input type="radio" name="rating" id="rs4" /><label htmlFor="rs4" />
                  <input type="radio" name="rating" id="rs5" /><label htmlFor="rs5" />
                  <input type="radio" name="rating" id="rs6" /><label htmlFor="rs6" />
                  <input type="radio" name="rating" id="rs7" /><label htmlFor="rs7" />
                  <input type="radio" name="rating" id="rs8" /><label htmlFor="rs8" />
                  <input type="radio" name="rating" id="rs9" /><label htmlFor="rs9" />
                  <span className="rating-counter" />
                </div>
              </div>
              <div className='d-flex justify-content-between'>
                <h4>Entertainment Value</h4>
                <div className="rating-stars">
                  <input type="radio" name="rating" id="rs0" defaultChecked /><label htmlFor="rs0" />
                  <input type="radio" name="rating" id="rs1" /><label htmlFor="rs1" />
                  <input type="radio" name="rating" id="rs2" /><label htmlFor="rs2" />
                  <input type="radio" name="rating" id="rs3" /><label htmlFor="rs3" />
                  <input type="radio" name="rating" id="rs4" /><label htmlFor="rs4" />
                  <input type="radio" name="rating" id="rs5" /><label htmlFor="rs5" />
                  <input type="radio" name="rating" id="rs6" /><label htmlFor="rs6" />
                  <input type="radio" name="rating" id="rs7" /><label htmlFor="rs7" />
                  <input type="radio" name="rating" id="rs8" /><label htmlFor="rs8" />
                  <input type="radio" name="rating" id="rs9" /><label htmlFor="rs9" />
                  <span className="rating-counter" />
                </div>
              </div>
            </div>
          </div>
          <div className="right d-flex flex-column justify-content-center align-items-center">
            <div className='d-flex align-items-center'>
              <img src="images/Ellipse 33.svg" alt="" />
              <div className="rating-stars">
                <input type="radio" name="rating" id="rs0" defaultChecked /><label htmlFor="rs0" />
                <input type="radio" name="rating" id="rs1" /><label htmlFor="rs1" />
                <input type="radio" name="rating" id="rs2" /><label htmlFor="rs2" />
                <input type="radio" name="rating" id="rs3" /><label htmlFor="rs3" />
                <input type="radio" name="rating" id="rs4" /><label htmlFor="rs4" />
                <input type="radio" name="rating" id="rs5" /><label htmlFor="rs5" />
                <input type="radio" name="rating" id="rs6" /><label htmlFor="rs6" />
                <input type="radio" name="rating" id="rs7" /><label htmlFor="rs7" />
                <input type="radio" name="rating" id="rs8" /><label htmlFor="rs8" />
                <input type="radio" name="rating" id="rs9" /><label htmlFor="rs9" />
              </div>
            </div>
            <p className='d-flex gap-2'>A non spoiler detail review:
              <br />It's actually the best scientific Biopic made after The theory of everything!! <br /> A Cult classic cinema <br /> Christopher Nolan outshines in his technicality experimentation of direction with subjectives and objectives clearly shown in Black And white that too on an IMAX reel !!</p>

            <ButtonSec>See All Reviews (541)</ButtonSec>

          </div>
        </div>
      </section>

      <MovieSlider title={"More Christopher Nolan Movies"} />
      <MovieSlider title={"Biographical Movies Like Oppenheimer That’ll Impact You Deeply"} />
      <MovieSlider title={"Oscars Winning Movies For You"} />



    </Fragment>
  )
}

export default SingleMoviePage
