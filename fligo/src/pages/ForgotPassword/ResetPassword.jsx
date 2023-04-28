import React from "react";
import { useState } from "react";
import { createContext } from "react";
import ForgotPassword from "./ForgotPassword";
import OTPInput from "./OTPInput";
import Reset from "./Reset";
import Recovered from "./Recovered";

export const RecoveryContext = createContext();
function ResetPassword() {
  const [page, setPage] = useState("forgot-password");
  // const [email, setEmail] = useState();
  // const [otp, setOTP] = useState();
  const [contact, setContact] = useState();
  const [contactType, setContactType] = useState();
  const [username, setUsername] = useState();

  function NavigateComponents() {
    if (page === "forgot-password") return <ForgotPassword />;
    if (page === "otp") return <OTPInput />;
    if (page === "reset") return <Reset />;
    
    return <Recovered />;
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

export default ResetPassword;
