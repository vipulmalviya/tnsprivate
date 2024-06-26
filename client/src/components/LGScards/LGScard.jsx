import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import "./LGScard.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const LGScard = ({ data, sectiontitle, truep }) => {


    const responsive = {
        superlargedesktop: {
                  breakpoint: { max: 4000, min: 1860 },
            items: 11,
        },
        desktop: {
                  breakpoint: { max: 1860, min: 1280 },
            items: 8.7,
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
        <section>
            <div className='container'>
                <h3 className='SectionLable mb-4 align-align-items-center'>{sectiontitle}<IoIosArrowForward /></h3>
                <Carousel
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    responsive={responsive}
                    className='cardContainer d-flex align-items-center '
                >
                    {data.map((elem) => {
                        return <div key={elem} className='LSGcard d-flex flex-column align-items-center justify-content-center'>
                            {truep ? <img src={elem.svg} alt="" /> : <img src={elem.svg} alt="" />}
                            <h3>{elem.title}</h3>
                        </div>
                    })}
                </Carousel>
            </div>
        </section>
    )
}

export default LGScard
