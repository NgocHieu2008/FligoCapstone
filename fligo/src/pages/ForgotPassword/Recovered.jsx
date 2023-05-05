import React from 'react'
import { Wrapper, DivStyled, Title, Subtitle, Button, Image } from './ResetPassword.styled'
import congratsImage from "../../assets/congrats.png"

function Recovered() {
  const handleLogin = () => {
    // return to login page
    window.location.href = "/";
  }
  return (
    <>
      <Wrapper>
        <DivStyled>
          <Title style={{marginBottom:"15px"}}>Congratulations!</Title>
          <Image src={congratsImage} alt="" />
          <Subtitle $center style={{marginTop:"10px"}}>Your password has been changed successfully!</Subtitle>
          <Button style={{marginTop:"15px"}} onClick={handleLogin}>Ready to login</Button>
        </DivStyled>
      </Wrapper>
    </>
  )
}

export default Recovered
