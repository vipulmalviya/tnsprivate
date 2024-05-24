import React, { useEffect, useState } from 'react'
import SecNav from '../components/secNav/SecNav'
import Tagebutton from '../components/buttons/Tagebutton'
import Button2 from '../components/buttons/Button2'
import { Link } from 'react-router-dom'
import { FcCheckmark } from 'react-icons/fc'
import { BsExclamationLg } from 'react-icons/bs'

const MoodPage = () => {


    const Frequency = ["Daily", "Weekly", "Occasionally"]
    const Moods = ["Happy", "Sad", "Adventurous", "Romantic", "Scary", "Thought-Provoking", "Thrilling", "Slowburn", "Dark", "Mind-Bending", "Family-Friendly", "Epic", "Uplifting", "Mystical", "Humorous", "Nostalgic"]

    const [selectedFrequency, setSelectedFrequency] = useState([]);
    const [selectedMoods, setSelectedMoods] = useState([]);

    const handleFrequencySelect = (tag) => {
        if (tag === 'Both') {
            setSelectedFrequency('Both');
        } else {
            setSelectedFrequency(tag);
        }
    };

    const handleMoodselect = (genre) => {
        setSelectedMoods((prevSelected) => {
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

        if (selectedMoods.length > 0) {
            setHandleError1(true)
        } else {
            setHandleError1(false)
        }
        if (selectedFrequency.length > 0) {
            setHandleError2(true)
        } else {
            setHandleError2(false)
        }

    }, [selectedMoods, selectedFrequency])



    const tick = <FcCheckmark />
    const error = <BsExclamationLg />


    return (
        <>
            <SecNav />
            <section className='fullSection border-0 d-flex justify-content-center align-content-start'>
                <div className="containerSm flex-column d-flex justify-content-start align-content-center" style={{ gap: "30px", }}>
                    <div className='pagehadding'>
                        <h1>Viewing Habits & Mood</h1>
                        <p className='mb-0'>Tell us about your viewing habits and the moods that influence your choices.</p>
                    </div>
                    <div className=' innerdivone'>
                        <h4>Viewing Frequency</h4>
                        <div className='d-flex flex-wrap gap-2'>
                            {Frequency.map((elem, index) => {
                                return <Tagebutton
                                    key={elem}
                                    tag={elem}
                                    isSelected={selectedFrequency === elem}
                                    onSelect={handleFrequencySelect}
                                />
                            })}
                        </div>
                    </div>
                    <div className='innerdivtwo'>
                        <h4>Mood-based Preferences</h4>
                        <div className='d-flex flex-wrap gap-2'>
                            {Moods.map((elem, index) => (
                                <Tagebutton
                                    key={index}
                                    tag={elem}
                                    isSelected={selectedMoods.includes(elem)}
                                    onSelect={handleMoodselect}
                                />
                            ))}
                            <p className='mb-0' style={{ marginTop: "10px", }}>Choose up to 10 Moods which you like to get suggestions from</p>
                        </div>
                        <div className='d-flex align-items-center justify-content-start gap-3' style={{ marginTop: "30px", }}>
                            <Button2 propdata1={handleError1} propdata2={handleError2}  linkprop={"/expreriencePage"}>Continue</Button2>
                            <Link className='backbtn' rel="stylesheet" to="/"> Back </Link>
                        </div>
                    </div>
                    {/* <div className='taskPerPage'>
                        <p className='mb-0 d-flex align-items-center'>{handleError2 ? tick : error} Select at least one category to continue</p>
                        <p className='mb-0 d-flex align-items-center'>{handleError1 ? tick : error}  Choose up to 10 Moods which you like to get suggestions from</p>
                    </div> */}
                </div>
            </section>
        </>
    )
}

export default MoodPage
