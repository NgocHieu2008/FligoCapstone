import styled from "styled-components";
import Slider from "react-slick";

export const ImageSlider = styled.div`
    width: 100%;
    height: 500px;

    img {
        width: 100%;
        height: 100%;
    }
    `

export const StyledSlider = styled(Slider)`
.slick-dots {
  display: block;
  bottom: 20px;
  margin: 0;
  padding: 0;
  text-align: center;

  li {
    display: inline-block;
    margin: 0 5px;

    button {
      display: block;
      width: 30px;
      height: 30px;
      padding: 0;
      border-radius: 50%;
      opacity: 0.4;
      transition: opacity 300ms ease-in-out;

      &.slick-active {
        opacity: 1;
      }
    }
  }
}
`;