import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {ImageSlider, StyledSlider} from './BannerSlider.styled.js';

function BannerSlider({banner1, banner2, banner3}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    appendDots: dots => (
      <ul>{dots}</ul>
    ), 
  };
  
  return (
    <div>
      <StyledSlider {...settings}>
        <ImageSlider>
          <img alt="banner 1" src={banner1} />
        </ImageSlider>
        <ImageSlider>
          <img alt="banner 2" src={banner2} />
        </ImageSlider>
        <ImageSlider>
          <img alt="banner 3" src={banner3} />
        </ImageSlider>
      </StyledSlider>
    </div>
  );
}

export default BannerSlider;
