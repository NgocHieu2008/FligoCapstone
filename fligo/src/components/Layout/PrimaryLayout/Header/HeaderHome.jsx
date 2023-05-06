
import {
    Wrapper,
    Navbar,
    NavbarItem,
    Linked,
    Button,
    Logo,
    NavbarDiv,
    Icon,
    ButtonWrapper
  } from "~/components/Layout/DefaultLayout/Header/Header.styled.js";
import {UserContainer, CustomerIcon, MenuList} from "~/components/Layout/PrimaryLayout/Header/HeaderHome.styled.jsx";
import logo from "../../../../assets/Asset3.png";
import { UserContext } from "~/contexts/UserContext";
import {useRef, useState, useEffect, useContext } from "react";
function HeaderHome() {
    const ref = useRef();
    const { userData } = useContext(UserContext);
    const [showAccountMenu, setShowAccountMenu] = useState(false);
   
    //click on account icon
    const handleAccountClick = () => {
        console.log("clicked");
        setShowAccountMenu(!showAccountMenu);
    }
    // click outside to close account menu
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowAccountMenu(false);
        }
      };
  
      const handleEsc = (event) => {
        if (event.keyCode === 27) {
          setShowAccountMenu(false);
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEsc);
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("keydown", handleEsc);
      };
    }, []);


    // click on logout
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/";
    };
    
    return ( 
        <>
        <Wrapper ref={ref} className="wrapper">
        <Logo src={logo} alt="" />
        <NavbarDiv className="navbar">
          <Navbar>
            <NavbarItem>
              <Linked href="/home">Home</Linked>
            </NavbarItem>
            <NavbarItem>
              <Linked href="/order">Order</Linked>
            </NavbarItem>
            <NavbarItem>
              <Linked href="/history">History</Linked>
            </NavbarItem>
            <NavbarItem>
              <Linked href="/">Support</Linked>
            </NavbarItem>
            <NavbarItem>
              <Linked href="/">MRT App</Linked>
            </NavbarItem>
            <NavbarItem>
              <Linked href="/">Promotion</Linked>
            </NavbarItem>
          </Navbar>
        </NavbarDiv>
        <ButtonWrapper>
            
            {userData ? (
                <div>
                  <UserContainer onClick={handleAccountClick}>
                      <CustomerIcon/>
                      {userData.firstname}
                  </UserContainer>
                  {showAccountMenu ? (
                      <MenuList>
                          <li>Profile Infomation</li>
                          <li>Settings</li>
                          <li onClick={handleLogout}>Logout</li>
                      </MenuList>
                  ) : (
                      <></>
                  )}
                </div>
            ) : (
                <></>)}
            <Button>
             <Icon/>
             <span>English</span>
            </Button>
        </ButtonWrapper>
      </Wrapper>
        </>
     );
}

export default HeaderHome;