import {PopularFlightCardWrapper, PopularFlightCardImage, PopularFlightContentContainer,CardBottom, CardBottomLeft, CardBottomRight} from "./PopularFlightCard.styled";
import bitexco from "~/assets/bitexco-1.jpg";

const PopularFlightCard = ({flight}) => {
    return (
        <PopularFlightCardWrapper>
            <PopularFlightCardImage src={flight.image} alt="Popular Flight" />
            <PopularFlightContentContainer>
                <CardBottom>
                    <CardBottomLeft>
                        <h2>{flight.title}</h2>
                        <h3>Depart: {flight.depart}</h3>
                    </CardBottomLeft>
                    <CardBottomRight>
                        <h2>From $ {flight.price}</h2>
                        <h3>{flight.way}/{flight.type}</h3>
                    </CardBottomRight>
                </CardBottom>
            </PopularFlightContentContainer>
        </PopularFlightCardWrapper>
    );
};

export default PopularFlightCard;