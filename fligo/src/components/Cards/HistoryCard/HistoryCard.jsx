import { Wrapper, Img, TicketWrapper } from "./HistoryCard.styled";
import wallet from "~/assets/Wallet_alt.png";
import user from "~/assets/user.png";
import ticket from "~/assets/Ticket_use.png";
import check from "~/assets/task-done.png";
import date from "~/assets/Date_today_light.png";
import flight from "~/assets/flight_icon.png";
import vietjet from "~/assets/vietjet-air-logo.png";
import vietnamairline from "~/assets/vietnam-airline-logo.png";
import { useEffect, useContext, useState } from "react";
import { UserContext } from "~/contexts/UserContext";

function HistoryCard() {
  const { userData } = useContext(UserContext);
  const [bookingInfo, setBookingInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const response = await fetch(
        `http://localhost:8000/tickets/${userData.username}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
    //   console.log("hello");
        // console.log(data);
      const bookedInfo = Object.values(data);
      // console.log(bookedInfo);
      const transformedData = bookedInfo.map((ticket) => ({
        reservationCode: ticket.reservationCode,
        firstname: ticket.firstname,
        lastname: ticket.lastname,
        bookedDate: new Date().toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
        status: "Paid",
        total: ticket.paymentBill,
        airline: ticket.airline
      }));
      setBookingInfo(transformedData.flat());;
      setIsLoading(false);
      // console.log(bookingInfo);
    }
    fetchData();
  }, []);
  return (
    <>
      <TicketWrapper>
        {bookingInfo.map((booking) => (
          <Wrapper key={booking.reservationCode}>
            <div>
              <p>
                <Img src={flight} alt="flight" />
                SGN - HAN
              </p>
              <p>
                <Img src={ticket} alt="ticket" />
                Reversation code
              </p>
              <p>
                <Img src={user} alt="user" />
                Passenger name
              </p>
              <p>
                <Img src={date} alt="date" />
                Booking date
              </p>
              <p>
                <Img src={check} alt="check" />
                Status
              </p>
              <p>
                <Img src={wallet} alt="wallet" />
                Total
              </p>
            </div>
            <img src={booking.airline === "VietJet Air" ? vietjet : vietnamairline} alt="airline" style={{ width: "50px" }} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "fit-content",
              }}
            >
              <span>
                20:00 - 22:00
              </span>
              <span>{booking.reservationCode}</span>
              <span>
                {booking.firstname} {booking.lastname}
              </span>
              <span>{booking.bookedDate}</span>
              <span>{booking.status}</span>
              <span>${booking.total}</span>
            </div>
          </Wrapper>
        ))}
        {isLoading && (
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            Loading...
          </div>
        )}
      </TicketWrapper>
    </>
  );
}

export default HistoryCard;
