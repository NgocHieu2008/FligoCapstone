import airport from '~/assets/Airport.png';
import baggage from '~/assets/baggage.png';
import line from '~/assets/Line1.png';
import location from '~/assets/Location.png';
import flighticon from '~/assets/flight_icon.png';
import vietjet from "~/assets/vietjet-air-logo.png";
import vietnamairline from "~/assets/vietnam-airline-logo.png";

import {Wrapper, SubWrapper, BlackText, GrayText, DetailWrapper} from "./FlightDetail.styled";
function FlightDetail() {
    return ( 
        <Wrapper>
            <SubWrapper>
                <SubWrapper>
                    <BlackText>20:30</BlackText>
                    <GrayText>12 May</GrayText>
                </SubWrapper>
                <p>
                    <img src={flighticon} alt="flighticon"/>
                    <GrayText>2h 10m</GrayText>
                </p>
                <SubWrapper>
                    <BlackText>22:40</BlackText>
                    <GrayText>12 May</GrayText>
                </SubWrapper>
            </SubWrapper>
            <SubWrapper>
                <img src={airport} alt="airport"/>
                <img src={line} alt="line" style={{height:"200px", margin:"10px"}}/>
                <img src={location} alt="location"/>
            </SubWrapper>
            <DetailWrapper>
                <DetailWrapper>
                    <BlackText>Ho Chi Minh City</BlackText>
                    <GrayText>Tan Son Nhat International Airport (SGN)</GrayText>
                </DetailWrapper>
                <div style={{display:"inline-flex", alignItems:"center"}}>
                    <div style={{display:"inline-flex", alignItems:"center"}}>
                        <img src={vietnamairline} alt="vietnam airlines" style={{height:"30px"}}/>
                        <span style={{fontWeight:"700", marginLeft:"10px"}}>VietNam airlines</span>
                    </div>
                    <span style={{fontWeight:"500",fontSize:"2rem", marginLeft:"30px", color:"#75B40D"}}>VN-220</span>
                    <GrayText style={{marginLeft:"30px"}}>Economy Class</GrayText>
                </div>
                <div style={{display:"inline-flex"}}>
                    <img src={baggage} alt="baggage" style={{height:"30px"}}/>
                    <div style={{display:"flex",flexDirection:"column"}}>
                        <BlackText>Baggage 0 kg (buy at booking)</BlackText>
                        <BlackText>Cabin baggage 7 kg</BlackText>
                    </div>
                </div>
                <DetailWrapper>
                    <BlackText>Ha Noi</BlackText>
                    <GrayText>Noi Bai International Airport (HAN)</GrayText>
                </DetailWrapper>
            </DetailWrapper>
        </Wrapper>
     );
}

export default FlightDetail;