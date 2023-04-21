import React from "react";
import {
  Wrapper,
  DivStyled,
  Button,
  Title,
  Paragraph,
  Subtitle,
  TextField,
} from "./ResetPassword.styled";
function Reset() {
  return (
    <>
      <Wrapper>
        <DivStyled>
          <Title>Reset password</Title>
          <Paragraph style={{marginBottom:"15px"}}>Please create your new password</Paragraph>
          <Subtitle>
            New Password<span style={{ color: "red" }}>*</span>
          </Subtitle>
          <TextField />
          <Subtitle style={{ marginTop: "30px" }}>
            Repeat New Password<span style={{ color: "red" }}>*</span>
          </Subtitle>
          <TextField />
          <div style={{display:"flex", padding:"0 80px"}}>
            <Button $secondary>Back</Button>
            <Button>Confirm</Button>
          </div>
        </DivStyled>
      </Wrapper>
    </>
  );
}

export default Reset;
