import {
  Wrapper,
  Navbar,
  NavbarItem,
  Link,
  Button,
  Logo,
  NavbarDiv,
  Icon
} from "./Header.styled.js";
import logo from "../../../../assets/Asset3.png";
import languageIcon from "../../../../assets/language-icon.svg"
// import IconLanguage from "./LanguageIcon.jsx";

function Header() {
  return (
    <>
      <Wrapper className="wrapper">
        <Logo src={logo} alt="" />
        <NavbarDiv className="navbar">
          <Navbar>
            <NavbarItem>
              <Link href="">My Booking</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="">Online Check-in</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="">Flight Extra</Link>
            </NavbarItem>
          </Navbar>
        </NavbarDiv>
        <div className="button">
          <Button>
           <Icon/>
           <span>English</span> 
          </Button>
        </div>
      </Wrapper>
    </>
  );
}

export default Header;
