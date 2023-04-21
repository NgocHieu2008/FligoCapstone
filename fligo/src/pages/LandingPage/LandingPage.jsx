import BannerSlider from "~/components/Carousels/BannerSlider/BannerSlider";
import { LandingPageContainer,FirstSessionContainer, SessionTitle, SecondSessionContainer, SubSession, Item, FlightPopularContainer } from "./LandingPage.styled";
import { PopularFlight } from '~/data/PopularFlight';
import PopularFlightCard from '~/components/Cards/PopularFlightCard/PopularFlightCard';


function LandingPage() {
    return ( 
        <LandingPageContainer>
            <BannerSlider />
            <FirstSessionContainer>
                <SessionTitle>Explore Popular Flight</SessionTitle>
                <FlightPopularContainer>
                    {PopularFlight.map((flight, index) => (
                        <PopularFlightCard key={index} flight={flight} />
                    ))}
                </FlightPopularContainer>
            </FirstSessionContainer>
            <SecondSessionContainer>
                <SessionTitle>Additional Service</SessionTitle>
                <SubSession>
                    <Item>
                        <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/29/57/12.jpg" alt="img" />
                        <h3>Prepaid Baggage</h3>
                    </Item>
                    <Item>
                        <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/29/57/12.jpg" alt="img" />
                        <h3>Flight Delay/Cancelation</h3>
                    </Item>
                    <Item>
                        <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/29/57/12.jpg" alt="img" />
                        <h3>Meet & Greet Service</h3>
                    </Item>
                    <Item>
                        <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/29/57/12.jpg" alt="img" />
                        <h3>Paid Meal Service</h3>
                    </Item>
                </SubSession>
            </SecondSessionContainer>
        </LandingPageContainer>
     );
}

export default LandingPage;