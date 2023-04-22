import {
  Wrapper,
  DivStyled,
  Title,
  Subtitle,
  Paragraph,
  TextField,
  Button,
} from "./ResetPassword.styled";
import { RecoveryContext } from "./ResetPassword";
import { useContext, useRef } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";

function ForgotPassword() {
  const { setPage, setContact, setContactType } = useContext(RecoveryContext);
  const contactRef = useRef(null);

  async function sendOTP(contact, contactType) {
    let url;
    let body;

    if (contactType === "email") {
      // input is email
      url = "https://fligo-server.vercel.app/otp-reset/send-otp-email";
      body = JSON.stringify({ email: contact });
    } else {
      // input is phone number
      url = "https://fligo-server.vercel.app/otp-reset/send-otp-sms";
      const phoneNumber = contact.trim().startsWith("0")
        ? contact.trim().substring(1)
        : contact.trim();
      body = JSON.stringify({ phoneNumber: phoneNumber });
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });
    return response;
  }

  const handleConfirmClick = async (event) => {
    event.preventDefault();

    const contact = contactRef.current.value;
    console.log(contact);
    const contactType = /^\d{10}$/.test(contact) ? "phone" : "email";
    const response = await sendOTP(contact, contactType);

    if (response.ok) {
      setPage("otp");
      setContact(contact);
      setContactType(contactType)
    } else {
      const errorMessage = await response.text();
      alert(errorMessage);
    }
  };
  return (
    <>
      <Wrapper>
        <DivStyled>
          <Title>Forgot Password</Title>
          <h3
            style={{
              color: "#0e185f",
              marginBottom: "10px",
            }}
          >
            Reset password
          </h3>
          <Paragraph>
            If you have forgotten your password, please enter your registered
            email/ phone number. A verification code will be sent to you.
          </Paragraph>
          <Subtitle>
            Phone number/ Email<span style={{ color: "red" }}>*</span>
          </Subtitle>
          <form action="">
            <TextField ref={contactRef} />
            <Button onClick={handleConfirmClick}>Confirm</Button>
          </form>
        </DivStyled>
      </Wrapper>
    </>
  );
}

export default ForgotPassword;
