import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ImageCarousel.css'; // Import the CSS file for the carousel

const ImageCarousel = () => {
    const settings = {
      dots: false, // Hide dots
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true, // Enable autoplay
      autoplaySpeed: 3000, // Set autoplay speed in milliseconds
      arrows: false // Hide arrows
    };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="carousel-slide">
          <img src="/ubcece.png" alt=" 1" />
        </div>
        <div className="carousel-slide">
          <img src="/cairn.png" alt=" 2" />
        </div>
        <div className="carousel-slide">
          <img src="/ubclogo.jpg" alt=" 3" />
        </div>
      </Slider>
    </div>
  );
}

export default ImageCarousel;
