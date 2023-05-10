import React, { useState, useContext, useEffect } from "react";
import SeatMap from "~/components/Seats/SeatMap";
import {
  SeatMapContainer,
  TitleWrapper,
  SubTitle,
  BlackText,
  GrayText,
  ContentWrapper,
  LeftContent,
  RightContent,
  DefinedSeat,
  Button,
} from "./BookSeat.styled";
import SeatIcon from "~/assets/Seat.png";
import ArrowIcon from "~/assets/Arrow 5.png";
import { UserContext } from "~/contexts/UserContext";
import moment from "moment";

function BookSeat() {
  const [seats, setSeats] = useState([
    { row: 1, column: "A", status: "Available" },
    { row: 1, column: "B", status: "Available" },
    { row: 1, column: "C", status: "Available" },
    { row: 1, column: "D", status: "Available" },
    { row: 1, column: "E", status: "Available" },
    { row: 1, column: "F", status: "Available" },
    { row: 2, column: "A", status: "Available" },
    { row: 2, column: "B", status: "Available" },
    { row: 2, column: "C", status: "Available" },
    { row: 2, column: "D", status: "Available" },
    { row: 2, column: "E", status: "Available" },
    { row: 2, column: "F", status: "Available" },
    { row: 3, column: "A", status: "Available" },
    { row: 3, column: "B", status: "Available" },
    { row: 3, column: "C", status: "Available" },
    { row: 3, column: "D", status: "Available" },
    { row: 3, column: "E", status: "Available" },
    { row: 3, column: "F", status: "Available" },
    { row: 4, column: "A", status: "Available" },
    { row: 4, column: "B", status: "Available" },
    { row: 4, column: "C", status: "Available" },
    { row: 4, column: "D", status: "Available" },
    { row: 4, column: "E", status: "Available" },
    { row: 4, column: "F", status: "Available" },
    { row: 5, column: "A", status: "Available" },
    { row: 5, column: "B", status: "Available" },
    { row: 5, column: "C", status: "Available" },
    { row: 5, column: "D", status: "Available" },
    { row: 5, column: "E", status: "Available" },
    { row: 5, column: "F", status: "Available" },
    { row: 6, column: "A", status: "Available" },
    { row: 6, column: "B", status: "Available" },
    { row: 6, column: "C", status: "Available" },
    { row: 6, column: "D", status: "Available" },
    { row: 6, column: "E", status: "Available" },
    { row: 6, column: "F", status: "Available" },
    { row: 7, column: "A", status: "Available" },
    { row: 7, column: "B", status: "Available" },
    { row: 7, column: "C", status: "Available" },
    { row: 7, column: "D", status: "Available" },
    { row: 7, column: "E", status: "Available" },
    { row: 7, column: "F", status: "Available" },
    { row: 8, column: "A", status: "Available" },
    { row: 8, column: "B", status: "Available" },
    { row: 8, column: "C", status: "Available" },
    { row: 8, column: "D", status: "Available" },
    { row: 8, column: "E", status: "Available" },
    { row: 8, column: "F", status: "Available" },
    { row: 9, column: "A", status: "Available" },
    { row: 9, column: "B", status: "Available" },
    { row: 9, column: "C", status: "Available" },
    { row: 9, column: "D", status: "Available" },
    { row: 9, column: "E", status: "Available" },
    { row: 9, column: "F", status: "Available" },
    { row: 10, column: "A", status: "Available" },
    { row: 10, column: "B", status: "Available" },
    { row: 10, column: "C", status: "Available" },
    { row: 10, column: "D", status: "Available" },
    { row: 10, column: "E", status: "Available" },
    { row: 10, column: "F", status: "Available" },
    { row: 11, column: "A", status: "Available" },
    { row: 11, column: "B", status: "Available" },
    { row: 11, column: "C", status: "Available" },
    { row: 11, column: "D", status: "Available" },
    { row: 11, column: "E", status: "Available" },
    { row: 11, column: "F", status: "Available" },
    { row: 12, column: "A", status: "Available" },
    { row: 12, column: "B", status: "Available" },
    { row: 12, column: "C", status: "Available" },
    { row: 12, column: "D", status: "Available" },
    { row: 12, column: "E", status: "Available" },
    { row: 12, column: "F", status: "Available" },
    { row: 13, column: "A", status: "Available" },
    { row: 13, column: "B", status: "Available" },
    { row: 13, column: "C", status: "Available" },
    { row: 13, column: "D", status: "Available" },
    { row: 13, column: "E", status: "Available" },
    { row: 13, column: "F", status: "Available" },
    { row: 14, column: "A", status: "Available" },
    { row: 14, column: "B", status: "Available" },
    { row: 14, column: "C", status: "Available" },
    { row: 14, column: "D", status: "Available" },
    { row: 14, column: "E", status: "Available" },
    { row: 14, column: "F", status: "Available" },
    { row: 15, column: "A", status: "Available" },
    { row: 15, column: "B", status: "Available" },
    { row: 15, column: "C", status: "Available" },
    { row: 15, column: "D", status: "Available" },
    { row: 15, column: "E", status: "Available" },
    { row: 15, column: "F", status: "Available" },
    { row: 16, column: "A", status: "Available" },
    { row: 16, column: "B", status: "Available" },
    { row: 16, column: "C", status: "Available" },
    { row: 16, column: "D", status: "Available" },
    { row: 16, column: "E", status: "Available" },
    { row: 16, column: "F", status: "Available" },
    { row: 17, column: "A", status: "Available" },
    { row: 17, column: "B", status: "Available" },
    { row: 17, column: "C", status: "Available" },
    { row: 17, column: "D", status: "Available" },
    { row: 17, column: "E", status: "Available" },
    { row: 17, column: "F", status: "Available" },
    { row: 18, column: "A", status: "Available" },
    { row: 18, column: "B", status: "Available" },
    { row: 18, column: "C", status: "Available" },
    { row: 18, column: "D", status: "Available" },
    { row: 18, column: "E", status: "Available" },
    { row: 18, column: "F", status: "Available" },
    { row: 19, column: "A", status: "Available" },
    { row: 19, column: "B", status: "Available" },
    { row: 19, column: "C", status: "Available" },
    { row: 19, column: "D", status: "Available" },
    { row: 19, column: "E", status: "Available" },
    { row: 19, column: "F", status: "Available" },
    { row: 20, column: "A", status: "Available" },
    { row: 20, column: "B", status: "Available" },
    { row: 20, column: "C", status: "Available" },
    { row: 20, column: "D", status: "Available" },
    { row: 20, column: "E", status: "Available" },
    { row: 20, column: "F", status: "Available" },
    { row: 21, column: "A", status: "Available" },
    { row: 21, column: "B", status: "Available" },
    { row: 21, column: "C", status: "Available" },
    { row: 21, column: "D", status: "Available" },
    { row: 21, column: "E", status: "Available" },
    { row: 21, column: "F", status: "Available" },
    { row: 22, column: "A", status: "Available" },
    { row: 22, column: "B", status: "Available" },
    { row: 22, column: "C", status: "Available" },
    { row: 22, column: "D", status: "Available" },
    { row: 22, column: "E", status: "Available" },
    { row: 22, column: "F", status: "Available" },
  ]);

  const { userData } = useContext(UserContext);
  // console.log(userData);
  const [selectedSeat, setSelectedSeat] = useState({});

  // get thông tin chuyến bay được chọn từ localStorage
  const flightInfo = JSON.parse(localStorage.getItem("selectedFlight"));
  console.log(flightInfo.airline);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:8000/flights/${flightInfo.flight_number}/tickets`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
        }
      );
      const data = await response.json();
      console.log(Object.values(data));
      // console.log("hi");
      const updatedSeats = seats.map((seat) => {
        // console.log(`${seat.row}${seat.column}`);
        const bookedSeat = Object.values(data).find(
          (tickets) => tickets.seat === `${seat.row}${seat.column}`
        );
        // console.log(bookedSeat);
        if (bookedSeat) {
          return { ...seat, status: "Unavailable" };
        } else {
          return { ...seat, status: "Available" };
        }
      });
      setSeats(updatedSeats);
    }
    fetchData();
  }, []);
  const handleSeatSelected = (row, column) => {
    // Cập nhật thông tin về ghế được chọn vào state
    setSelectedSeat({ row, column });
  };

  const handleDone = async () => {
    console.log(`${selectedSeat.row}${selectedSeat.column}`);
    if (selectedSeat.row && selectedSeat.column) {
      // Lưu thông tin về ghế được chọn vào localStorage
      localStorage.setItem("selectedSeat", JSON.stringify(selectedSeat));
      // direct to payment page
      console.log(flightInfo.airline);
      const response = await fetch("http://localhost:8000/book-seat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          flight_number: flightInfo.flight_number,
          username: userData.username,
          seat: selectedSeat.row + selectedSeat.column,
          airline: flightInfo.airline
        }),
      });

      if (response.ok) {
        const bookedTime = new Date();
        localStorage.setItem("bookedTime", JSON.stringify(bookedTime))
        window.location.href = "/info-booking";
      }
      console.log(response.status);
      if(response.status === 400) {
        alert("Seat is not available now!")
      }
    } else {
      alert("Please choose your seat!");
    }
  };
  return (
    <>
      <TitleWrapper>
        <img src={SeatIcon} alt="Book seat" />
        Seat number
      </TitleWrapper>
      <SubTitle>
        <div>
          <BlackText>
            {flightInfo.departure} ({flightInfo.departureCode})
          </BlackText>
          <img src={ArrowIcon} alt="Arrow" />
          <BlackText>
            {flightInfo.arrival} ({flightInfo.arrivalCode})
          </BlackText>
        </div>
        <div>
          <GrayText>
            {moment.utc(flightInfo.departure_time).format("HH:mm")}
            -
            {moment.utc(flightInfo.arrival_time).format("HH:mm")}
          </GrayText>
          <GrayText>|</GrayText>
          <GrayText>
            {moment.utc(flightInfo.departure_time).format("ddd, DD MMM YYYY")}
          </GrayText>
          <GrayText>|</GrayText>
          <GrayText>{flightInfo.airline}</GrayText>
        </div>
      </SubTitle>
      <ContentWrapper>
        <LeftContent>
          <div>
            <BlackText>
              Passenger {userData?.firstname} {userData?.lastname}
            </BlackText>
            <h3 style={{ color: "#0E185F" }}>
              SEAT: {selectedSeat.row}
              {selectedSeat.column}
            </h3>
          </div>
        </LeftContent>
        <RightContent>
          <DefinedSeat>
            <div>
              <div
                style={{
                  backgroundColor: "#E8FFC2",
                  width: "50px",
                  height: "50px",
                  margin: "5px",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              ></div>
              <BlackText>Available</BlackText>
            </div>
            <div>
              <div
                style={{
                  backgroundColor: "#C4C4C4",
                  width: "50px",
                  height: "50px",
                  margin: "5px",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              ></div>
              <BlackText>Not Available</BlackText>
            </div>
            <div>
              <div
                style={{
                  backgroundColor: "var(--blue-primary-color)",
                  width: "50px",
                  height: "50px",
                  margin: "5px",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              ></div>
              <BlackText>Your seat</BlackText>
            </div>
          </DefinedSeat>
          <SeatMapContainer>
            <SeatMap seats={seats} onSeatSelected={handleSeatSelected} />
          </SeatMapContainer>
          <Button onClick={handleDone}>Done</Button>
        </RightContent>
      </ContentWrapper>
    </>
  );
}

export default BookSeat;
