import BannerSlider from "~/components/Carousels/BannerSlider/BannerSlider";
import { LandingPageContainer,FirstSessionContainer, SessionTitle, SecondSessionContainer, SubSession, Item, FlightPopularContainer } from "./LandingPage.styled";
import { PopularFlight } from '~/data/PopularFlight';
import PopularFlightCard from '~/components/Cards/PopularFlightCard/PopularFlightCard';
import banner1 from "~/assets/Baner 1.jpg"
import banner2 from "~/assets/Baner 2.gif"
import banner3 from "~/assets/Baner 3.jpg"
import service1 from "~/assets/airport-car-service.jpg"
import service2 from "~/assets/service2.jpg"
import service3 from "~/assets/service3.jfif"
import service4 from "~/assets/service4.jpg"

function LandingPage() {
    return ( 
        <LandingPageContainer>
            <BannerSlider banner1={banner1} banner2={banner2} banner3={banner3}/>
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
                        <img src={service1} alt="img" />
                        <h3>Airport Transfer</h3>
                    </Item>
                    <Item>
                        <img src={service2} alt="img" />
                        <h3>Tour with Fligo</h3>
                    </Item>
                    <Item>
                        <img src={service3} alt="img" />
                        <h3>Meet & Greet Service</h3>
                    </Item>
                    <Item>
                        <img src={service4} alt="img" />
                        <h3>Booking Hotel</h3>
                    </Item>
                </SubSession>
            </SecondSessionContainer>
        </LandingPageContainer>
     );
}

export default LandingPage;