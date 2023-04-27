import {
  Wrapper,
  DivStyled,
  Title,
  Subtitle,
  Paragraph,
  CodeInput,
  Button,
  Link,
} from "./ResetPassword.styled";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { RecoveryContext } from "./ResetPassword";

function OTPInput() {
  const { setPage, contact, contactType } = useContext(RecoveryContext);
  //   const [timerCount, setTimer] = React.useState(60);
  const [OTPinput, setOTPinput] = useState(["", "", "", "", "", ""]);
  //   const [disable, setDisable] = useState(true);

  //   async function resendOTP() {
  //     await sendOTP(contact, contactType);
  //   }
  async function verifyOTP() {
    let url;
    let body;
    // console.log(contactType);
    if (contactType === "email") {
      url = "https://fligo-server.vercel.app/otp-reset/verify-otp-email";
      body = JSON.stringify({ email: contact, otp: OTPinput.join("") });
    } else {
      url = "https://fligo-server.vercel.app/otp-reset/verify-otp-sms";
      body = JSON.stringify({ phoneNumber: contact, otp: OTPinput.join("") });
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });
    // return response;
    const responseData = await response.json();
    return responseData;
  }

  const handleConfirmClick = async (event) => {
    event.preventDefault();
    const response = await verifyOTP();
    if (response.status === "approved") {
      setPage("reset");
    } else
      alert(
        "The code you have entered is not correct, try again or re-send the link"
      );
    return;
  };

  //   React.useEffect(() => {
  //     let interval = setInterval(() => {
  //       setTimer((lastTimerCount) => {
  //         lastTimerCount <= 1 && clearInterval(interval);
  //         if (lastTimerCount <= 1) setDisable(false);
  //         if (lastTimerCount <= 0) return lastTimerCount;
  //         return lastTimerCount - 1;
  //       });
  //     }, 1000); //each count lasts for a second
  //     //cleanup the interval on complete
  //     return () => clearInterval(interval);
  //   }, [disable]);

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

  const handleBackButton = () => {
    setPage("forgot-password")
  };
  return (
    <>
      <Wrapper>
        <DivStyled>
          <Title>Forget password</Title>

          <Subtitle $center style={{ marginBottom: "30px" }}>
            Verification Code
          </Subtitle>
          <Paragraph $primary>
            We have sent you a verification code to change your password. To
            complete the reset password process, please enter the 6 digit code
            below.
          </Paragraph>

          <form action="">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <CodeInput
                maxLength={1}
                value={OTPinput[0]}
                onChange={(e) => handleChange(e, 0)}
              />
              <CodeInput
                maxLength={1}
                value={OTPinput[1]}
                onChange={(e) => handleChange(e, 1)}
              />
              <CodeInput
                maxLength={1}
                value={OTPinput[2]}
                onChange={(e) => handleChange(e, 2)}
              />
              <CodeInput
                maxLength={1}
                value={OTPinput[3]}
                onChange={(e) => handleChange(e, 3)}
              />
              <CodeInput
                maxLength={1}
                value={OTPinput[4]}
                onChange={(e) => handleChange(e, 4)}
              />
              <CodeInput
                maxLength={1}
                value={OTPinput[5]}
                onChange={(e) => handleChange(e, 5)}
              />
            </div>
            {/* <div>
              <span>Didn't recieve code?</span>{" "}
              <span>
                {" "}
                {disable ? `Resend OTP in ${timerCount}s` : "Resend OTP"}
              </span>
            </div> */}
            <Link>Resend Code</Link>
            <div style={{ display: "flex", padding: "0 80px" }}>
              <Button $secondary onClick={handleBackButton}>Back</Button>
              <Button onClick={handleConfirmClick}>Reset Password</Button>
            </div>
          </form>
        </DivStyled>
      </Wrapper>
    </>
  );
}

export default OTPInput;
