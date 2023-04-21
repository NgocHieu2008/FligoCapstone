import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { Wrapper, DivStyled, DivTitle, DivForm, FormStyled, LabelStyled, InputStyled, FieldWrapper, ErrorStyled, DateContainer, ButtonStyled } from './SignUp.styled';

const SignupSchema = Yup.object().shape({
    userName: Yup.string().required('Required').min(6, 'Username must contain at least 6 characters'),
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    dayOfBirth: Yup.number().required('Required').positive().integer(),
    monthOfBirth: Yup.number().required('Required').max(12),
    yearOfBirth: Yup.number().required("Required").positive().integer().max(new Date().getFullYear() - 18),
    passportNumber: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .required('Required')
        .min(8, 'Password must contain at least 8 characters'),
    confirmPassword: Yup.string()
        .required('Required')
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const SignUp = () => {
  const handleSubmit = (values) => {
    console.log(values);
    const id = Date.now().toString();
    const dateOfBirth = moment(`${values.yearOfBirth}-${values.monthOfBirth}-${values.dayOfBirth}`).format('YYYY-MM-DD');
    const user = {
        id,
        userName: values.userName,
        firstName: values.firstName,
        lastName: values.lastName,
        dateOfBirth,
        passportNumber: values.passportNumber,
        email: values.email,
        password: values.password,
    }
    const users = JSON.parse(localStorage.getItem('users')) || [];
    // check if user already exists
    const userExists = users.find((user) => user.email === values.email);
    if (userExists) {
        alert('User already exists');
        return;
    }
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    window.location.href = '/';
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
          passportNumber: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, values, setFieldValue }) => (
          <Form>
            <div>
              <label htmlFor="userName">User Name</label>
              <InputStyled name="userName" />
              <ErrorMessage name="userName" />
            </div>
            <div>
              <label htmlFor="firstName">First Name</label>
              <FieldWrapper>
                  <InputStyled name="firstName" />
                  <ErrorMessage name="firstName" />
              </FieldWrapper>
            </div>

            <div>
              <label htmlFor="lastName">Last Name</label>
              <InputStyled name="lastName" />
              <ErrorMessage name="lastName" />
            </div>

            <DateContainer>
                <div>
                  <label htmlFor="monthOfBirth">Month of Birth</label>
                  <InputStyled
                    name="monthOfBirth"
                    type="number" placeholder="Month" min="1" max="12"
                  >
                  </InputStyled>
                  <ErrorMessage name="monthOfBirth" />
                </div>
                <div>
                  <label htmlFor="yearOfBirth">Year of Birth</label>
                  <InputStyled
                    min="1900" max={new Date().getFullYear() - 18}
                    name="yearOfBirth"
                    type="number"
                  />
                  <ErrorMessage name="yearOfBirth" />
                </div>
                <div>
                  <label htmlFor="dayOfBirth">Day of Birth</label>
                  <InputStyled name="dayOfBirth" type="number" placeholder="Day" min="1" max="31" >
                  </InputStyled>
                  <ErrorMessage name="dayOfBirth" />
                </div>
            </DateContainer>
            <div>
              <label htmlFor="passportNumber">Passport Number</label>
              <InputStyled name="passportNumber" />
              <ErrorMessage name="passportNumber" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <InputStyled name="email" type="email" />
              <ErrorMessage name="email" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <InputStyled name="password" type="password" />
              <ErrorMessage name="password" />
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <InputStyled name="confirmPassword" type="password" />
              <ErrorMessage name="confirmPassword" />
            </div>
            
            <p>By clicking SIGN UP, I agree that I have read and accepted the Terms of use and Privacy Policy of FLIGO</p>
            <p><span>Already have an account? </span><Link to="/">Login</Link></p>
            <ButtonStyled type="submit">Sign Up</ButtonStyled>
          </Form>
        )}
      </Formik>
        </DivStyled>
    </Wrapper>
  );
};

export default SignUp;
