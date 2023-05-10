import { Wrapper, DetailWrapper, Location ,Time, SubWrapper, Direct, Price, Button, DetailButton} from "./FlightCard.styled";
import vietjet from "~/assets/vietjet-air-logo.png";
import vietnamairline from "~/assets/vietnam-airline-logo.png";
import direct from "~/assets/Arrow 2.png";
import detail from "~/assets/detail.png";
import FlightDetail from "../FlightDetail/FlightDetail";
import moment from 'moment';

import React, { useState, useEffect } from 'react';

function FlightCard2() {

    const [flights, setFlights] = useState([]);

    // get result from local storage
    const result = JSON.parse(localStorage.getItem('searchBarContent'));
    const allFlights = result.flights2;

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
                            moment.utc(flight.departure_time).format('HH:mm')
                        }</Time>
                        <Location>{flight.departureCode}</Location>
                    </SubWrapper>
                    <SubWrapper>
                        <Direct>
                        {
                            moment.utc(flight.arrival_time).diff(moment.utc(flight.departure_time), 'hours') + "h" + moment.utc(flight.arrival_time).diff(moment.utc(flight.departure_time), 'minutes')%60 + "m"
                        }
                         (Direct)</Direct>
                        <img src={direct} alt="direct"/>
                    </SubWrapper>
                    <SubWrapper>
                        <Time>{
                            moment.utc(flight.arrival_time).format('HH:mm')
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

export default FlightCard2;