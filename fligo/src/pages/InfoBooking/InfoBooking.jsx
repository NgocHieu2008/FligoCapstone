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
} from "./InforBooking.styled";
import { Formik } from "formik";
import BookingTitle from "~/components/BookingTitle/BookingTitle";
import * as Yup from "yup";
import image from "../../assets/flight.png";

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
  dayExpire: Yup.number().required("Required").positive().integer(),
  monthExpire: Yup.number().required("Required").max(12),
  yearExpire: Yup.number().required("Required").positive().integer(),
});
function InfoBooking({ Submit }) {
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
                mobileNo: "",
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
                      <InputStyled name="phoneNumber" />
                      <ErrorStyled component="div" name="phoneNumber" />
                    </FieldWrapper>
                  </PhoneContainer>
                  <FieldWrapper>
                    <LabelStyled htmlFor="email">
                      Email <span>*</span>
                    </LabelStyled>
                    <InputStyled name="email" />
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
                title: "",
                firstname: "",
                lastname: "",
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
              onSubmit={Submit}
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
                      <option value="mr">Mr.</option>
                      <option value="ms">Ms.</option>
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
                        Expriry Month <span>*</span>
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
                        Expire Year <span>*</span>
                      </LabelStyled>
                      <InputStyled min="1900" name="yearExpire" type="number" />
                      <ErrorStyled component="div" name="yearExpire" />
                    </FieldWrapper>
                  </DateContainer>
                </FormStyled>
              )}
            </Formik>
          </div>
          <ButtonStyled type="submit">Continue</ButtonStyled>
        </FormWrapper>

        <DetailWrapper>
          <ImageStyled>
            <img src={image} alt="" />
          </ImageStyled>
        </DetailWrapper>
      </Wrapper>
    </>
  );
}

export default InfoBooking;
