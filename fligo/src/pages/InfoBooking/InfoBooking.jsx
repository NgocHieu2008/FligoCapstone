import {
  Wrapper,
  FormWrapper,
  FormTitle,
  FormStyled,
  FieldWrapper,
  InputStyled,
  LabelStyled,
  ErrorStyled,
  PhoneContainer,
  DateContainer,
  ButtonStyled,
  DetailWrapper,
  ImageStyled,
  InforStyled,
  InforItem,
  ModalStyled
} from "./InforBooking.styled";
import { Formik } from "formik";
import BookingTitle from "~/components/BookingTitle/BookingTitle";
import * as Yup from "yup";
import image from "../../assets/flight.png";
import { UserContext } from "~/contexts/UserContext";
import { useContext, useState } from "react";
import vietjet from "~/assets/vietjet-air-logo.png";
import vietnamairline from "~/assets/vietnam-airline-logo.png";
import arrow4 from "~/assets/Arrow 4.png";
import ArrowIcon from "~/assets/Arrow 5.png";
import moment from "moment";
import FlightDetail from "~/components/Cards/FlightDetail/FlightDetail";

const PassengerSchema = Yup.object().shape({
  title: Yup.string().oneOf(["Mr.", "Ms."]).required("Required"),
  firstname: Yup.string().required("Required"),
  lastname: Yup.string().required("Required"),
  dayOfBirth: Yup.number().required("Required").positive().integer(),
  monthOfBirth: Yup.number().required("Required").max(12),
  yearOfBirth: Yup.number()
    .required("Required")
    .positive()
    .integer()
    .max(new Date().getFullYear(), `Invalid number of year`),
  nationality: Yup.string().required("Required"),
  passport: Yup.string()
    .required("Required")
    .matches(/^\d{8}$/, "Passport number must be 8 digits"),
  dayExpire: Yup.number().required("Required").positive().integer(),
  monthExpire: Yup.number().required("Required").max(12),
  yearExpire: Yup.number().required("Required").positive().integer(),
  // .test(
  //   "expiration-date",
  //   "Passport has expired",
  //   ({ dayExpire, monthExpire, yearExpire }) => {
  //     const expirationDate = new Date(yearExpire, monthExpire - 1, dayExpire);
  //     const today = new Date();
  //     return expirationDate >= today;
  //   }
  // ),
});

function InfoBooking() {
  const { userData } = useContext(UserContext);
  const flight = JSON.parse(localStorage.getItem("selectedFlight"));
  // console.log(seat);
  const Submit = (values) => {
    console.log(values);
  };

  // console.log(userData);
  // console.log(userData?.firstname);

  const SubmitInfo = async (values) => {
    console.log(values);
    console.log("Hi");
  const SubmitInfo = (values) => {
    // add key time order to values
    // time order = current time
    const timeOrder = new Date().toISOString();
    values = { ...values, timeOrder };
    console.log(values);
    // check expire date
    const expireDate = moment(`${values.monthExpire}/${values.dayExpire}/${values.yearExpire}`, 'MM/DD/YYYY');
    const currentDate = moment();
    if (expireDate.isBefore(currentDate)) {
      alert("Passport is expired");
      return;
    } else {
      // save passenger info to local storage
    localStorage.setItem("passengerInfo", JSON.stringify(values));
    }

    window.location.href = "/confirm-info";
  };

  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  }

  const handleClosePopup = () => {
    setShowPopup(false);
  }

  return (
    <>
      <BookingTitle title="Your Booking" active="booking" />
      <Wrapper>
        <FormWrapper>
          <div className="contact">
            <FormTitle>Contact Details</FormTitle>
            <Formik
              initialValues={{
                firstname: "",
                lastname: "",
                countryCode: "",
                phoneNumber: "",
                email: "",
              }}
              onSubmit={Submit}
            >
              {({ setFieldValue }) => (
                <FormStyled>
                  <FieldWrapper>
                    <LabelStyled htmlFor="firstname">
                      First Name <span>*</span>
                    </LabelStyled>
                    <InputStyled name="firstname" value={userData?.firstname} />
                    <ErrorStyled component="div" name="firstname" />
                  </FieldWrapper>
                  <FieldWrapper>
                    <LabelStyled htmlFor="lastname">
                      Last Name <span>*</span>
                    </LabelStyled>
                    <InputStyled name="lastname" value={userData?.lastname} />
                    <ErrorStyled component="div" name="lastname" />
                  </FieldWrapper>
                  <PhoneContainer>
                    <FieldWrapper style={{ width: "30%" }}>
                      <LabelStyled htmlFor="countryCode">
                        Country Code <span>*</span>
                      </LabelStyled>
                      <InputStyled
                        name="countryCode"
                        as="select"
                        onChange={(e) =>
                          setFieldValue("countryCode", e.target.value)
                        }
                      >
                        <option value="+84">+84</option>
                        <option value="+39">+39</option>
                        <option value="+61">+61</option>
                        <option value="+62">+62</option>
                        <option value="+86">+86</option>
                      </InputStyled>
                      <ErrorStyled component="div" name="countryCode" />
                    </FieldWrapper>
                    <FieldWrapper style={{ width: "70%" }}>
                      <LabelStyled htmlFor="phoneNumber">
                        Phone Number <span>*</span>
                      </LabelStyled>
                      <InputStyled
                        name="phoneNumber"
                        value={userData?.phoneNo}
                      />
                      <ErrorStyled component="div" name="phoneNumber" />
                    </FieldWrapper>
                  </PhoneContainer>
                  <FieldWrapper>
                    <LabelStyled htmlFor="email">
                      Email <span>*</span>
                    </LabelStyled>
                    <InputStyled name="email" value={userData?.email} />
                    <ErrorStyled component="div" name="email" />
                  </FieldWrapper>
                </FormStyled>
              )}
            </Formik>
          </div>
          <div className="passenger">
            <FormTitle>Passenger Details</FormTitle>
            <Formik
              initialValues={{
                title: "Mr.",
                firstname: userData?.firstname ?? "",
                lastname: userData?.lastname ?? "",
                dayOfBirth: "",
                monthOfBirth: "",
                yearOfBirth: "",
                nationality: "",
                passport: "",
                dayExpire: "",
                monthExpire: "",
                yearExpire: "",
              }}
              validationSchema={PassengerSchema}
              onSubmit={SubmitInfo}
            >
              {({ setFieldValue }) => (
                <FormStyled>
                  <FieldWrapper>
                    <LabelStyled htmlFor="title">
                      Country Code <span>*</span>
                    </LabelStyled>
                    <InputStyled
                      name="title"
                      as="select"
                      onChange={(e) => setFieldValue("title", e.target.value)}
                    >
                      <option value="Mr.">Mr.</option>
                      <option value="Ms.">Ms.</option>
                    </InputStyled>
                    <ErrorStyled component="div" name="title" />
                  </FieldWrapper>
                  <FieldWrapper>
                    <LabelStyled htmlFor="firstname">
                      First Name <span>*</span>
                    </LabelStyled>
                    <InputStyled name="firstname" />
                    <ErrorStyled component="div" name="firstname" />
                  </FieldWrapper>
                  <FieldWrapper>
                    <LabelStyled htmlFor="lastname">
                      Last Name <span>*</span>
                    </LabelStyled>
                    <InputStyled name="lastname" />
                    <ErrorStyled component="div" name="lastname" />
                  </FieldWrapper>
                  <DateContainer>
                    <FieldWrapper style={{ width: "32%" }}>
                      <LabelStyled htmlFor="dayOfBirth">
                        Day of Birth <span>*</span>
                      </LabelStyled>
                      <InputStyled
                        name="dayOfBirth"
                        type="number"
                        placeholder="Day"
                        min="1"
                        max="31"
                      ></InputStyled>
                      <ErrorStyled component="div" name="dayOfBirth" />
                    </FieldWrapper>
                    <FieldWrapper style={{ width: "32%" }}>
                      <LabelStyled htmlFor="monthOfBirth">
                        Month of Birth <span>*</span>
                      </LabelStyled>
                      <InputStyled
                        name="monthOfBirth"
                        type="number"
                        placeholder="Month"
                        min="1"
                        max="12"
                      ></InputStyled>
                      <ErrorStyled component="div" name="monthOfBirth" />
                    </FieldWrapper>
                    <FieldWrapper style={{ width: "32%" }}>
                      <LabelStyled htmlFor="yearOfBirth">
                        Year of Birth <span>*</span>
                      </LabelStyled>
                      <InputStyled
                        min="1900"
                        max={new Date().getFullYear() - 18}
                        name="yearOfBirth"
                        type="number"
                      />
                      <ErrorStyled component="div" name="yearOfBirth" />
                    </FieldWrapper>
                  </DateContainer>
                  <FieldWrapper>
                    <LabelStyled htmlFor="nationality">
                      Nationality <span>*</span>
                    </LabelStyled>
                    <InputStyled name="nationality" />
                    <ErrorStyled component="div" name="nationality" />
                  </FieldWrapper>
                  <FieldWrapper>
                    <LabelStyled htmlFor="passport">
                      Passport <span>*</span>
                    </LabelStyled>
                    <InputStyled name="passport" />
                    <ErrorStyled component="div" name="passport" />
                  </FieldWrapper>
                  <DateContainer>
                    <FieldWrapper style={{ width: "32%" }}>
                      <LabelStyled htmlFor="dayExpire">
                        Expiry Day <span>*</span>
                      </LabelStyled>
                      <InputStyled
                        name="dayExpire"
                        type="number"
                        placeholder="Day"
                        min="1"
                        max="31"
                      ></InputStyled>
                      <ErrorStyled component="div" name="dayExpire" />
                    </FieldWrapper>
                    <FieldWrapper style={{ width: "32%" }}>
                      <LabelStyled htmlFor="monthExpire">
                        Expiry Month <span>*</span>
                      </LabelStyled>
                      <InputStyled
                        name="monthExpire"
                        type="number"
                        placeholder="Month"
                        min="1"
                        max="12"
                      ></InputStyled>
                      <ErrorStyled component="div" name="monthExpire" />
                    </FieldWrapper>
                    <FieldWrapper style={{ width: "32%" }}>
                      <LabelStyled htmlFor="yearExpire">
                        Expiry Year <span>*</span>
                      </LabelStyled>
                      <InputStyled min="1900" name="yearExpire" type="number" />
                      <ErrorStyled component="div" name="yearExpire" />
                    </FieldWrapper>
                  </DateContainer>
                  <ButtonStyled type="submit">Continue</ButtonStyled>
                </FormStyled>
              )}
            </Formik>
          </div>
        </FormWrapper>

        <DetailWrapper>
          <ImageStyled>
            <img src={image} alt="" />
          </ImageStyled>
          <InforStyled>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <img
                src={
                  flight.airline === "VietJet Air" ? vietjet : vietnamairline
                }
                alt="airline"
              />
              <p style={{ marginTop: "20px" }}>{flight.airline}</p>
            </div>
            <img src={arrow4} alt="" style={{ height: "100%" }} />
            <InforItem>
                <div style={{display:"inline-flex", alignItems:"center"}}>
                  <div style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
                    <p style={{fontWeight:"700", fontSize:"2rem"}}>{flight.departureCode}</p>
                    <p>
                    {moment(flight.departure_time).format("HH:mm")}
                    </p>
                  </div>
                  <img src={ArrowIcon} alt="" style={{height:"15px", margin:"0 20px"}}/>
                  <div style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
                    <p style={{fontWeight:"700", fontSize:"2rem"}}>{flight.arrivalCode}</p>
                    <p>
                    {moment(flight.arrival_time).format("HH:mm")}
                    </p>
                  </div>
                </div>
                <p style={{color:"gray", marginTop:"20px"}}>
                  {moment(flight.departure_time).format("ddd, DD MMM YYYY")}
                </p>
            </InforItem>
          </InforStyled>
          <p style={{color:"#0E185F", marginBottom:"10px", cursor:"pointer"}}
          onClick={handleOpenPopup}
          >Flight Detail</p>
          <ModalStyled isOpen={showPopup} onRequestClose={handleClosePopup} ariaHideApp={false}>
        <FlightDetail flight={flight} />
      </ModalStyled>
        </DetailWrapper>
        
      </Wrapper>
    </>
  );
}}

export default InfoBooking;
