import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Wrapper, DivStyled, DivTitle, DivForm, FormStyled, LabelStyled, InputStyled, FieldWrapper, ErrorStyled, DateContainer, ButtonStyled, PhoneContainer } from './SignUp.styled';
import { RecoveryContext } from './SignUp';
import { useContext, useRef } from "react";

const SignupSchema = Yup.object().shape({
    userName: Yup.string().required('Required').min(6, 'Username must contain at least 6 characters').matches(/^[a-zA-Z0-9]+$/, 'Username must contain only letters and numbers'),
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    dayOfBirth: Yup.number().required('Required').positive().integer(),
    monthOfBirth: Yup.number().required('Required').max(12),
    yearOfBirth: Yup.number().required("Required").positive().integer().max(new Date().getFullYear() - 18, 'You must be at least 18 years old'),
    countryCode: Yup.string().required('Required'),
    phoneNumber: Yup.string().required('Required').matches(/^[0-9]+$/, 'Phone number must contain only numbers'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .required('Required')
        .min(8, 'Password must contain at least 8 characters'),
    confirmPassword: Yup.string()
        .required('Required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const FormSignUp = () => {
    const { setPage, setContact, setContactType, setUsername } = useContext(RecoveryContext);
    const contactRef = useRef(null);


  const handleSubmit = (values) => {
    const { userName, firstName, lastName, dayOfBirth, monthOfBirth, yearOfBirth, passportNumber, email, password } = values;
    const DOB = moment(`${yearOfBirth}-${monthOfBirth}-${dayOfBirth}`).format('YYYY-MM-DD');
    fetch('http://localhost:8000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userName, firstName, lastName, DOB, passportNumber, email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'Ok') {
            setPage("otp");
        } else {
          alert('Register failed');
        }
      });
  };
  return (
    <Wrapper>
        <DivTitle>Create your new account</DivTitle>
        <DivStyled>
        <Formik
        initialValues={{
          userName: '',
          firstName: '',
          lastName: '',
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
        onSubmit={handleSubmit}
      >
        {({ errors, touched, values, setFieldValue }) => (
          <Form>
            <FieldWrapper>
              <LabelStyled htmlFor="userName">User Name <span>*</span></LabelStyled>
              <InputStyled name="userName" />
              <ErrorStyled component="div" name="userName" />
            </FieldWrapper>
            <FieldWrapper>
              <LabelStyled htmlFor="firstName">First Name <span>*</span></LabelStyled>
              <InputStyled name="firstName" />
              <ErrorStyled component="div" name="firstName" />
            </FieldWrapper>

            <FieldWrapper>
              <LabelStyled htmlFor="lastName">Last Name <span>*</span></LabelStyled>
              <InputStyled name="lastName" />
              <ErrorStyled component="div" name="lastName" />
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
                  onChange={(e) => setFieldValue('countryCode', e.target.value)}
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
    </Wrapper>
  );
};

export default FormSignUp;
