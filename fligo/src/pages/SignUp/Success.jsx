
import { Wrapper, DivStyled, Title, Subtitle, Button, Image } from '~/pages/ForgotPassword/ResetPassword.styled'
import congratsImage from "../../assets/congrats.png"

function Success({onSubmit, value}) {
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit();
    };
    return ( 
        <>
        <DivStyled>
          <Title style={{marginBottom:"15px"}}>Congratulations!</Title>
          <Image src={congratsImage} alt="" />
          <Subtitle $center style={{marginTop:"10px"}}>Hi, {value.lastName} !</Subtitle>
          <Subtitle $center style={{marginTop:"10px"}}>Congratulations, you have successfully registered!</Subtitle>
          <Button onClick={handleSubmit} style={{marginTop:"15px"}}>Ready to login</Button>
        </DivStyled>
        </>
     );
}

export default Success;