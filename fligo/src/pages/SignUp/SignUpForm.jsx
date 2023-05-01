import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Wrapper, DivStyled, DivTitle, DivForm, FormStyled, LabelStyled, InputStyled, FieldWrapper, ErrorStyled, DateContainer, ButtonStyled, PhoneContainer } from './SignUp.styled';
import { useState } from "react";

const SignupSchema = Yup.object().shape({
    username: Yup.string().required('Required').min(6, 'Username must contain at least 6 characters').matches(/^[a-zA-Z0-9]+$/, 'Username must contain only letters and numbers'),
    firstname: Yup.string().required('Required'),
    lastname: Yup.string().required('Required'),
    dateOfBirth: Yup.number().required('Required').positive().integer(),
    monthOfBirth: Yup.number().required('Required').max(12),
    yearOfBirth: Yup.number().required("Required").positive().integer().max(new Date().getFullYear() - 18, 'You must be at least 18 years old'),
    countryCode: Yup.string(),
    phoneNumber: Yup.string().required('Required').matches(/^[0-9]+$/, 'Phone number must contain only numbers'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .required('Required')
        .min(8, 'Password must contain at least 8 characters').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, 'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character'),
    confirmPassword: Yup.string()
        .required('Required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

function SignUp({onSubmit}) {

  return (
    <>
        <DivTitle>Create your new account</DivTitle>
        <DivStyled>
        <Formik
        initialValues={{
          username: '',
          firstname: '',
          lastname: '',
          dayOfBirth: '',
          monthOfBirth: '',
          yearOfBirth: '',
          countryCode: '',
          phoneNumber: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={onSubmit}
      >
        {({ setFieldValue }) => (
          <Form>
            <FieldWrapper>
              <LabelStyled htmlFor="username">User Name <span>*</span></LabelStyled>
              <InputStyled name="username" />
              <ErrorStyled component="div" name="username" />
            </FieldWrapper>
            <FieldWrapper>
              <LabelStyled htmlFor="firstname">First Name <span>*</span></LabelStyled>
              <InputStyled name="firstname" />
              <ErrorStyled component="div" name="firstname" />
            </FieldWrapper>

            <FieldWrapper>
              <LabelStyled htmlFor="lastname">Last Name <span>*</span></LabelStyled>
              <InputStyled name="lastname" />
              <ErrorStyled component="div" name="lastname" />
            </FieldWrapper>

            <DateContainer>
                <FieldWrapper style={{width:"30%"}}>
                  <LabelStyled htmlFor="dayOfBirth">Day of Birth <span>*</span></LabelStyled>
                    <InputStyled name="dayOfBirth" type="number" placeholder="Day" min="1" max="31" >
                    </InputStyled>
                    <ErrorStyled component="div" name="dayOfBirth" />
                </FieldWrapper>
                <FieldWrapper style={{width:"30%"}}>
                  <LabelStyled htmlFor="monthOfBirth">Month of Birth <span>*</span></LabelStyled>
                  <InputStyled
                    name="monthOfBirth"
                    type="number" placeholder="Month" min="1" max="12"
                  >
                  </InputStyled>
                  <ErrorStyled component="div" name="monthOfBirth" />
                </FieldWrapper>
                <FieldWrapper style={{width:"30%"}}>
                  <LabelStyled htmlFor="yearOfBirth">Year of Birth <span>*</span></LabelStyled>
                  <InputStyled
                    min="1900" max={new Date().getFullYear() - 18}
                    name="yearOfBirth"
                    type="number"
                  />
                  <ErrorStyled component="div" name="yearOfBirth" />
                </FieldWrapper>
            </DateContainer>
            <PhoneContainer>
              <FieldWrapper style={{width:"30%"}}>
                <LabelStyled htmlFor="countryCode">Country Code <span>*</span></LabelStyled>
                <InputStyled
                  name="countryCode"
                  as = "select"
                  onChange={(e) => {
                    setFieldValue("countryCode", e.target.value);
                    }
                  }
                  >
                  <option value="+84">+84</option>
                  <option value="+39">+39</option>
                  <option value="+61">+61</option>
                  <option value="+62">+62</option>
                  <option value="+86">+86</option>
                  </InputStyled>
                  <ErrorStyled component="div" name="countryCode" />
              </FieldWrapper>
              <FieldWrapper style={{width:"70%"}}>
                <LabelStyled htmlFor="phoneNumber">Phone Number <span>*</span></LabelStyled>
                <InputStyled name="phoneNumber" />
                <ErrorStyled component="div" name="phoneNumber" />
              </FieldWrapper>
            </PhoneContainer>
            <FieldWrapper>
              <LabelStyled htmlFor="email">Email <span>*</span></LabelStyled>
              <InputStyled name="email" type="email" />
              <ErrorStyled component="div" name="email" />
            </FieldWrapper>
            <FieldWrapper>
              <LabelStyled htmlFor="password">Password <span>*</span></LabelStyled>
              <InputStyled name="password" type="password" />
              <ErrorStyled component="div" name="password" />
            </FieldWrapper>
            <FieldWrapper>
              <LabelStyled htmlFor="confirmPassword">Confirm Password <span>*</span></LabelStyled>
              <InputStyled name="confirmPassword" type="password" />
              <ErrorStyled component="div" name="confirmPassword" />
            </FieldWrapper>
            
            <p style={{color:"var(--blue-secondary-color)",fontSize:"1.3rem", fontWeight:"700"}}>By clicking SIGN UP, I agree that I have read and accepted the <span style={{color:"var(--blue-primary-color)"}}>Terms of use and Privacy Policy</span> of FLIGO</p>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-end", fontWeight:"700", fontSize:"1.5rem"}}>
              <span style={{color:"#ADA599"}}>Already have an account?  </span>
              <Link style={{color:"var(--blue-primary-color)",textDecoration:"none"}} to="/">Login</Link>
            </div>
            <ButtonStyled type="submit">Sign Up</ButtonStyled>
          </Form>
        )}
      </Formik>
        </DivStyled>
</>
  );
};

export default SignUp;
