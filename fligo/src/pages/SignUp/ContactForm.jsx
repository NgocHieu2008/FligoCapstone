import React, { useState } from 'react';
import { DivTitle, DivStyled, LabelStyled, ButtonStyled } from './SignUp.styled';

function ContactForm({email,phoneNo,onSubmit}) {
    const [contactType, setContactType] = useState('email');

    const handleClicked = ()  => {
        onSubmit(contactType)
    };
    return ( 
        <>
            <DivTitle>Choose the authentication method</DivTitle>
            <DivStyled>
                <LabelStyled>
                    <input type="radio" name="contactType" value="email" checked={contactType === 'email'} onChange={() => setContactType('email')} />
                    {email}
                </LabelStyled>
                <LabelStyled>
                    <input type="radio" name="contactType" value="phone" checked={contactType === 'phone'} onChange={() => setContactType('phone')} />
                    {phoneNo}
                </LabelStyled>
                <ButtonStyled onClick={handleClicked}>Continue</ButtonStyled>
            </DivStyled>
        </>
     );
}

export default ContactForm;