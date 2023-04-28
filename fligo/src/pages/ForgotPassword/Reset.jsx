import React, { useRef, useEffect, useState, useContext } from "react";
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
  const [users, setUsers] = useState([]);
  const { username, setPage } = useContext(RecoveryContext);
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    setUsers(storedUsers);
  }, []);

  // console.log(users);
  const handleConfirmClick = () => {
    const newPassword = passwordRef.current.value;
    const repeatPassword = repeatPasswordRef.current.value;
    if (newPassword === repeatPassword) {
      // Find the user in the "users" array
      const userIndex = users.findIndex((user) => user.username === username);
      const updatedUsers = [...users];
      updatedUsers[userIndex].password = newPassword;
      // Update the "users" array in localStorage
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      setPage("");
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
          <TextField ref={passwordRef} />
          <Subtitle style={{ marginTop: "30px" }}>
            Repeat New Password<span style={{ color: "red" }}>*</span>
          </Subtitle>
          <TextField ref={repeatPasswordRef} />

          <Button onClick={handleConfirmClick}>Confirm</Button>
        </DivStyled>
      </Wrapper>
    </>
  );
}

export default Reset;
