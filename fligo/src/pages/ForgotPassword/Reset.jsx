import React, { useRef, useContext } from "react";
import {
  Wrapper,
  DivStyled,
  Button,
  Title,
  Paragraph,
  Subtitle,
  TextField,
} from "./ResetPassword.styled";
import { RecoveryContext } from "./ResetPassword";

function Reset() {
  const passwordRef = useRef(null);
  const repeatPasswordRef = useRef(null);
  const { username, setPage } = useContext(RecoveryContext);

  // console.log(users);
  const handleConfirmClick = async () => {
    const newPassword = passwordRef.current.value;
    const repeatPassword = repeatPasswordRef.current.value;
    if (newPassword === repeatPassword) {
      try {
        const response = await fetch(
          "https://fligo.vercel.app/reset-password",
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: username,
              password: newPassword,
            }),
          }
        );
        if (response.ok) {
          alert("Password updated successfully!");
          setPage("");
        } else {
          const error = await response.json();
          alert(`An error occurred: ${error.message}`);
        }
      } catch (error) {
        console.error(error);
        alert("An error occurred. Please try again!")
      }
    } else {
      alert("The repeat password is not matched!");
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
          <Subtitle>
            New Password<span style={{ color: "red" }}>*</span>
          </Subtitle>
          <TextField type="password" ref={passwordRef} />
          <Subtitle style={{ marginTop: "30px" }}>
            Repeat New Password<span style={{ color: "red" }}>*</span>
          </Subtitle>
          <TextField type="password" ref={repeatPasswordRef} />

          <Button onClick={handleConfirmClick}>Confirm</Button>
        </DivStyled>
      </Wrapper>
    </>
  );
}

export default Reset;
