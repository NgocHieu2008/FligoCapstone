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
  background-color: var(--white-color);
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 50px 30px;
  /* letter-spacing: 0.6px; */
`;

export const Title = styled.h2`
  color: var(--blue-secondary-color);
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 40px;
`;
export const Subtitle = styled.h5`
  color: ${(props) => (props.$primary ? "var(--blue-secondary-color)" : "var(--black-color)")};
  text-align: ${(props) => (props.$center ? "center" : "left")};
  margin-bottom: 10px;
`;

export const Paragraph = styled.p`
  font-weight: lighter;
  font-size: 12px;
  color: ${(props) => (props.$primary ? "red" : "var(--black-color)")};
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
  background-color: ${(props) => (props.$secondary ? "var(--white-color)" : "var(--blue-secondary-color)")};
  color: ${(props) => (props.$secondary ? "var(--blue-secondary-color)" : "var(--white-color)")};
  border-radius: 25px;
  border: ${(props) => (props.$secondary ? " 1px solid var(--blue-secondary-color)" : "none")};
  display: block;
  margin: 30px auto;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => (props.$secondary ? "var(--blue-secondary-color)" : "var(--white-color)")};
    color: ${(props) => (props.$secondary ? "var(--white-color)" : "var(--blue-secondary-color)")};
    border: ${(props) => (props.$secondary ? "none" : "1px solid var(--blue-secondary-color)")};
    transition: 0.2s ease-in;
  }
`;

export const Link = styled(Button)`
  width: fit-content;
  height: fit-content;
  background: none;
  /* text-transform: uppercase; */
  border: none;
  color: var(--blue-secondary-color);
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
