import BookingTitle from "~/components/BookingTitle/BookingTitle";
import { Wrapper, Left, Middle, Right,Button, FlightWrapper, FlightDetailBtn, ModalStyled} from "./Payment.styled";
import { useState } from "react";
import Visa from "./Visa";
import Momo from "./Momo";
import CreditCard from "./CreditCard";
import vietjet from "~/assets/vietjet-air-logo.png";
import vietnamairline from "~/assets/vietnam-airline-logo.png";
import moment from 'moment';
import FlightDetail from "~/components/Cards/FlightDetail/FlightDetail";

function Payment() {
    const [activeButton, setActiveButton] = useState(1);
    const flight = JSON.parse(localStorage.getItem("selectedFlight"));
    const passenger = JSON.parse(localStorage.getItem("passengerInfo"));

    const content = [
        {
            id: 1,
            component: <Visa />
        },
        {
            id: 2,
            component: <Momo />
        },
        {
            id: 3,
            component: <CreditCard />
        }
    ]

    const renderContent = () => {
        const result = content.find((item) => item.id === activeButton);
        return result.component || null;
    }
    const handleClick = (buttonId) => {
        setActiveButton(buttonId);
    };

    const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  }

  const handleClosePopup = () => {
    setShowPopup(false);
  }

    return ( 
        <>
        <BookingTitle title="Payment" active="payment" />
        <Wrapper>
            <Left>
                <Button active={activeButton === 1} onClick={() => handleClick(1)}>Visa</Button>
                <Button active={activeButton === 2} onClick={() => handleClick(2)}>Momo</Button>
                <Button active={activeButton === 3} onClick={() => handleClick(3)}>Credit card</Button>
            </Left>
            <Middle>
                {renderContent()}
            </Middle>
            <Right>
                <div style={{borderLeft:"1px solid #000", height:"300px"}}></div>
                <FlightWrapper>
                    <div style={{display:"inline-flex",justifyContent:"space-between"}}>
                        <h3>Flight Infomation</h3>
                        <FlightDetailBtn onClick={handleOpenPopup}>Details</FlightDetailBtn>
                        <ModalStyled isOpen={showPopup} onRequestClose={handleClosePopup} ariaHideApp={false}>
                        <FlightDetail flight={flight} />
                        </ModalStyled>
                    </div>
                    <h3>
                    {moment.utc(flight.departure_time).format("ddd, DD MMM YYYY")}
                    </h3>
                    <div style={{display:"inline-flex",justifyContent:"space-between", marginBottom:"20px"}}>
                        <p>{flight.departure} ({flight.departureCode})</p>
                        <img src={flight.airline === "VietJet Air" ? vietjet : vietnamairline} alt="airline" style={{width:"30px"}}/>
                        <p>{flight.arrival} ({flight.arrivalCode})</p>
                    </div>
                    <h3>Customer list</h3>
                    <div style={{display:"inline-flex",justifyContent:"space-between"}}>
                        <p>{passenger.firstname}</p>
                        <p>Adult</p>
                    </div>
                </FlightWrapper>
            </Right>
        </Wrapper>
        </>
     );
}

export default Payment;