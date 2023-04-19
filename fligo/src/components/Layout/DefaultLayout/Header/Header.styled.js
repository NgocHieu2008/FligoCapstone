import styled from "styled-components";
import {ReactComponent as languageIcon} from "../../../../assets/language-icon.svg"

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 15px;
`;

export const NavbarDiv = styled.div`
    width: 90%;
`

export const Logo = styled.img`
   width: 8%;
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

export const Link = styled.a`
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
    height: 18px;
    width: 18px;
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

