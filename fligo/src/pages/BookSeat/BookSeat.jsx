import React, { useState, useContext } from "react";
import SeatMap from "~/components/Seats/SeatMap";
import { SeatMapContainer,TitleWrapper, SubTitle, BlackText, GrayText, ContentWrapper,LeftContent,RightContent,DefinedSeat, Button } from "./BookSeat.styled";
import SeatIcon from "~/assets/Seat.png";
import ArrowIcon from "~/assets/Arrow 5.png";
import { UserContext } from "~/contexts/UserContext";
import moment from 'moment';

const seats = [
    { row: 1, column: 'A', status: 'Available' },
    { row: 1, column: 'B', status: 'Unavailable' },
    { row: 1, column: 'C', status: 'Available' },
    { row: 1, column: 'D', status: 'Available' },
    { row: 1, column: 'E', status: 'Available' },
    { row: 1, column: 'F', status: 'Available' },
    { row: 2, column: 'A', status: 'Available' },
    { row: 2, column: 'B', status: 'Available' },
    { row: 2, column: 'C', status: 'Available' },
    { row: 2, column: 'D', status: 'Available' },
    { row: 2, column: 'E', status: 'Unavailable' },
    { row: 2, column: 'F', status: 'Available' },
    { row: 3, column: 'A', status: 'Available' },
    { row: 3, column: 'B', status: 'Available' },
    { row: 3, column: 'C', status: 'Available' },
    { row: 3, column: 'D', status: 'Available' },
    { row: 3, column: 'E', status: 'Available' },
    { row: 3, column: 'F', status: 'Available' },
    { row: 4, column: 'A', status: 'Unavailable' },
    { row: 4, column: 'B', status: 'Available' },
    { row: 4, column: 'C', status: 'Available' },
    { row: 4, column: 'D', status: 'Available' },
    { row: 4, column: 'E', status: 'Unavailable' },
    { row: 4, column: 'F', status: 'Available' },
    { row: 5, column: 'A', status: 'Available' },
    { row: 5, column: 'B', status: 'Available' },
    { row: 5, column: 'C', status: 'Available' },
    { row: 5, column: 'D', status: 'Unavailable' },
    { row: 5, column: 'E', status: 'Unavailable' },
    { row: 5, column: 'F', status: 'Available' },
    { row: 6, column: 'A', status: 'Available' },
    { row: 6, column: 'B', status: 'Available' },
    { row: 6, column: 'C', status: 'Available' },
    { row: 6, column: 'D', status: 'Available' },
    { row: 6, column: 'E', status: 'Available' },
    { row: 6, column: 'F', status: 'Available' },
    { row: 7, column: 'A', status: 'Unavailable' },
    { row: 7, column: 'B', status: 'Unavailable' },
    { row: 7, column: 'C', status: 'Available' },
    { row: 7, column: 'D', status: 'Available' },
    { row: 7, column: 'E', status: 'Available' },
    { row: 7, column: 'F', status: 'Unavailable' },
    { row: 8, column: 'A', status: 'Available' },
    { row: 8, column: 'B', status: 'Available' },
    { row: 8, column: 'C', status: 'Available' },
    { row: 8, column: 'D', status: 'Unavailable' },
    { row: 8, column: 'E', status: 'Unavailable' },
    { row: 8, column: 'F', status: 'Unavailable' },
    { row: 9, column: 'A', status: 'Unavailable' },
    { row: 9, column: 'B', status: 'Unavailable' },
    { row: 9, column: 'C', status: 'Available' },
    { row: 9, column: 'D', status: 'Available' },
    { row: 9, column: 'E', status: 'Available' },
    { row: 9, column: 'F', status: 'Unavailable' },
    { row: 10, column: 'A', status: 'Available' },
    { row: 10, column: 'B', status: 'Available' },
    { row: 10, column: 'C', status: 'Available' },
    { row: 10, column: 'D', status: 'Available' },
    { row: 10, column: 'E', status: 'Available' },
    { row: 10, column: 'F', status: 'Available' },
    { row: 11, column: 'A', status: 'Available' },
    { row: 11, column: 'B', status: 'Available' },
    { row: 11, column: 'C', status: 'Available' },
    { row: 11, column: 'D', status: 'Unavailable' },
    { row: 11, column: 'E', status: 'Available' },
    { row: 11, column: 'F', status: 'Available' },
    { row: 12, column: 'A', status: 'Unavailable' },
    { row: 12, column: 'B', status: 'Available' },
    { row: 12, column: 'C', status: 'Available' },
    { row: 12, column: 'D', status: 'Available' },
    { row: 12, column: 'E', status: 'Available' },
    { row: 12, column: 'F', status: 'Available' },
    { row: 13, column: 'A', status: 'Unavailable' },
    { row: 13, column: 'B', status: 'Unavailable' },
    { row: 13, column: 'C', status: 'Available' },
    { row: 13, column: 'D', status: 'Available' },
    { row: 13, column: 'E', status: 'Available' },
    { row: 13, column: 'F', status: 'Available' },
    { row: 14, column: 'A', status: 'Available' },
    { row: 14, column: 'B', status: 'Available' },
    { row: 14, column: 'C', status: 'Unavailable' },
    { row: 14, column: 'D', status: 'Unavailable' },
    { row: 14, column: 'E', status: 'Unavailable' },
    { row: 14, column: 'F', status: 'Available' },
    { row: 15, column: 'A', status: 'Available' },
    { row: 15, column: 'B', status: 'Available' },
    { row: 15, column: 'C', status: 'Available' },
    { row: 15, column: 'D', status: 'Available' },
    { row: 15, column: 'E', status: 'Available' },
    { row: 15, column: 'F', status: 'Available' },
    { row: 16, column: 'A', status: 'Available' },
    { row: 16, column: 'B', status: 'Unavailable' },
    { row: 16, column: 'C', status: 'Available' },
    { row: 16, column: 'D', status: 'Available' },
    { row: 16, column: 'E', status: 'Available' },
    { row: 16, column: 'F', status: 'Available' },
    { row: 17, column: 'A', status: 'Available' },
    { row: 17, column: 'B', status: 'Available' },
    { row: 17, column: 'C', status: 'Available' },
    { row: 17, column: 'D', status: 'Unavailable' },
    { row: 17, column: 'E', status: 'Unavailable' },
    { row: 17, column: 'F', status: 'Unavailable' },
    { row: 18, column: 'A', status: 'Available' },
    { row: 18, column: 'B', status: 'Available' },
    { row: 18, column: 'C', status: 'Unavailable' },
    { row: 18, column: 'D', status: 'Unavailable' },
    { row: 18, column: 'E', status: 'Unavailable' },
    { row: 18, column: 'F', status: 'Available' },
    { row: 19, column: 'A', status: 'Available' },
    { row: 19, column: 'B', status: 'Available' },
    { row: 19, column: 'C', status: 'Available' },
    { row: 19, column: 'D', status: 'Available' },
    { row: 19, column: 'E', status: 'Unavailable' },
    { row: 19, column: 'F', status: 'Unavailable' },
    { row: 20, column: 'A', status: 'Unavailable' },
    { row: 20, column: 'B', status: 'Available' },
    { row: 20, column: 'C', status: 'Available' },
    { row: 20, column: 'D', status: 'Available' },
    { row: 20, column: 'E', status: 'Available' },
    { row: 20, column: 'F', status: 'Available' },
    { row: 21, column: 'A', status: 'Unavailable' },
    { row: 21, column: 'B', status: 'Unavailable' },
    { row: 21, column: 'C', status: 'Available' },
    { row: 21, column: 'D', status: 'Available' },
    { row: 21, column: 'E', status: 'Available' },
    { row: 21, column: 'F', status: 'Available' },
    { row: 22, column: 'A', status: 'Available' },
    { row: 22, column: 'B', status: 'Unavailable' },
    { row: 22, column: 'C', status: 'Available' },
    { row: 22, column: 'D', status: 'Available' },
    { row: 22, column: 'E', status: 'Available' },
    { row: 22, column: 'F', status: 'Available' },
  ];

function BookSeat() {
    const { userData } = useContext(UserContext);
    console.log(userData);
    const [selectedSeat, setSelectedSeat] = useState({});

    // get thông tin chuyến bay được chọn từ localStorage
    const flightInfo = JSON.parse(localStorage.getItem('selectedFlight'));

  const handleSeatSelected = (row, column) => {
    // Cập nhật thông tin về ghế được chọn vào state
    setSelectedSeat({ row, column });
  };

  const handleDone = () => {
    if(selectedSeat.row && selectedSeat.column) {
        // Lưu thông tin về ghế được chọn vào localStorage
    localStorage.setItem('selectedSeat', JSON.stringify(selectedSeat));
    // direct to payment page
    window.location.href = '/info-booking';}
    else {
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
                <BlackText>{flightInfo.departure} ({flightInfo.departureCode})</BlackText>
                <img src={ArrowIcon} alt="Arrow" />
                <BlackText>{flightInfo.arrival} ({flightInfo.arrivalCode})</BlackText>
            </div>
            <div>
                <GrayText>
                {moment(flightInfo.departure_time).format("HH:mm")}
                 - 
                {moment(flightInfo.arrival_time).format("HH:mm")}
                </GrayText>
                <GrayText>|</GrayText>
                <GrayText>
                {moment(flightInfo.departure_time).format("ddd, DD MMM YYYY")}
                </GrayText>
                <GrayText>|</GrayText>
                <GrayText>{flightInfo.airline}</GrayText>
            </div>
        </SubTitle>
        <ContentWrapper>
            <LeftContent>
                <div>
                    <BlackText>Passenger {userData?.firstname} {userData?.lastname}</BlackText>
                    <h3 style={{color:"#0E185F"}}>SEAT: {selectedSeat.row}{selectedSeat.column}</h3>
                </div>
            </LeftContent>
            <RightContent>
                <DefinedSeat>
                    <div>
                        <div
                        style={{
                            backgroundColor: "#E8FFC2",
                            width: '50px',
                            height: '50px',
                            margin: '5px',
                            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        }}
                        ></div>
                        <BlackText>Available</BlackText>
                    </div>
                    <div>
                        <div
                        style={{
                            backgroundColor: "#C4C4C4",
                            width: '50px',
                            height: '50px',
                            margin: '5px',
                            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        }}
                        ></div>
                        <BlackText>Not Available</BlackText>
                    </div>
                    <div>
                        <div
                        style={{
                            backgroundColor: "var(--blue-primary-color)",
                            width: '50px',
                            height: '50px',
                            margin: '5px',
                            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        }}
                        ></div>
                        <BlackText>Your seat</BlackText>
                    </div>
                </DefinedSeat>
                <SeatMapContainer>
                    <SeatMap seats={seats} onSeatSelected={handleSeatSelected}/>
                    
                </SeatMapContainer>
                <Button onClick={handleDone}>Done</Button>
            </RightContent>
        </ContentWrapper>
        </>
    );
}

export default BookSeat;