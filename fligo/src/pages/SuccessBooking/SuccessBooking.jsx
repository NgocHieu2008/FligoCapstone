import { Wrapper, Title, TicketWrapper,TicketInfo, TicketInfoItem, FlightInfo, StyledDiv, FlightInfoItem, FlightInfoItemLeft, FlightInfoItemRight,LeftItem, Code,
    Item, ButtonStyled, Price } from "./SuccessBooking.styled";
import QRcode from "~/assets/QRcode.png";
import { useContext } from "react";
import { UserContext } from "~/contexts/UserContext";
import moment from 'moment';
import vietjet from "~/assets/vietjet-air-logo.png";
import vietnamairline from "~/assets/vietnam-airline-logo.png";

function SuccessBooking() {
    const data = JSON.parse(localStorage.getItem("passengerInfo"));
    const flightData = JSON.parse(localStorage.getItem("selectedFlight"));
    const price = JSON.parse(localStorage.getItem("bookingInfo"));
    const { userData } = useContext(UserContext);
    

    const total = price.flightPrice + price.insurancePrice + price.serviceFee;
    

    const date = moment(flightData.departure_time);
    const departDate = date.format('dddd, MMMM Do YYYY');
    const departTime = date.format('HH:mm');
    const arriTime = moment(flightData.arrival_time).format('HH:mm');
    const directTime = moment(flightData.arrival_time).diff(moment(flightData.departure_time), 'hours', true);

    const orderTime = moment(data.timeOrder).format('MMMM Do YYYY, h:mm:ss a');
    return ( 
        <Wrapper>
            <Title>BOOKING SUCCESSFUL</Title>
            <TicketWrapper>
                <img src={QRcode} alt="" />
                <TicketInfo>
                    <p style={{fontWeight:"700"}}>Reservation Code: 12345678</p>
                    <TicketInfoItem>
                        <div>
                            <p>Fullname</p>
                            <p>Phone Number</p>
                            <p>Booking date</p>
                            <p>Email</p>
                        </div>
                        <div>
                            <p style={{textAlign:"end"}}>{data.firstname} {data.lastname}</p>
                            <p style={{textAlign:"end"}}>{userData?.phoneNo}</p>
                            <p style={{textAlign:"end"}}>{orderTime}</p>
                            <p style={{textAlign:"end"}}>{userData?.email}</p>
                        </div>
                    </TicketInfoItem>
                </TicketInfo>
            </TicketWrapper>
            <FlightInfo>
                <p style={{fontWeight:"700"}}>Flight Information</p>
                <StyledDiv>One Way</StyledDiv>
                <FlightInfoItem>
                    <FlightInfoItemLeft>
                        <p>{departDate}</p>
                        <LeftItem>
                            <div>
                                <Code>{flightData.departureCode}</Code>
                                <p>{departTime}</p>
                            </div>
                            <div style={{width:"30%"}}>
                                <p style={{textAlign:"center"}}>{directTime} hours</p>
                                <Item>
                                    <p >Direct</p>
                                    <ButtonStyled>Details</ButtonStyled>
                                </Item>
                            </div>
                            <div>
                                <Code>{flightData.arrivalCode}</Code>
                                <p>{arriTime}</p>
                            </div>
                        </LeftItem>
                    </FlightInfoItemLeft>
                    <FlightInfoItemRight>
                        <img src={flightData.airline === "VietJet Air" ? vietjet : vietnamairline} alt="airline" style={{width:"20%"}}/>
                        <p>{flightData.airline}</p>
                        <Price>${total}</Price>
                    </FlightInfoItemRight>
                </FlightInfoItem>
            </FlightInfo>
        </Wrapper>
     );
}

export default SuccessBooking;