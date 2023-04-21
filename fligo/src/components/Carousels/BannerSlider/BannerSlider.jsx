import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import banner1 from '../../../assets/Banner 1.png';
import banner2 from '../../../assets/Banner 2.png';
import {ImageSlider, StyledSlider} from './BannerSlider.styled.js';

function BannerSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
      </StyledSlider>
    </div>
  );
}

export default BannerSlider;
