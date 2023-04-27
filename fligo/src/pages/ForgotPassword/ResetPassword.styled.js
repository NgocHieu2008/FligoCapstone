import styled from "styled-components";
import background from "../../assets/flight-booking.jpg";

export const Wrapper = styled.section`
  background: url(${background});
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding: 60px;
`;

export const DivStyled = styled.div`
  width: 50%;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 50px 30px;
  /* letter-spacing: 0.6px; */
`;

export const Title = styled.h2`
  color: #0e185f;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 40px;
`;
export const Subtitle = styled.h5`
  color: ${(props) => (props.$primary ? "#0E185F" : "#000")};
  text-align: ${(props) => (props.$center ? "center" : "left")};
  margin-bottom: 10px;
`;

export const Paragraph = styled.p`
  font-weight: lighter;
  font-size: 12px;
  color: ${(props) => (props.$primary ? "red" : "#000")};
  text-align: ${(props) => (props.$primary ? "center" : "justify")};
  margin-bottom: 30px;
`;

export const TextField = styled.input`
  width: 100%;
  height: 40px;
  outline: none;
  border: none;
  border-radius: 3px;
  box-shadow: 0px 4px 4px #c4c4c4;
  border: 0.4px solid #c4c4c4;
  padding-left: 20px;
`;

export const Button = styled.button`
  padding: 10px 30px;
  width: fit-content;
  height: 40px;
  background-color: ${(props) => (props.$secondary ? "#fff" : "#0e185f")};
  color: ${(props) => (props.$secondary ? "#0e185f" : "#fff")};
  border-radius: 25px;
  border: ${(props) => (props.$secondary ? " 1px solid #0e185f" : "none")};
  display: block;
  margin: 30px auto;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => (props.$secondary ? "#0e185f" : "#fff")};
    color: ${(props) => (props.$secondary ? "#fff" : "#0e185f")};
    border: ${(props) => (props.$secondary ? "none" : "1px solid #0e185f")};
    transition: 0.2s ease-in;
  }
`;

export const Link = styled(Button)`
  width: fit-content;
  height: fit-content;
  background: none;
  /* text-transform: uppercase; */
  border: none;
  color: #0e185f;
  text-decoration: underline;
  display: block;
  margin: 20px auto 0;
  font-size: 14px;
  &:hover {
    text-decoration: none;
    border: none;
  }
`;

export const CodeInput = styled(TextField)`
  padding-left: 18px;
  width: 40px;
  margin: 0 15px;
`;

export const Image = styled.img`
  margin: 20px auto;
  width: 35%;
  object-fit: scale-down;
`;
