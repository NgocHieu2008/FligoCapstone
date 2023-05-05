import { Wrapper, DetailWrapper, Location ,Time, SubWrapper, Direct, Price, Button, DetailButton} from "./FlightCard.styled";
import vietjet from "~/assets/vietjet-air-logo.png";
import vietnamairline from "~/assets/vietnam-airline-logo.png";
import direct from "~/assets/Arrow 2.png";
import detail from "~/assets/detail.png";
import FlightDetail from "../FlightDetail/FlightDetail";

import React, { useState } from 'react';

function FlightCard() {

    const [showDetail, setShowDetail] = useState(false);

    const handleChoose = () => {
        console.log("choose");
        // Chuyển qua trang book seat 
        window.location.href = "/book-seat";
    }
    
    const handleShowDetail = () => {
        setShowDetail(!showDetail);
    }
    return ( 
        <>
            <Wrapper>
                <div style={{display:"inline-flex", alignItems:"center"}}>
                    <img src={vietnamairline} alt="vietnam airlines" style={{height:"30px"}}/>
                    <span style={{fontWeight:"700", marginLeft:"20px"}}>VietNam airlines</span>
                </div>
                <DetailWrapper>
                    <SubWrapper>
                        <Time>20:30</Time>
                        <Location>SGN</Location>
                    </SubWrapper>
                    <SubWrapper>
                        <Direct>2h 10m (Direct)</Direct>
                        <img src={direct} alt="direct"/>
                    </SubWrapper>
                    <SubWrapper>
                        <Time>22:40</Time>
                        <Location>HAN</Location>
                    </SubWrapper>
                    <SubWrapper>
                        <Price>US $150.00</Price>
                        <Button onClick={handleChoose}>Choose</Button>
                    </SubWrapper>
                </DetailWrapper>
                <DetailButton onClick={handleShowDetail}>
                    <img src={detail} alt="detail" style={{height:"30px"}}/>
                   Flight Details
                </DetailButton>
            </Wrapper>
            {showDetail && <FlightDetail></FlightDetail>}
        </>
     );
}

export default FlightCard;