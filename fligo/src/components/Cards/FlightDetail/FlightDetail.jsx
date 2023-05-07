import airport from '~/assets/Airport.png';
import baggage from '~/assets/baggage.png';
import line from '~/assets/Line1.png';
import location from '~/assets/Location.png';
import flighticon from '~/assets/flight_icon.png';
import vietjet from "~/assets/vietjet-air-logo.png";
import vietnamairline from "~/assets/vietnam-airline-logo.png";

import {Wrapper, SubWrapper, BlackText, GrayText, DetailWrapper} from "./FlightDetail.styled";
function FlightDetail({ flight, onClose }) {
    return ( 
        <Wrapper>
            <SubWrapper>
                <SubWrapper>
                    <BlackText>{
                        flight.departure_time.split("T")[1].split(":")[0] + ":" + flight.departure_time.split("T")[1].split(":")[1]
                    }</BlackText>
                    <GrayText>
                        {
                            flight.departure_time.split("T")[0].split("-")[2] + "-" + flight.departure_time.split("T")[0].split("-")[1] + "-" + flight.departure_time.split("T")[0].split("-")[0]
                        }
                    </GrayText>
                </SubWrapper>
                <p>
                    <img src={flighticon} alt="flighticon"/>
                    <GrayText>2h 10m</GrayText>
                </p>
                <SubWrapper>
                    <BlackText>
                        {
                            flight.arrival_time.split("T")[1].split(":")[0] + ":" + flight.arrival_time.split("T")[1].split(":")[1]
                        }
                    </BlackText>
                    <GrayText>
                        {
                            flight.arrival_time.split("T")[0].split("-")[2] + "-" + flight.arrival_time.split("T")[0].split("-")[1] + "-" + flight.arrival_time.split("T")[0].split("-")[0]
                        }
                    </GrayText>
                </SubWrapper>
            </SubWrapper>
            <SubWrapper>
                <img src={airport} alt="airport"/>
                <img src={line} alt="line" style={{height:"200px", margin:"10px"}}/>
                <img src={location} alt="location"/>
            </SubWrapper>
            <DetailWrapper>
                <DetailWrapper>
                    <BlackText>{flight.departure}</BlackText>
                    <GrayText>{flight.departureAirport}</GrayText>
                </DetailWrapper>
                <div style={{display:"inline-flex", alignItems:"center"}}>
                    <div style={{display:"inline-flex", alignItems:"center"}}>
                    <img src={flight.airline === "VietJet Air" ? vietjet : vietnamairline} alt="airline"/>
                    <span style={{fontWeight:"700", marginLeft:"20px"}}>{flight.airline}</span>
                    </div>
                    <span style={{fontWeight:"500",fontSize:"2rem", marginLeft:"30px", color:"#75B40D"}}>{flight.flight_number}</span>
                    <GrayText style={{marginLeft:"30px"}}>{flight.ticket_class}</GrayText>
                </div>
                <div style={{display:"inline-flex"}}>
                    <img src={baggage} alt="baggage" style={{height:"30px"}}/>
                    <div style={{display:"flex",flexDirection:"column"}}>
                        <BlackText>Baggage {flight.baggage} (buy at booking)</BlackText>
                        <BlackText>Cabin baggage 7 kg</BlackText>
                    </div>
                </div>
                <DetailWrapper>
                    <BlackText>{flight.arrival}</BlackText>
                    <GrayText>{flight.arrivalAirport}</GrayText>
                </DetailWrapper>
            </DetailWrapper>
        </Wrapper>
     );
}

export default FlightDetail;