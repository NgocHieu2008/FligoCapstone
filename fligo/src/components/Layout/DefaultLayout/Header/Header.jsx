import {
  Wrapper,
  Navbar,
  NavbarItem,
  Linked,
  Button,
  Logo,
  NavbarDiv,
  Icon,
  RegisterButton,
  LoginButton,
  ButtonWrapper,
  FormWrapper,
  LoginForm,
  Label,
  Input,
  FormHeader,
  LoginButtonForm,
  ErrorMessage,
  Br
} from "./Header.styled.js";
import { Link } from 'react-router-dom';
import logo from "../../../../assets/Asset3.png";
import { useState, useEffect, useRef } from "react";


function Header() {

  const [showLoginForm, setShowLoginForm] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const ref = useRef();
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLoginClick = () => {
    setShowLoginForm(!showLoginForm);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "username") {
      setUsername(value);
    } else {
      setPassword(value);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    //get users from local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find( (user) => user.userName === username);

    if (!user) {
      setErrorMessage("User does not exist");
      return;
    }

    if (user.password !== password) {
      setErrorMessage("Password is incorrect");
      return;
    } else {
      setErrorMessage(null);
    }

    if(user && user.password === password) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      // routes to home page
      window.location.href = "/home";
      alert("Login successful");
    }

    // Reset form
    setUsername("");
    setPassword("");
    setShowLoginForm(false);
  };

  const handleRegisterClick = () => {
    setShowLoginForm(false);
  };

  const handleForgotPwClick = () => {
    setShowLoginForm(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowLoginForm(false);
      }
    };

    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setShowLoginForm(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <>
      <Wrapper ref={ref} className="wrapper">
        <Logo src={logo} alt="" />
        <NavbarDiv className="navbar">
          <Navbar>
            <NavbarItem>
              <Linked href="">My Booking</Linked>
            </NavbarItem>
            <NavbarItem>
              <Linked href="">Online Check-in</Linked>
            </NavbarItem>
            <NavbarItem>
              <Linked href="">Flight Extra</Linked>
            </NavbarItem>
          </Navbar>
        </NavbarDiv>
        
          <ButtonWrapper>
            <LoginButton onClick={handleLoginClick}><span>Login</span></LoginButton>
            {showLoginForm && (
              <FormWrapper>
                <FormHeader>
                  <h5>Log in to your account</h5>
                </FormHeader>
                <LoginForm onSubmit={handleFormSubmit}>
                
                  <div>
                    <Label htmlFor="username">User name</Label>
                    <Input
                      type="text"
                      id="username"
                      name="username"
                      value={username}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input
                      type="password"
                      id="password"
                      name="password"
                      value={password}
                      onChange={handleInputChange}
                    />
                  </div>
                  {/* forgot password */}
                  <div>
                    <Link to="/forgot-password" onClick={handleForgotPwClick}>Forgot password?</Link>
                  </div>
                  {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
                  <LoginButtonForm type="submit">Login</LoginButtonForm>
                </LoginForm>
                <div><span>Already have an account?</span> <Link to="/signup" onClick={handleRegisterClick}>Register</Link></div>
                <Br/>
                
              </FormWrapper>
            )}
            <Link style={{textDecoration:"none"}} to="/signup">
              <RegisterButton onClick={handleRegisterClick}>Register</RegisterButton>
            </Link>
            <Button>
             <Icon/>
             <span>English</span>
            </Button>
          </ButtonWrapper>
      </Wrapper>
    </>
  );
}

export default Header;
