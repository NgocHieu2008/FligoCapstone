import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background: #fff;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 50px 30px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    width: 50%;
    margin: 0 auto;
`;
const InputWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    flex-direction: row;
`;

const Input = styled.input`
  width: 40px;
  height: 40px;
  margin: 0 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1.5rem;
  text-align: center;
  outline: none;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  &:focus {
    border-color: #007eff;
  }
`;

const SubmitButton = styled.button`
    background: var(--blue-secondary-color);
    border-radius: 10px;
    color: #fff;
    font-size: 1.5rem;
    padding: 10px;
    border: none;
    cursor: pointer;
    width:150px;
    margin: 0 10px;    

    &:hover {
        background: #fff;
        color: var(--blue-secondary-color);
        border: 1px solid var(--blue-secondary-color);
    }
`;

const BackButton  = styled.button`
    background: #fff;
    border-radius: 10px;
    color: var(--blue-secondary-color);
    font-size: 1.5rem;
    padding: 10px;
    border: 1px solid var(--blue-secondary-color);
    cursor: pointer;
    width:150px;
    margin: 0 10px;

    &:hover {
        background: var(--blue-secondary-color);
        color: #fff;
    }
`;


const OtpForm = ({ onSubmit, onBack }) => {
  const [OTPinput, setOTPinput] = useState(["", "", "", "", "", ""]);

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (isNaN(value) || value === " ") {
      e.preventDefault();
      return;
    }

    // Update the current input field
    setOTPinput((prevInput) => {
      const newInput = [...prevInput];
      newInput[index] = value;
      return newInput;
    });

    // Move the focus to the next input field
    if (value && index < 5) {
      const nextInput = e.target.nextSibling;
      nextInput.focus();
      nextInput.select();
    }
  };

  const handleSubmit = () => {
    console.log(OTPinput.join(""));
    onSubmit(OTPinput.join(""));
  };

  const handleBack = () => {
    onBack();
  };

  const handleResend = () => {
    console.log("Resend");
  };

  return (
    <Wrapper>
        <h2 style={{color:"var(--blue-secondary-color)", marginBottom:"20px"}}>OTP Verification</h2>
        <p style={{fontWeight:"bold", marginBottom:"20px"}}>Verification Code</p>
        <center>
                <p style={{color:"red", marginBottom:"20px", fontSize:"1.2rem"}}>We have sent you a verification code to your mobile number and email. To complete the sign up process, please enter the 6 digit code below</p>
            </center>
        <InputWrapper>
            <Input
                maxLength={1}
                value={OTPinput[0]}
                onChange={(e) => handleChange(e, 0)}
            />
            <Input
                maxLength={1}
                value={OTPinput[1]}
                onChange={(e) => handleChange(e, 1)}
            />
            <Input
                maxLength={1}
                value={OTPinput[2]}
                onChange={(e) => handleChange(e, 2)}
            />
            <Input
                maxLength={1}
                value={OTPinput[3]}
                onChange={(e) => handleChange(e, 3)}
            />
            <Input
                maxLength={1}
                value={OTPinput[4]}
                onChange={(e) => handleChange(e, 4)}
            />
            <Input
                maxLength={1}
                value={OTPinput[5]}
                onChange={(e) => handleChange(e, 5)}
            />
        </InputWrapper>
        <p style={{fontWeight:"bold", marginBottom:"20px"}}>1:56</p>
        <div style={{display:"flex",flexDirection:"row"}}>
            <p style={{margin:"20px", fontSize:"1.4rem"}}>Didn't receive the code?</p>
            <button onClick={handleResend} style={{color:"var(--blue-primary-color)", margin:"20px", fontSize:"1.4rem", fontWeight:"bold", border:"none", background:"none", cursor:"pointer"}}>
            Resend Code
            </button>
        </div>
        <div>
            <BackButton onClick={handleBack}>Back</BackButton>
            <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
        </div>
    </Wrapper>
  );
};

export default OtpForm;