import React, { useContext } from "react";
import {
  Wrapper,
  DivStyled,
  Button,
  Title,
  Paragraph,
  FieldWrapper,
  LabelStyled,
  InputStyled,
  ErrorStyled,
} from "./ResetPassword.styled";
import { RecoveryContext } from "./ResetPassword";
import { Form, Formik } from "formik";
import * as Yup from "yup";

const PasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required("Required")
    .min(8, "Password must contain at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character"
    ),
  confirmPassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password"), null], "Password must match"),
});

function Reset() {
  const { contact, setPage } = useContext(RecoveryContext);

  // console.log(users);
  const handleConfirmClick = async (values) => {
    try {
      const response = await fetch("https://fligo.vercel.app/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contact: contact,
          password: values.password,
        }),
      });
      if (response.ok) {
        alert("Password updated successfully!");
        setPage("");
      } else {
        const error = await response.json();
        alert(`An error occurred: ${error.message}`);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again!");
    }
  };

  return (
    <>
      <Wrapper>
        <DivStyled>
          <Title>Reset password</Title>
          <Paragraph style={{ marginBottom: "15px" }}>
            Please create your new password
          </Paragraph>
          <Formik
            initialValues={{ password: "", repeatPassword: "" }}
            validationSchema={PasswordSchema}
            onSubmit={handleConfirmClick}
          >
            <Form>
              <FieldWrapper>
                <LabelStyled htmlFor="password">
                  New password <span>*</span>
                </LabelStyled>
                <InputStyled name="password" type="password"/>
                <ErrorStyled component="div" name="password" />
              </FieldWrapper>
              <FieldWrapper>
                <LabelStyled htmlFor="confirmPassword">
                  Confirm password <span>*</span>
                </LabelStyled>
                <InputStyled name="confirmPassword" type="password"/>
                <ErrorStyled component="div" name="confirmPassword" />
              </FieldWrapper>
              <Button type="submit">Confirm</Button>
            </Form>
          </Formik>
        </DivStyled>
      </Wrapper>
    </>
  );
}

export default Reset;
