
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

import {useRef, useState, useEffect } from "react";
function HeaderHome() {
    const ref = useRef();

    //check if user is logged in
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    // check token in local storage
    useEffect(() => {
        const token = localStorage.getItem("token");
      if(token){
          fetch("http://localhost:8000/userData",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.status === "Ok") {
              setLoggedInUser(data);
            }
          });
      }
    }, []);
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
      setLoggedInUser(null);
      fetch("http://localhost:8000/logout", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          window.location.href = "/";
        }
        );

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
            
            {loggedInUser ? (
                <div>
                  <UserContainer onClick={handleAccountClick}>
                      <CustomerIcon/>
                      {loggedInUser.data.firstname}
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