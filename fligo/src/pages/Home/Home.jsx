import React, { useState} from 'react';
import { ChatIcon, ChatWrapper, ChatBotContainer,SearchWrapper,SectionTitle,BoxWrapper,DiscountWrapper,TopWrapper,Wrapper,FormWrapper,FormContainer,EmailInput,Button } from './Home.styled';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import SearchBar from '~/components/SearchBar/SearchBar';
import BannerSlider from '~/components/Carousels/BannerSlider/BannerSlider';
import banner1 from '~/assets/banner-home-1.png';
import banner2 from "~/assets/Baner 3.jpg"
import banner3 from "~/assets/Baner 1.jpg"
import service1 from "~/assets/airport-car-service.jpg"
import service2 from "~/assets/service2.jpg"
import service3 from "~/assets/service3.jfif"
import service4 from "~/assets/service4.jpg"
import discount1 from "~/assets/discount1.jpg"
import discount2 from "~/assets/discount2.jpg"
import discount3 from "~/assets/discount3.jpg"
import bitexco from "~/assets/bitexco-1.jpg"
import cauvang from "~/assets/cauvang.jpg"
import halong from "~/assets/ha-long.jpg"
import helpline from "~/assets/helpline 1.png"
import piggybank from "~/assets/piggy-bank 1.png"


function Home() {
    const [showBotChat, setShowBotChat] = useState(false);

    const toggleBotChat = () => {
        setShowBotChat(!showBotChat);
    };

    return ( 
        <>
            <ChatWrapper>
                <ChatIcon icon={faComments} onClick={toggleBotChat} />
                {showBotChat ? <ChatBotContainer>
                    <Chatbot
                        config={config}
                        messageParser={MessageParser}
                        actionProvider={ActionProvider}
                    />
                </ChatBotContainer> : null }
            </ChatWrapper>
            <SearchWrapper>
                <SearchBar/>
            </SearchWrapper>
            <BannerSlider banner1={banner1} banner2={banner2} banner3={banner3}/>
            
            <div style={{marginBottom:"50px"}}>
                <SectionTitle>Additional Service</SectionTitle>
                <BoxWrapper>
                    <div>
                        <img src={service1}/>
                        <p>Airport Transfer</p>
                    </div>
                    <div>
                        <img src={service2}/>
                        <p>Tour with Fligo</p>
                    </div>
                    <div>
                        <img src={service3}/>
                        <p>Meet & Greet Service</p>
                    </div>
                    <div>
                        <img src={service4}/>
                        <p>Booking Hotel</p>
                    </div>
                </BoxWrapper>
            </div>
            <div style={{marginBottom:"50px"}}>
                <SectionTitle>Summer Discount</SectionTitle>
                <DiscountWrapper>
                    <div>
                        <img style={{borderRadius:"50px 0px 0px 0px"}} src={discount1}/>
                        <p>Find Best Deal</p>
                    </div>
                    <div>
                        <img src={discount2}/>
                        <p>Business Class Best Deal</p>
                    </div>
                    <div>
                        <img style={{borderRadius:"0px 50px 0px 0px"}} src={discount3}/>
                        <p>Travel Sale</p>
                    </div>
                </DiscountWrapper>
            </div>
            <div>
                <SectionTitle style={{color:"#fff",textAlign:"left", background:"var(--blue-secondary-color)", padding:"10px", margin:"0"}}>TOP DESTINATIONS</SectionTitle>
                <div style={{background:"linear-gradient(180deg, rgba(47, 164, 255, 0.152) 0%, rgba(47, 164, 255, 0) 100%)",padding:"30px"}}>
                    <TopWrapper>
                        <div>
                            <img src={bitexco}/>
                            <div>
                                <p>Ho Chi Minh City</p>
                                <button>Discover</button>
                            </div>
                        </div>
                        <div>
                            <img src={cauvang}/>
                            <div>
                                <p>Da Nang</p>
                                <button>Discover</button>
                            </div>
                        </div>
                        <div>
                            <img src={halong}/>
                            <div>
                                <p>Ha Long Bay</p>
                                <button>Discover</button>
                            </div>
                        </div>

                    </TopWrapper>
                </div>
            </div>
            <div style={{background: "linear-gradient(180deg, rgba(47, 164, 255, 0.19) 0%, rgba(47, 164, 255, 0) 100%)"}}>
                <SectionTitle style={{textAlign:"left",marginLeft:"40px"}}>Why choose us?</SectionTitle>
                <Wrapper>
                    <div>
                        <img src={helpline}/>
                        <h2>24/7 Customer Service</h2>
                        <p>We are always ready to advise and answer questions of customers 24/7</p>
                    </div>
                    <div>
                        <img src={piggybank}/>
                        <h2>Best fares</h2>
                        <p>Ensuring the best airfares for customers' needs to book flights according to different sectors</p>
                    </div>
                    <div>
                        <img src={piggybank}/>
                        <h2>Best fares</h2>
                        <p>Ensuring the best airfares for customers' needs to book flights according to different sectors</p>
                    </div>
                </Wrapper>
            </div>
            <FormWrapper>
                <FormContainer>
                    <div>
                        <h1 style={{fontWeight:"400"}}>Looking for the latest fare deal?</h1>
                        <p>Subscribe now for our newsletter and get the latest promotion from Fligo</p>
                    </div>
                    <EmailInput placeholder="Enter your email address"/>
                    <Button>Subscribe</Button>
                </FormContainer>
            </FormWrapper>
        </>
     );
}

export default Home;