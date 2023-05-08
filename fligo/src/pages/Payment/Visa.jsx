import { Formik } from "formik";
import * as Yup from "yup";
import {
  FormStyled,
  FieldWrapper,
  Label,
  Input,
  Error,
  DetailWrapper,
  SubmitButton,
} from "./Payment.styled";
const visaSchema = Yup.object().shape({
  cardNumber: Yup.string().required("Required"),
  cardHolder: Yup.string().required("Required"),
  expiryDate: Yup.string()
    .required("Required")
    .matches(/^[0-9]{2}\/[0-9]{2}$/, "Expiry date is not valid") // Kiểm tra chuỗi có đúng định dạng "MM/YY" hay không
    .test({
      name: "expiryDate",
      test: (value) => {
        const [month, year] = value.split("/");
        const currentDate = new Date();
        const expiryDate = new Date(`20${year}`, month - 1, 1); // Tạo ra một đối tượng Date từ chuỗi đầu vào, trong đó ngày là 1 và giờ, phút, giây đều bằng 0
        expiryDate.setMonth(expiryDate.getMonth() + 1); // Cộng thêm 1 đơn vị tháng, để lấy ngày cuối cùng của tháng
        return expiryDate > currentDate; // Kiểm tra xem ngày hết hạn có sau ngày hiện tại hay không
      },
      message: "Card has expired",
    }),
  cvv: Yup.string().required("Required").length(4, "Invalid CVV"),
});

function Visa() {
  const paymentDetails = JSON.parse(localStorage.getItem("bookingInfo"));
  const flight = JSON.parse(localStorage.getItem("selectedFlight"));
  const seat = JSON.parse(localStorage.getItem("selectedSeat"));
  const passenger = JSON.parse(localStorage.getItem("passengerInfo"));
  const handleSubmit = async (values) => {
    // Lưu thông tin thanh toán vào local storage
    localStorage.setItem("paymentInfo", JSON.stringify(values));
    const response = await fetch("https://fligo.vercel.app/book-seat", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        flight_number: flight.flight_number,
        seat: seat.row + seat.column,
        firstname: passenger.firstname,
        lastname: passenger.lastname,
        dateOfBirth: `${passenger.yearOfBirth}-${passenger.monthOfBirth}-${passenger.dayOfBirth}`,
        passport: passenger.passport,
        expiryDate: `${passenger.yearExpire}-${passenger.monthExpire}-${passenger.dayExpire}`,
        title: passenger.title,
        nationality: passenger.nationality,
        paymentBill:
          paymentDetails.flightPrice +
          paymentDetails.insurancePrice +
          paymentDetails.serviceFee,
      }),
    });
    // Chuyển qua trang thanh toán thành công
    if (response.ok) {
      // localStorage.removeItem("passengerInfo");
      localStorage.removeItem("selectedSeat");
      // localStorage.removeItem("selectedFlight");
      // localStorage.removeItem("bookingInfo");
      window.location.href = "/success-payment";
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          cardNumber: "",
          cardHolder: "",
          expiryDate: "",
          cvv: "",
        }}
        validationSchema={visaSchema}
        onSubmit={handleSubmit}
      >
        {({}) => (
          <FormStyled>
            <FieldWrapper>
              <Label htmlFor="cardNumber">Card number</Label>
              <Input type="text" name="cardNumber" id="cardNumber" />
              <Error name="cardNumber" component="div" />
            </FieldWrapper>
            <FieldWrapper>
              <Label htmlFor="cardHolder">Card holder</Label>
              <Input type="text" name="cardHolder" id="cardHolder" />
              <Error name="cardHolder" component="div" />
            </FieldWrapper>
            <div style={{ display: "inline-flex" }}>
              <FieldWrapper>
                <Label htmlFor="expiryDate">Expiry date (MM/YY)</Label>
                <Input type="text" name="expiryDate" id="expiryDate" />
                <Error name="expiryDate" component="div" />
              </FieldWrapper>
              <FieldWrapper style={{ marginLeft: "20px" }}>
                <Label htmlFor="cvv">CVV</Label>
                <Input type="text" name="cvv" id="cvv" />
                <Error name="cvv" component="div" />
              </FieldWrapper>
            </div>
            <DetailWrapper>
              <h3>DETAILS</h3>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <p>{flight.airline} (Adult) x1</p>
                  <p>Travel Insurance</p>
                  <p>Service Fee</p>
                </div>
                <div>
                  <p style={{ textAlign: "end" }}>
                    ${paymentDetails.flightPrice}
                  </p>
                  <p style={{ textAlign: "end" }}>
                    ${paymentDetails.insurancePrice}
                  </p>
                  <p style={{ textAlign: "end" }}>
                    ${paymentDetails.serviceFee}
                  </p>
                </div>
              </div>
              <div
                style={{ borderBottom: "1px solid #000", marginBottom: "10px" }}
              ></div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <h3>Total</h3>
                </div>
                <div>
                  <h3 style={{ textAlign: "end" }}>
                    $
                    {paymentDetails.flightPrice +
                      paymentDetails.insurancePrice +
                      paymentDetails.serviceFee}
                  </h3>
                </div>
              </div>
            </DetailWrapper>
            <p
              style={{ fontSize: "14px", color: "#1C2668", fontWeight: "600" }}
            >
              By clicking Pay Now, I agree that I have read and accepted the{" "}
              <span style={{ color: "#2FA4FF" }}>Terms and Conditions</span> of
              FLIGO
            </p>
            <SubmitButton type="submit">Pay Now</SubmitButton>
          </FormStyled>
        )}
      </Formik>
    </>
  );
}

export default Visa;
