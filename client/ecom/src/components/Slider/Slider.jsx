import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "./Slider.scss";
import { useState } from 'react';

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const previousSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    }

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    }


    const data = [
        "https://img3.wallspic.com/crops/1/2/4/8/5/158421/158421-romee_strijd-model-fashion_model-2020-hair-1920x1080.jpg",
        "https://www.wallpaperflare.com/static/376/261/73/h-and-m-hennes-and-mauritz-public-company-swedish-company-wallpaper.jpg",
        "https://media.glamourmagazine.co.uk/photos/6411e98e8d38096e8b214725/16:9/w_2560%2Cc_limit/ONLINE%2520STORES%2520150323-GettyImages-1472093863.jpg",
    ];

    return (
        <div className='slider'>
            <div className="container" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                <img src={data[0]} alt="" />
                <img src={data[1]} alt="" />
                <img src={data[2]} alt="" />
                <img src={data[3]} alt="" />
            </div>

            <div className="icons">

                {/* Left Icon */}
                <div className="icon" onClick={previousSlide}>
                    <ArrowBackIcon />
                </div>

                {/* Right Icon */}
                <div className="icon" onClick={nextSlide}>
                    <ArrowForwardIcon />
                </div>

            </div>
        </div>
    )
}

export default Slider