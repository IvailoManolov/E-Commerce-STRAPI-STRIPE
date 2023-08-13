import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Slider = () => {

    const data = [
        "https://w0.peakpx.com/wallpaper/739/894/HD-wallpaper-fashion-models-models-beautiful-girls-female-and-men-casual-clothes-fashion-beautiful-boys.jpg",
        "https://wallpapercrafter.com/desktop/177177-beauty-jeans-lovely-beautiful-girl-female-model-woman.jpg",
        "https://img3.wallspic.com/crops/1/2/4/8/5/158421/158421-romee_strijd-model-fashion_model-2020-hair-1920x1080.jpg",
        "https://www.hdwallpapers.in/download/beautiful_girl_model_is_posing_for_a_photo_wearing_red_dress_sitting_in_blur_nature_background_4k_hd_girls-3840x2160.jpg"
    ];

    return (
        <div className='slider'>
            <div className="container">
                <img src={data[0]} alt="" />
                <img src={data[1]} alt="" />
                <img src={data[2]} alt="" />
                <img src={data[3]} alt="" />
            </div>

            <div className="icons">

                {/* Left Icon */}
                <div className="icon">
                    <ArrowBackIcon />
                </div>

                {/* Right Icon */}
                <div className="icon">
                    <ArrowForwardIcon />
                </div>

            </div>
        </div>
    )
}

export default Slider