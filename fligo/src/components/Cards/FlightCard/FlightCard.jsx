import { Wrapper, DetailWrapper, Location ,Time, SubWrapper, Direct, Price, Button, DetailButton} from "./FlightCard.styled";
import vietjet from "~/assets/vietjet-air-logo.png";
import vietnamairline from "~/assets/vietnam-airline-logo.png";
import direct from "~/assets/Arrow 2.png";
import detail from "~/assets/detail.png";
import FlightDetail from "../FlightDetail/FlightDetail";

import React, { useState, useEffect } from 'react';

function FlightCard() {

    const [selectedFlight, setSelectedFlight] = useState(null);
    const [showDetail, setShowDetail] = useState(false);

    const [flights, setFlights] = useState([]);

    // get result from local storage
    const result = JSON.parse(localStorage.getItem('searchBarContent'));
    const allFlights = result.flights;

    useEffect(() => {
        // Khởi tạo tất cả các chuyến bay ở trạng thái hide ban đầu
        const initFlights = allFlights.map(flight => {
            return {
                ...flight,
                showDetail: false
            }
        })
        setFlights(initFlights)
    }, [])

    const handleChoose = (flight) => {

        console.log(flight);
        // lưu thông tin chuyến bay được chọn vào local storage
        localStorage.setItem('selectedFlight', JSON.stringify(flight));

        // Chuyển qua trang book seat 
        window.location.href = "/book-seat";
    }
    
    const handleShowDetail = (flight) => {
        // Cập nhật trạng thái của chuyến bay khi bấm vào nút "xem chi tiết"
        const updatedFlights = flights.map(f => {
            return {
                ...f,
                showDetail: f._id === flight._id ? !f.showDetail : f.showDetail
            }
        })
        setFlights(updatedFlights);
    }
    return ( 
        <>
        {flights.length >0 ? 
        <>
            {flights.map((flight) => (
            <Wrapper key = {flight._id}>

                <div style={{display:"inline-flex", alignItems:"center"}}>
                    <img src={flight.airline === "VietJet Air" ? vietjet : vietnamairline} alt="airline"/>
                    <span style={{fontWeight:"700", marginLeft:"20px"}}>{flight.airline}</span>
                </div>
                <DetailWrapper>
                    <SubWrapper>
                        <Time>{
                            flight.departure_time.split("T")[1].split(":")[0] + ":" + flight.departure_time.split("T")[1].split(":")[1]
                        }</Time>
                        <Location>{flight.departureCode}</Location>
                    </SubWrapper>
                    <SubWrapper>
                        <Direct>2h 10m (Direct)</Direct>
                        <img src={direct} alt="direct"/>
                    </SubWrapper>
                    <SubWrapper>
                        <Time>{
                            flight.arrival_time.split("T")[1].split(":")[0] + ":" + flight.arrival_time.split("T")[1].split(":")[1]
                        }</Time>
                        <Location>{flight.arrivalCode}</Location>
                    </SubWrapper>
                    <SubWrapper>
                        <Price>US ${flight.price.$numberDecimal}</Price>
                        <Button onClick={() => handleChoose(flight)}>Choose</Button>

                    </SubWrapper>
                </DetailWrapper>
                <DetailButton onClick={() => handleShowDetail(flight)}>
                    <img src={detail} alt="detail" style={{height:"30px"}}/>
                   Flight Details
                </DetailButton>
                {flight.showDetail && <FlightDetail flight={flight}></FlightDetail>}
            </Wrapper>
        ))} </>
        : <div>Không có chuyến bay nào</div>}
        </>
     );
}

export default FlightCard;