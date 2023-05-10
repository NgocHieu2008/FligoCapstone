import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #fff;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 50px 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 50%;
  margin: 0 auto;
`;

const Button = styled.button`
  background: var(--blue-secondary-color);
  border-radius: 10px;
  color: #fff;
  font-size: 1.5rem;
  padding: 10px;
  border: none;
  cursor: pointer;
  width: 150px;
  margin: 0 10px;

  &:hover {
    background: #fff;
    color: var(--blue-secondary-color);
    border: 1px solid var(--blue-secondary-color);
  }
`;

function ContactForm({ onSubmit }) {
  const [contactType, setContactType] = useState("email");

  const handlePhoneSubmit = () => {
    setContactType("phone");
    onSubmit("phone");

  };

  const handleEmailSubmit = () => {
    setContactType("email");
    onSubmit("email");
  };
  return (
    <Wrapper>
      <h2
        style={{ color: "var(--blue-secondary-color)", marginBottom: "20px" }}
      >
        Verification Needed!
      </h2>
      <p style={{ fontWeight: "bold", marginBottom: "20px" }}>
        Choose a way to verify
      </p>
      <center>
        <p style={{ color: "red", marginBottom: "20px" }}>
          In order to fully manage this account on Fligo, you’ll need to confirm
          that it’s yours. Please select how you’d like to get a verification
          code.
        </p>
      </center>
      <div>
        <Button onClick={handleEmailSubmit}>Email</Button>
        <Button onClick={handlePhoneSubmit}>Phone Number</Button>
      </div>
    </Wrapper>
  );
}

export default ContactForm;
