import React from "react";
import {
  TitleDiv,
  Title,
  Process,
  OrderDiv,
  Number,
  Content,
} from "./BookingTitle.styled";
function BookingTitle(props) {
  return (
    <>
      <TitleDiv>
        <Title>{props.title}</Title>
        <Process>
          <OrderDiv className="booking">
            <Number active={props.active === "booking"}>1</Number>
            <Content active={props.active === "booking"}>Booking</Content>
          </OrderDiv>
          <OrderDiv className="confirm">
            <Number active={props.active === "confirm"}>2</Number>
            <Content active={props.active === "confirm"}>Confirm</Content>
          </OrderDiv>
          <OrderDiv className="payment">
            <Number active={props.active === "payment"}>3</Number>
            <Content active={props.active === "payment"}>Payment</Content>
          </OrderDiv>
          <OrderDiv className="payment">
            <Number active={props.active === "success"}>4</Number>
            <Content active={props.active === "success"}>Success</Content>
          </OrderDiv>
        </Process>
      </TitleDiv>
    </>
  );
}

export default BookingTitle;
