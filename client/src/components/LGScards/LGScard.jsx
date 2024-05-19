import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import "./LGScard.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const LGScard = ({ data, sectiontitle, truep }) => {


    const responsive = {
        superlargedesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 12,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 11,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 10,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 6,
        }
    }

    return (
        <section>
            <div className='container'>
                <h3 className='SectionLable mb-4 align-align-items-center'>{sectiontitle}<IoIosArrowForward /></h3>
                <Carousel
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    responsive={responsive}
                    className='cardContainer d-flex align-items-center '
                >
                    {data.map((elem) => {
                        return <div className='LSGcard d-flex flex-column align-items-center justify-content-center'>
                            {truep ? <h2>{elem.svg}</h2> : <img src={elem.svg} alt="" />}
                            <h3>{elem.title}</h3>
                        </div>
                    })}
                </Carousel>
            </div>
        </section>
    )
}

export default LGScard
