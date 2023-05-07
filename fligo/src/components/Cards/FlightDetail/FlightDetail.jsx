import airport from '~/assets/Airport.png';
import baggage from '~/assets/baggage.png';
import line from '~/assets/Line1.png';
import location from '~/assets/Location.png';
import flighticon from '~/assets/flight_icon.png';
import vietjet from "~/assets/vietjet-air-logo.png";
import vietnamairline from "~/assets/vietnam-airline-logo.png";
import moment from 'moment';

import {Wrapper, SubWrapper, BlackText, GrayText, DetailWrapper} from "./FlightDetail.styled";
function FlightDetail({ flight, onClose }) {
    return ( 
        <Wrapper>
            <SubWrapper>
                <SubWrapper>
                    <BlackText>{
                        moment(flight.departure_time).format('HH:mm')
                    }</BlackText>
                    <GrayText>
                        {
                            moment(flight.departure_time).format('DD MMMM')
                        }
                    </GrayText>
                </SubWrapper>
                <p>
                    <img src={flighticon} alt="flighticon"/>
                    <GrayText>
                        {
                            moment(flight.arrival_time).diff(moment(flight.departure_time), 'hours', true)
                        }h 
                        {
                            moment(flight.arrival_time).diff(moment(flight.departure_time), 'minutes', true) % 60
                        }m
                    </GrayText>
                </p>
                <SubWrapper>
                    <BlackText>
                        {
                            moment(flight.arrival_time).format('HH:mm')
                        }
                    </BlackText>
                    <GrayText>
                        {
                            moment(flight.arrival_time).format('DD MMMM')
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