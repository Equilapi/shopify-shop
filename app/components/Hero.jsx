import React from "react";
import Slider from "react-slick";

export function Hero() {
    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    }
    return (
        <div className="hero">
            <Slider {...settings} className="home-slider">
                <div className="slide">
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
                    <a href="http://localhost:3000/products/copia-de-plant-4" className="link">Buy</a>
                </div>
                <div className="slide">
                    <h3>Lorem ipsum dolor sit amet consectetur</h3>
                    <a href="http://localhost:3000/products/copia-de-plant-4" className="link">Buy</a>
                </div>
                <div className="slide">
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <a href="http://localhost:3000/products/copia-de-plant-4" className="link">Buy</a>
                </div>
            </Slider>
        </div>
    )
}