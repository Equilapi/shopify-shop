import React from "react";
import Slider from "react-slick";

export function Hero() {
    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
    }
    return (
        <div className="hero">
            <Slider {...settings} className="home-slider">
                <div className="slide">
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
                    <a href="#" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-md px-8 py-4 text-center me-2 mb-2">Buy</a>
                </div>
                <div className="slide">
                    <h3>Lorem ipsum dolor sit amet consectetur</h3>
                    <a href="#" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-md px-8 py-4 text-center me-2 mb-2">Buy</a>
                </div>
                <div className="slide">
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <a href="#" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-md px-8 py-4 text-center me-2 mb-2">Buy</a>
                </div>
            </Slider>
        </div>
    )
}