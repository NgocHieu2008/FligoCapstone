import BookingTitle from "~/components/BookingTitle/BookingTitle";
import {
  Wrapper,
  Title,
  Image,
  ButtonWrapper,
  Button,
} from "./SuccessPayment.styled";
import congratsImage from "../../assets/congrats.png";

function SuccessPayment() {
  const handleDetailsButton = () => {
    window.location.href = "/success-booking"
  };

  const handleHistoryButton = () => {
    window.location.href = "/history"
  };
  return (
    <>
      <BookingTitle active="success" />
      <Wrapper>
        <Title>Your booking was made successful!</Title>
        <Image src={congratsImage} alt="" />
        <ButtonWrapper>
          <Button onClick={handleDetailsButton}>Details</Button>
          <Button $secondary onClick={handleHistoryButton}>Booking History</Button>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
}

export default SuccessPayment;
