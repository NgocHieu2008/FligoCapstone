import React, { useState } from 'react';
import { DivTitle, DivStyled, LabelStyled, ButtonStyled } from './SignUp.styled';

const OtpForm = ({ onSubmit }) => {
  const [otp, setOtp] = useState('');

  const handleSubmit = () => {
    onSubmit(otp);
  };

  return (
    <>
        <DivTitle>Enter the OTP</DivTitle>
        <DivStyled>
            <LabelStyled>
                <input type="text" name="otp" value={otp} onChange={(e) => setOtp(e.target.value)} />
            </LabelStyled>
            <ButtonStyled onClick={handleSubmit}>Continue</ButtonStyled>
        </DivStyled>
    </>
  );
};

export default OtpForm;