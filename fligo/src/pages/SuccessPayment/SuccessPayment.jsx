import BookingTitle from "~/components/BookingTitle/BookingTitle";
import { Wrapper, Title, Image, ButtonWrapper, Button } from "./SuccessPayment.styled";
import congratsImage from "../../assets/congrats.png"

function SuccessPayment() {
  return (
    <>
      <BookingTitle active="success" />
      <Wrapper>
        <Title>Your booking was made successful!</Title>
        <Image src={congratsImage} alt="" />
        <ButtonWrapper>
            <Button>Details</Button>
            <Button $secondary >Booking History</Button>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
}

export default SuccessPayment;
