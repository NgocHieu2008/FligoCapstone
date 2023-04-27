
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
import {UserContainer, CustomerIcon} from "~/components/Layout/PrimaryLayout/Header/HeaderHome.styled.jsx";
import logo from "../../../../assets/Asset3.png";

import {useRef, useState } from "react";
function HeaderHome() {
    const ref = useRef();

    //check if user is logged in
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    const [loggedInUser, setLoggedInUser] = useState(user);

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
            <Button>
             <Icon/>
             <span>English</span>
            </Button>


            {loggedInUser ? (
                <UserContainer>
                    <CustomerIcon/>
                    <span>{loggedInUser.firstName}</span>
                </UserContainer>
            ) : (
                <>
                </>
            )}
        </ButtonWrapper>
      </Wrapper>
        </>
     );
}

export default HeaderHome;