import {Wrapper,Img} from "./HistoryCard.styled";
import wallet from "~/assets/Wallet_alt.png";
import user from "~/assets/user.png";
import ticket from "~/assets/Ticket_use.png";
import check from "~/assets/task-done.png";
import date from "~/assets/Date_today_light.png";
import flight from "~/assets/flight_icon.png";
import vietjet from "~/assets/vietjet-air-logo.png";
import vietnamairline from "~/assets/vietnam-airline-logo.png";
import { useContext } from "react";
import { UserContext } from "~/contexts/UserContext";

function HistoryCard() {

    const { userData } = useContext(UserContext);
    console.log(userData);
    return ( 
        <Wrapper>
            <div>
                <p>
                    <Img src={flight} alt="flight"/>
                    SGN - HAN
                </p>
                <p>
                    <Img src={ticket} alt="ticket"/>
                    Reversation code
                </p>
                <p>
                    <Img src={user} alt="user"/>
                    Passenger name
                </p>
                <p>
                    <Img src={date} alt="date"/>
                    Booking date
                </p>
                <p>
                    <Img src={check} alt="check"/>
                    Status
                </p>
                <p>
                    <Img src={wallet} alt="wallet"/>
                    Total
                </p>
            </div>
            <img src={vietjet} alt="airline" style={{width:"50px"}}/>
            <div style={{display:"flex", flexDirection:"column"}}>
                <span>20:00 - 22:00</span>
                <span>123456789</span>
                <span>Nguyen Van A</span>
                <span>20/10/2021</span>
                <span>Paid</span>
                <span>$234</span>
            </div>
        </Wrapper>
     );
}

export default HistoryCard;