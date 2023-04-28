import React from "react";
import { useState } from "react";
import { createContext } from "react";
import OTPInput from "~/pages/ForgotPassword/OTPInput";
import FormSignUp from "./FormSignUp";

export const RecoveryContext = createContext();
function SignUp(){
  const [page, setPage] = useState("sign-up");
  const [contact, setContact] = useState();
  const [contactType, setContactType] = useState();
  const [username, setUsername] = useState();

  function NavigateComponents() {
    if (page === "sign-up") return <FormSignUp />;
    if (page === "otp") return <OTPInput />;
    return <FormSignUp />;
  }
  
  return (
    <RecoveryContext.Provider
      value={{ page, setPage, contact, setContact, contactType, setContactType, username, setUsername }}
    >
      <div>
        <NavigateComponents />
      </div>
    </RecoveryContext.Provider>
  );
}

export default SignUp;