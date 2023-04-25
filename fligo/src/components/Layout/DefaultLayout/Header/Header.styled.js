import styled from "styled-components";
import {ReactComponent as languageIcon} from "../../../../assets/language-icon.svg"

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  z-index: 9999; /* Đảm bảo header luôn nằm trên top nhất */
  padding: 5px 10px;
`;

export const NavbarDiv = styled.div`
    width: 90%;
`

export const Logo = styled.img`
   width: 6%;
   object-fit: cover;
`

export const Navbar = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
`;

export const NavbarItem = styled.li`
  text-decoration: none;
  list-style-type: none;
  margin: 0 30px;
`;

export const Linked = styled.a`
  text-decoration: none;
  color: #0e185f;
  font-weight: bolder;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  &:hover {
    color: #2ABCFF;
  }
`;

export const Icon = styled(languageIcon)`
    height: 16px;
    width: 16px;
    margin-right: 8px;
    & path {
        fill: ${({color}) => color};
    }
`

export const Button = styled.button`
  background-color: #75b40d;
  text-align: center;
  padding: 5px;
  outline: none;
  border: none;
  color: #fff;
  width: 90px;
  height: 30px;
  font-weight: bolder;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: #75b40d;
    background-color: #fff;
    outline: 1px solid #75b40d;
    & ${Icon} path {
      fill: #75b40d;
    }
  }
`;

export const RegisterButton = styled.button`
  background-color: var(--blue-secondary-color);
  text-align: center;
  padding: 5px;
  outline: none;
  border: none;
  color: #fff;
  width: 90px;
  height: 30px;
  font-weight: bolder;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: var(--blue-secondary-color);
    background-color: #fff;
    outline: 1px solid var(--blue-secondary-color);
    & ${Icon} path {
      fill: var(--blue-secondary-color);
    }
  }
`;

export const LoginButton = styled.button`
  background-color: var(--blue-primary-color);
  text-align: center;
  padding: 5px;
  outline: none;
  border: none;
  color: #fff;
  width: 90px;
  height: 30px;
  font-weight: bolder;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: var(--blue-primary-color);;
    background-color: #fff;
    outline: 1px solid var(--blue-primary-color);;
    & ${Icon} path {
      fill: var(--blue-primary-color);;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 10px;
  `;

  export  const FormWrapper = styled.div`
  position: absolute;
  top: 80%;
  right: 45px;
  min-width: 240px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;

export const FormHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 5px 5px 0 0;
  background-color: var(--blue-primary-color);
  color: #fff;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
  margin: 10px 0;
  font-weight: bold;
  color: var(--blue-secondary-color);
  font-size: 1.25rem;
`;

export const Input = styled.input`
    width: 100%;
    height: 40px;
    outline: none;
    border: none;
    border-radius: 3px;
    box-shadow: 0px 4px 4px #c4c4c4;
    border: 0.4px solid #c4c4c4;
    margin-bottom: 10px;
    padding: 8px;
    font-size: 16px;
`;

export const LoginButtonForm = styled.button`
  background-color: var(--green-primary-color);
  text-align: center;
  padding: 5px;
  outline: none;
  border: none;
  color: #fff;
  width: 90px;
  height: 30px;
  font-weight: bolder;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  &:hover {
    color: var(--green-primary-color);;
    background-color: #fff;
    outline: 1px solid var(--green-primary-color);;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
`;

export const Br = styled.br`
  display: block;
  height: 20px;
`;