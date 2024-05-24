import React, { useEffect, useState } from 'react'
import SecNav from '../components/secNav/SecNav'
import Tagebutton from '../components/buttons/Tagebutton'
import Button2 from '../components/buttons/Button2'
import { BsExclamationLg } from 'react-icons/bs'
import { FcCheckmark } from 'react-icons/fc'
const TastePage = () => {


  const content = ["Movies", "TV Series", "Both"]
  const Genres = ["Action", "Adventure", "Anime", "Comedy", "Crime", "Documentary", "Dystopian", "Family", "Fantasy", "Drama", "Gangs", "History", "Horror", "Mystery", "Psychological", "Romance"]
  const [selectedContent, setSelectedContent] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const handleContentSelect = (tag) => {
    if (tag === 'Both') {
      setSelectedContent('Both');
    } else {
      setSelectedContent(tag);
    }
  };

  const handleGenreSelect = (genre) => {
    setSelectedGenres((prevSelected) => {
      if (prevSelected.includes(genre)) {
        return prevSelected.filter(g => g !== genre);
      } else if (prevSelected.length < 10) {
        return [...prevSelected, genre];
      } else {
        return prevSelected;
      }
    });
  };

  const [handleError1, setHandleError1] = useState(false)
  const [handleError2, setHandleError2] = useState(false)

  useEffect(() => {

    if (selectedGenres.length > 0) {
      setHandleError1(true)
    } else {
      setHandleError1(false)
    }
    if (selectedContent.length > 0) {
      setHandleError2(true)
    } else {
      setHandleError2(false)
    }

  }, [selectedGenres,selectedContent])



  const tick = <FcCheckmark />
  const error = <BsExclamationLg />

  return (

    <>
      <SecNav />
      <section className='fullSection border-0 d-flex justify-content-center align-content-start'>
        <div className="containerSm flex-column d-flex justify-content-start align-content-center" style={{ gap: "30px", }}>
          <div className='pagehadding'>
            <h1>Let’s Get to Know You & Taste</h1>
            <p className='mb-0'>Some basic information to help us serve you better suggestions</p>
          </div>
          <form className="loginForm d-flex align-items-center justify-content-center flex-column gap-4">
            <label className="gap-1 d-flex flex-column">
              Your Name
              <input placeholder='' type="text" />
            </label>
          </form>
          <div className='innerdivone'>
            <h4>Preferred Content</h4>
            <div className='d-flex flex-wrap gap-2'>
              {content.map((elem) => (
                <Tagebutton
                  key={elem}
                  tag={elem}
                  isSelected={selectedContent === elem}
                  onSelect={handleContentSelect}
                />
              ))}
            </div>
          </div>
          <div className='innerdivtwo' >
            <h4>Favorite Genres</h4>
            <div className='d-flex flex-wrap gap-2'>
              {Genres.map((elem, index) => (
                <Tagebutton
                  key={index}
                  tag={elem}
                  isSelected={selectedGenres.includes(elem)}
                  onSelect={handleGenreSelect}
                />
              ))}
            </div>
            <p className='mb-0' style={{ marginTop: "20px", }}>Choose up to 10 genres which you like to get suggestions from</p>
            <div style={{ marginTop: "30px", }}>
              <Button2 propdata1={handleError1} propdata2={handleError2} linkprop={"/moodPage"}>Continue</Button2>
            </div>
          </div>
          {/* <div className='taskPerPage'>
            <p className='mb-0 d-flex align-items-center'>{handleError2 ? tick : error} Select at least one category to continue</p>
            <p className='mb-0 d-flex align-items-center'>{handleError1 ? tick : error}  Choose up to 10 genres which you like to get suggestions from</p>
          </div> */}
        </div>
      </section>
    </>
  )
}

export default TastePage
