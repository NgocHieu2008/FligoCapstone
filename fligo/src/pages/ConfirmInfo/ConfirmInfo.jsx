import BookingTitle from "~/components/BookingTitle/BookingTitle";
import { ConfirmInfoWrapper, Heading, ConfirmContainer, ConfirmLeft, ConfirmRight, ConfirmItem, SubHead, EditButton, 
    ItemTitle, DetailItem, GreenText, Insurance, Input, ButtonStyled,ButtonStyled2 } from "./ConfirmInfo.styled";

import { SubWrapper, DetailWrapper, Time, Location, Direct} from "~/components/Cards/FlightCard/FlightCard.styled";
import { BlackText, GrayText} from "~/pages/BookSeat/BookSeat.styled";

import { useContext, useState } from "react";
import { UserContext } from "~/contexts/UserContext";
import flightIcon from "~/assets/flight_icon.png";
import vietjet from "~/assets/vietjet-air-logo.png";
import vietnamairline from "~/assets/vietnam-airline-logo.png";
import direct from "~/assets/Arrow 2.png";
import checkIcon from "~/assets/icon _check.png";
import baggage from "~/assets/baggage.png";
import tick from "~/assets/tick-square.png";
import ArrowIcon from "~/assets/Arrow 5.png";
import moment from "moment";
import FlightDetail from "~/components/Cards/FlightDetail/FlightDetail";
import  { ModalStyled } from "~/pages/InfoBooking/InforBooking.styled";
function ConfirmInfo() {

    const passengerInfo = JSON.parse(localStorage.getItem("passengerInfo"));
    const { userData } = useContext(UserContext);
    console.log(userData);
    const flight = JSON.parse(localStorage.getItem("selectedFlight"));
    const seat = JSON.parse(localStorage.getItem("selectedSeat"));

    const [flightPrice, setflightPrice] = useState(parseInt(flight.price.$numberDecimal));
    const [serviceFee, setServiceFee] = useState(2);

    const [travelInsurance, setTravelInsurance] = useState(0);
    const [baggageInsurance, setBaggageInsurance] = useState(0);
    const [cancellationInsurance, setCancellationInsurance] = useState(0);

    const [travelInsuranceChecked, setTravelInsuranceChecked] = useState(false);
    const [baggageInsuranceChecked, setBaggageInsuranceChecked] = useState(false);
    const [cancellationInsuranceChecked, setCancellationInsuranceChecked] = useState(false);

    const [insurancePrice, setInsurancePrice] = useState(0);

    const handleTravelInsurance = () => {
        if (travelInsuranceChecked) {
            setTravelInsuranceChecked(false);
            setTravelInsurance(0);
            setInsurancePrice(insurancePrice - 20);   
        } else {
            setTravelInsuranceChecked(true);
            setTravelInsurance(20);
            setInsurancePrice(insurancePrice + 20);
        }
    }

    const handleBaggageInsurance = () => {
        if (baggageInsuranceChecked) {
            setBaggageInsuranceChecked(false);
            setBaggageInsurance(0);
            setInsurancePrice(insurancePrice - 10);
        } else {
            setBaggageInsuranceChecked(true);
            setBaggageInsurance(10);
            setInsurancePrice(insurancePrice + 10);
        }
    }

    const handleCancellationInsurance = () => {
        if (cancellationInsuranceChecked) {
            setCancellationInsuranceChecked(false);
            setCancellationInsurance(0);
            setInsurancePrice(insurancePrice - 25);
        } else {
            setCancellationInsuranceChecked(true);
            setCancellationInsurance(25);
            setInsurancePrice(insurancePrice + 25);
        }
    }

    const handleContinue = () => {
        const bookingInfo = {
            flightPrice: flightPrice,
            serviceFee: serviceFee,
            insurancePrice: insurancePrice,
        }
        localStorage.setItem("bookingInfo", JSON.stringify(bookingInfo));
        window.location.href = "/payment";
    }

    const handleEdit = () => {
        window.location.href = "/info-booking";
    }


    const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  }

  const handleClosePopup = () => {
    setShowPopup(false);
  }

    const handleChangeSeat = () => {
        window.location.href = "/book-seat";
    }

    return ( 
        <>
        <BookingTitle title="Confirmation" active="confirm" />
        <ConfirmInfoWrapper>
            <Heading>My booking</Heading>
            <p>Please double check your booking information</p>
            <ConfirmContainer>
                <ConfirmLeft>
                    <Heading>Contact Details</Heading>
                    <ConfirmItem>
                        <div style={{display:"flex", flexDirection:"row"}}>
                            <div style={{display:"flex", flexDirection:"column"}}>
                                <SubHead>Full Name:</SubHead>
                                <SubHead>Phone number:</SubHead>
                                <SubHead  style={{marginBottom:"0px"}}>Email:</SubHead>
                            </div>
                            <div>
                                <p style={{marginBottom:"15px"}}>{passengerInfo.firstname} {passengerInfo.lastname}</p>
                                <p style={{marginBottom:"15px"}}>{userData?.phoneNo}</p>
                                <p>{userData?.email}</p>
                            </div>
                        </div>
                        <EditButton  onClick={handleEdit}>Edit</EditButton>
                    </ConfirmItem>
                    <Heading>Passenger Details</Heading>
                    <ConfirmItem>
                        <SubHead>{passengerInfo.title} {passengerInfo.firstname}</SubHead>
                        <div style={{display:"inline-flex", marginBottom:"15px"}}>
                            <div>
                                <SubHead>Date of birth:</SubHead>
                                <p>{passengerInfo.dayOfBirth} / {passengerInfo.monthOfBirth} / {passengerInfo.yearOfBirth}</p>
                            </div>
                            <div style={{marginLeft:"80px"}}>
                                <SubHead>Nationality:</SubHead>
                                <p>{passengerInfo.nationality}</p>
                            </div>
                        </div>
                        <SubHead>Passport/ID Card number:</SubHead>
                        <p style={{marginBottom:"15px"}}>{passengerInfo.passport}</p>
                        <SubHead>Expiry date:</SubHead>
                        <p>{passengerInfo.dayExpire} / {passengerInfo.monthExpire} / {passengerInfo.yearExpire}</p>
                        <EditButton  onClick={handleEdit}>Edit</EditButton>
                    </ConfirmItem>
                    <Heading>Flight Details</Heading>
                    <ConfirmItem style={{padding:"20px 0"}}>
                        <ItemTitle>
                            <img src={flightIcon} alt="flight icon" style={{width:"30px", height:"30px", marginRight:"10px"}} />
                            <SubHead style={{color:"#0E185F", fontSize:"2rem"}}>{flight.departure} - {flight.arrival}</SubHead>
                        </ItemTitle>
                        <div style={{padding:"10px 30px"}}>
                            <SubHead><span>Departure: </span>
                             {moment.utc(flight.departure_time).format("ddd, DD MMM YYYY")}
                            </SubHead>
                            <DetailItem>
                                <img src={flight.airline === "VietJet Air" ? vietjet : vietnamairline} alt="airline"/>
                                <p>{flight.airline}</p>
                                <DetailWrapper>
                                    <SubWrapper>
                                        <Time>{
                                            moment.utc(flight.departure_time).format("HH:mm")
                                        }</Time>
                                        <Location>{flight.departureCode}</Location>
                                    </SubWrapper>
                                    <SubWrapper>
                                        <Direct>{
                                            moment.utc(flight.arrival_time).diff(moment.utc(flight.departure_time), 'hours') + "h " + moment.utc(flight.arrival_time).diff(moment.utc(flight.departure_time), 'minutes')%60 + "m"
                                        } (Direct)</Direct>
                                        <img src={direct} alt="direct"/>
                                    </SubWrapper>
                                    <SubWrapper>
                                        <Time>{
                                            moment.utc(flight.arrival_time).format("HH:mm")
                                        }</Time>
                                        <Location>{flight.arrivalCode}</Location>
                                    </SubWrapper>
                                </DetailWrapper>
                            </DetailItem>
                            <p>
                                <img src={checkIcon} alt="check icon" style={{width:"20px", height:"20px", marginRight:"10px"}} />
                                <GreenText>Refundable</GreenText>
                            </p>
                            <p>
                                <img src={checkIcon} alt="check icon" style={{width:"20px", height:"20px", marginRight:"10px"}} />
                                <GreenText>Reschedule Available</GreenText>
                            </p>
                        </div>
                        <EditButton onClick={handleOpenPopup}>Details</EditButton>
                        <ModalStyled isOpen={showPopup} onRequestClose={handleClosePopup} ariaHideApp={false}>
        <FlightDetail flight={flight} />
      </ModalStyled>
                    </ConfirmItem>
                    <Heading>Price Details</Heading>
                    <ConfirmItem style={{padding:"20px 0"}}>
                        <ItemTitle style={{justifyContent:"space-between"}}>
                            <SubHead style={{fontSize:"2rem"}}>Price you pay</SubHead>
                            <SubHead style={{fontSize:"2rem", color:"#BC4141", marginRight:"10px"}}>${flightPrice + insurancePrice + serviceFee}</SubHead>
                        </ItemTitle>
                        <div style={{padding:"10px 30px 0 30px"}}>
                            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                                <div>
                                    <p>{flight.airline} (Adult) x1</p>
                                    <p>Travel Insurance</p>
                                    <p>Service pees</p>
                                </div>
                                <div>
                                    <p>${flight.price.$numberDecimal}</p>
                                    <p>${insurancePrice}</p>
                                    <p>${serviceFee}</p>
                                </div>
                            </div>
                        </div>
                    </ConfirmItem>
                </ConfirmLeft>
                <ConfirmRight>
                    <Heading>Flight Facilities</Heading>
                    <ConfirmItem style={{padding:"20px 0"}}>
                        <div style={{padding:"0 20px"}}>
                            <SubHead> <img src={baggage} alt=""/>  Baggage</SubHead>
                            <p>Get your packing list ready! See how many bags you can bring.</p>
                            <ButtonStyled2>Select baggage</ButtonStyled2>
                        </div>
                        <div style={{borderBottom:"1px solid #0E185F", margin:"10px 0"}}></div>
                        <div style={{padding:"0 20px"}}>
                            <SubHead> <img src={tick} alt=""/>  Seat number</SubHead>
                            <div>
                                <div style={{marginBottom:"10px"}}>
                                    <BlackText>{flight.departure} ({flight.departureCode})</BlackText>
                                    <img src={ArrowIcon} alt="Arrow" style={{height:"10px", margin:"0 10px"}}/>
                                    <BlackText>{flight.arrival} ({flight.arrivalCode})</BlackText>
                                </div>
                                <div>
                                    <GrayText>
                                    {moment.utc(flight.departure_time).format("HH:mm")}
                                    - 
                                    {moment.utc(flight.arrival_time).format("HH:mm")}
                                    </GrayText>
                                    <GrayText style={{margin:"0 5px"}}>|</GrayText>
                                    <GrayText>
                                        {moment.utc(flight.departure_time).format("ddd, DD MMM YYYY")}
                                    </GrayText>
                                    <GrayText style={{margin:"0 5px"}}>|</GrayText>
                                    <GrayText>{flight.airline}</GrayText>
                                </div>
                            </div>
                            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", marginTop:"10px"}}>
                                <SubHead>{passengerInfo.title} {passengerInfo.firstname}</SubHead>
                                <SubHead><span>Seat number: </span>
                                 {seat.row}{seat.column}
                                </SubHead>
                            </div>
                            <ButtonStyled2 onClick={handleChangeSeat}>Change seat</ButtonStyled2>
                        </div>
                    </ConfirmItem>
                    <Heading>Insurance</Heading>
                    <ConfirmItem style={{padding:"20px 0"}}>
                        <div style={{padding:"0 20px"}}>
                            <Insurance>
                                <label>
                                    <Input 
                                    type="checkbox" 
                                    name="travel"
                                    onChange={handleTravelInsurance}
                                    />
                                    <SubHead>Travel Insurance</SubHead>
                                </label>
                                <SubHead style={{color:"#BC4141", marginRight:"0"}}>$20</SubHead>
                            </Insurance>
                            <p>Enjoy The Safest Trip with Travel Insurance</p>
                            <ButtonStyled2>View Details</ButtonStyled2>
                        </div>
                        <div style={{borderBottom:"1px solid #0E185F", margin:"10px 0"}}></div>
                        <div style={{padding:"0 20px"}}>
                            <Insurance>
                                <label>
                                    <Input 
                                    type="checkbox" 
                                    name="baggage"
                                    onChange={handleBaggageInsurance}
                                    />
                                    <SubHead>Baggage Insurance</SubHead>
                                </label>
                                <SubHead style={{color:"#BC4141", marginRight:"0"}}>$10</SubHead>
                            </Insurance>
                            <p>Baggage insurance cover theft, loss, delay, or damage to personal items during a trip.</p>
                            <ButtonStyled2>View Details</ButtonStyled2>
                        </div>
                        <div style={{borderBottom:"1px solid #0E185F", margin:"10px 0"}}></div>
                        <div style={{padding:"0 20px"}}>
                            <Insurance>
                                <label>
                                    <Input 
                                    type="checkbox" 
                                    name="cancell"
                                    onChange={handleCancellationInsurance}
                                    />
                                    <SubHead>Trip Cancellation Insurance</SubHead>
                                </label>
                                <SubHead style={{color:"#BC4141", marginRight:"0"}}>$25</SubHead>
                            </Insurance>
                            <p>If you’re unable to take a trip due to an unforeseeable event, a trip cancellation policy will reimburse you for your prepaid, forfeited and non-refundable costs</p>
                            <ButtonStyled2>View Details</ButtonStyled2>
                        </div>
                    </ConfirmItem>
                </ConfirmRight>
            </ConfirmContainer>
            <ButtonStyled onClick={handleContinue}>Continue to Payment</ButtonStyled>                            
        </ConfirmInfoWrapper>
        </>
     );
}

export default ConfirmInfo;