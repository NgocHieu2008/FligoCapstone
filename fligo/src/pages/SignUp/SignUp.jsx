
import { Wrapper } from "./SignUp.styled";
import { useState } from 'react';
import SignUpForm from "~/pages/SignUp/SignUpForm";
import ContactForm from "./ContactForm";
import OtpForm from "./OtpForm";
import Success from "./Success";

function SignUp() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [contactType, setContactType] = useState("email"); // ["email", "phone"]
  const [value, setValue] = useState();

  const handleSignup =  async (value) => {

    // setValue(value);
    // console.log(value);
    // const phoneNo = value.countryCode + value.phoneNumber;
    // value.phoneNo = phoneNo;
    // value.dayOfBirth = value.dateOfBirth + "/" + value.monthOfBirth + "/" + value.yearOfBirth;
    setValue(value);
    // call API check email
    const response = await fetch("http://localhost:8000/check-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: value.email }),
    });
    const data = await response.json();
    if(data.status === "success") {
      setEmail(value.email);
      setPhone(value.phoneNo);
      setStep(2);
      console.log(value);
    } else {
      alert("Email already exists");
    }
  }

  const handleContact = async (contactType) => {
    let url;
    let body;

    if (contactType === "email") {
      setContactType("email");
      url = "http://localhost:8000/otp/send-otp-email";
      body = JSON.stringify({ email: email });
    } else {
      setContactType("phone");
      console.log("phone");
      console.log(phone);
      url = "http://localhost:8000/otp/send-otp-sms";
      const phoneNumber = phone.trim().startsWith("0")
        ? phone.trim().substring(1)
        : phone.trim();
      body = JSON.stringify({ phoneNumber: phoneNumber });
    }

    console.log(body)

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });
    if(response.ok){
      console.log(response);
      setStep(3);
    }
  }

  const handleOtp = async (otp) => {
    let url;
    let body;

    if (contactType === "email") {
      url = "http://localhost:8000/otp/verify-otp-email";
      body = JSON.stringify({ email: email, otp: otp });
    }

    if (contactType === "phone") {
      url = "http://localhost:8000/otp/verify-otp-sms";
      body = JSON.stringify({ phoneNumber: phone, otp: otp });
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    const responseData = await response.json();
    if(responseData.status === "approved") {
      console.log(value);
      // call API create user
      const response = await fetch("http://localhost:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });
      const data = await response.json();
      console.log(data);
      if(data.error === "Error"){
        alert("Something went wrong");
      } else
      setStep(4);
    } else {
      alert("The code you have entered is not correct, try again or re-send the link");
    }

  }

  const handleBack = () => {
    setStep(step - 1);
  }

  const handleLogin = () => {
    // return to login page
    window.location.href = "/";
  }

  return ( 
      <Wrapper>
        {step === 1 && <SignUpForm Submit={handleSignup}/>}
        {step === 2 && <ContactForm onSubmit={handleContact}/>}
        {step === 3 && <OtpForm onSubmit={handleOtp} onBack={handleBack}/>}
        {step === 4 && <Success onSubmit={handleLogin} value={value}/>}
      </Wrapper>
   );
}

export default SignUp;