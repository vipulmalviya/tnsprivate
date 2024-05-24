import React, { useEffect, useState } from 'react'
import SecNav from '../components/secNav/SecNav'
import Tagebutton from '../components/buttons/Tagebutton'
import Button from '../components/buttons/Button'
import ExperienceCard from '../components/card/ExperienceCard'
import { Link } from 'react-router-dom'
const ExpreriencePage = () => {

    const Lcard = [
        {
            id: 1,
            original_title: "The Godfather",
            Genre: [
                "Crime, ",
                "Drama"
            ],
            Runtime: "2h 55m",
            Censor_Rating: "CBFC: R",
            Release_Date: "1972",
            Directed_By: "Francis Ford Coppola",
            Written_By: "Mario Puzo & Francis Ford Coppola",
            Cinematograhy: "Gordon Willis",
            Accolades: "Nominated & won Oscar's for Best Picture, Best Actor, Best Adapted Screenplay",
            Plot: "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son, Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
            Abailibility_in_india: "On Subs: Prime Video",
            poster_path: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
            popularity: "91.5",
        },
        {
            id: 2,
            original_title: "The Godfather 2",
            Genre: [
                "Crime, ",
                "Drama"
            ],
            Runtime: "3h 22m",
            Censor_Rating: "CBFC: A",
            Release_Date: "1974",
            Directed_By: "Francis Ford Coppola",
            Written_By: "Mario Puzo & Francis Ford Coppola",
            Cinematograhy: "Gordon Willis",
            Accolades: "Nominated & won Oscar's for Best Picture, Best Actor, Best Adapted Screenplay",
            Plot: "Vito's popularity in the underworld is on the rise, while his son, Michael's career is swinging downwards. In order to redeem himself, Michael must fight his enemies, including his own brother.",
            Abailibility_in_india: "On Subs: Prime Video",
            poster_path: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
            popularity: "91.5",
        },
        {
            id: 3,
            original_title: "The Godfather 3",
            Genre: [
                "Crime, ",
                "Drama"
            ],
            Runtime: "2h 42m",
            Censor_Rating: "CBFC: R",
            Release_Date: "1990",
            Directed_By: "Francis Ford Coppola",
            Written_By: "Mario Puzo & Francis Ford Coppola",
            Cinematograhy: "Gordon Willis",
            Accolades: "Nominated & won Oscar's ",
            Plot: "Michael Corleone decides to put an end to all the criminal activities his family is involved in. However, the mob leader refuses to let him go. Also, his nephew wants a piece of his criminal empire.",
            Abailibility_in_india: "On Rent: YouTube",
            poster_path: "https://m.media-amazon.com/images/M/MV5BNWFlYWY2YjYtNjdhNi00MzVlLTg2MTMtMWExNzg4NmM5NmEzXkEyXkFqcGdeQXVyMDk5Mzc5MQ@@._V1_.jpg",
            popularity: "91.5",
        },
        {
            id: 4,
            original_title: "2001: A Space Odyssey ",
            Genre: [
                "Adventure, ",
                "Sci-Fi"

            ],
            Runtime: "2h 29m",
            Censor_Rating: "CBFC: U",
            Release_Date: "1968",
            Directed_By: "Stanley Kubrick",
            Written_By: "Stanley Kubrick & Arthur C. Clarke",
            Cinematograhy: "Geoffrey Unsworth",
            Accolades: "Nominated & Won Oscar's for Best Special Visual Effects",
            Plot: "Humanity discovers a mystifying, artificial object buried underneath the lunar surface. With the assistance of HAL 9000, an intelligent computer, mankind embarks on an interesting quest.",
            Abailibility_in_india: "On Rent - Prime, Apple Tv, Google Movies",
            poster_path: "https://upload.wikimedia.org/wikipedia/en/1/11/2001_A_Space_Odyssey_%281968%29.png",
            popularity: "91.5",
        },
        {
            id: 5,
            original_title: "The shining",
            Genre: [
                "Psychological, ",
                "Horror"
            ],
            Runtime: "2h 16m",
            Censor_Rating: "CBFC: A",
            Release_Date: "1980",
            Directed_By: "Stanley Kubrick",
            Written_By: "Stanley Kubrick & Diane Johnson",
            Cinematograhy: "John Alcott",
            Accolades: "Award for Worst Director & Actress",
            Plot: "Jack and his family move into an isolated hotel with a violent past. Living in isolation, Jack begins to lose his sanity, which affects his family members.",
            Abailibility_in_india: "On Rent - Prime, Apple Tv, Google Movies, YouTube",
            poster_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1uTHLLpBhlXQEVDzar5kTUuDxo99jueJWXgVeTaQN1N6N58Tq",
            popularity: "91.5",
        },
        {
            id: 6,
            original_title: "The shining",
            Genre: [
                "Psychological, ",
                "Horror"
            ],
            Runtime: "2h 16m",
            Censor_Rating: "CBFC: A",
            Release_Date: "1980",
            Directed_By: "Stanley Kubrick",
            Written_By: "Stanley Kubrick & Diane Johnson",
            Cinematograhy: "John Alcott",
            Accolades: "Award for Worst Director & Actress",
            Plot: "Jack and his family move into an isolated hotel with a violent past. Living in isolation, Jack begins to lose his sanity, which affects his family members.",
            Abailibility_in_india: "On Rent - Prime, Apple Tv, Google Movies, YouTube",
            poster_path: "images/breakingbadposter.png",
            popularity: "91.5",
        },
        {
            id: 7,
            original_title: "The shining",
            Genre: [
                "Psychological, ",
                "Horror"
            ],
            Runtime: "2h 16m",
            Censor_Rating: "CBFC: A",
            Release_Date: "1980",
            Directed_By: "Stanley Kubrick",
            Written_By: "Stanley Kubrick & Diane Johnson",
            Cinematograhy: "John Alcott",
            Accolades: "Award for Worst Director & Actress",
            Plot: "Jack and his family move into an isolated hotel with a violent past. Living in isolation, Jack begins to lose his sanity, which affects his family members.",
            Abailibility_in_india: "On Rent - Prime, Apple Tv, Google Movies, YouTube",
            poster_path: "images/kantaraposter.png",
            popularity: "91.5",
        },
        {
            id: 8,
            original_title: "The shining",
            Genre: [
                "Psychological, ",
                "Horror"
            ],
            Runtime: "2h 16m",
            Censor_Rating: "CBFC: A",
            Release_Date: "1980",
            Directed_By: "Stanley Kubrick",
            Written_By: "Stanley Kubrick & Diane Johnson",
            Cinematograhy: "John Alcott",
            Accolades: "Award for Worst Director & Actress",
            Plot: "Jack and his family move into an isolated hotel with a violent past. Living in isolation, Jack begins to lose his sanity, which affects his family members.",
            Abailibility_in_india: "On Rent - Prime, Apple Tv, Google Movies, YouTube",
            poster_path: "images/avatarposter.png",
            popularity: "91.5",
        },
        {
            id: 9,
            original_title: "The shining",
            Genre: [
                "Psychological, ",
                "Horror"
            ],
            Runtime: "2h 16m",
            Censor_Rating: "CBFC: A",
            Release_Date: "1980",
            Directed_By: "Stanley Kubrick",
            Written_By: "Stanley Kubrick & Diane Johnson",
            Cinematograhy: "John Alcott",
            Accolades: "Award for Worst Director & Actress",
            Plot: "Jack and his family move into an isolated hotel with a violent past. Living in isolation, Jack begins to lose his sanity, which affects his family members.",
            Abailibility_in_india: "On Rent - Prime, Apple Tv, Google Movies, YouTube",
            poster_path: "images/batmanposter.png",
            popularity: "91.5",
        },
        {
            id: 10,
            original_title: "The shining",
            Genre: [
                "Psychological, ",
                "Horror"
            ],
            Runtime: "2h 16m",
            Censor_Rating: "CBFC: A",
            Release_Date: "1980",
            Directed_By: "Stanley Kubrick",
            Written_By: "Stanley Kubrick & Diane Johnson",
            Cinematograhy: "John Alcott",
            Accolades: "Award for Worst Director & Actress",
            Plot: "Jack and his family move into an isolated hotel with a violent past. Living in isolation, Jack begins to lose his sanity, which affects his family members.",
            Abailibility_in_india: "On Rent - Prime, Apple Tv, Google Movies, YouTube",
            poster_path: "images/duneposter.png",
            popularity: "91.5",
        },
        {
            id: 11,
            original_title: "The shining",
            Genre: [
                "Psychological, ",
                "Horror"
            ],
            Runtime: "2h 16m",
            Censor_Rating: "CBFC: A",
            Release_Date: "1980",
            Directed_By: "Stanley Kubrick",
            Written_By: "Stanley Kubrick & Diane Johnson",
            Cinematograhy: "John Alcott",
            Accolades: "Award for Worst Director & Actress",
            Plot: "Jack and his family move into an isolated hotel with a violent past. Living in isolation, Jack begins to lose his sanity, which affects his family members.",
            Abailibility_in_india: "On Rent - Prime, Apple Tv, Google Movies, YouTube",
            poster_path: "images/spider-manposter.png",
            popularity: "91.5",
        },
        {
            id: 12,
            original_title: "The shining",
            Genre: [
                "Psychological, ",
                "Horror"
            ],
            Runtime: "2h 16m",
            Censor_Rating: "CBFC: A",
            Release_Date: "1980",
            Directed_By: "Stanley Kubrick",
            Written_By: "Stanley Kubrick & Diane Johnson",
            Cinematograhy: "John Alcott",
            Accolades: "Award for Worst Director & Actress",
            Plot: "Jack and his family move into an isolated hotel with a violent past. Living in isolation, Jack begins to lose his sanity, which affects his family members.",
            Abailibility_in_india: "On Rent - Prime, Apple Tv, Google Movies, YouTube",
            poster_path: "images/mandalorianposter.png",
            popularity: "91.5",
        },

    ];

    return (
        <>
            <SecNav />
            <section className='fullSection border-0 d-flex justify-content-center align-content-start'>
                <div className="Expreriencediv flex-column d-flex justify-content-start align-content-center " style={{ gap: "30px", }}>
                    <div className='pagehadding'>
                        <h1>Personalised Experience</h1>
                        <p className='mb-0'>Select a few movies or TV series you've enjoyed recently <br />  to help us understand your taste.</p>
                    </div>
                    <div className='ECard gap-2 d-grid flex-wrap align-content-center justify-content-center'>
                        {Lcard.map((elem) => {
                            return <ExperienceCard imageUrl={elem.poster_path} title={elem.original_title} />
                        })}
                    </div>
                    <div className=' d-flex align-items-center justify-content-start gap-3'>
                        <Button linkprop={"/register"}>Continue</Button>
                        <Link className="backbtn" rel="stylesheet" to="/moodPage"> Back </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ExpreriencePage
