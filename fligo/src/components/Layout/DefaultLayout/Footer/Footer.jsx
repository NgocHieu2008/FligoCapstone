import {FooterStyled, FooterContainer, FooterContainerLeft, FooterItem, FooterItemTitle, FooterItemContent, FooterContainerCenter, FooterContainerRow, FooterContainerRight} from "./FooterStyled";

function Footer() {
    return ( 
        <FooterStyled >
            <FooterContainer>
                <FooterContainerRow>
                    <FooterContainerLeft>
                        <FooterItem>
                            <FooterItemTitle>HOTLINE</FooterItemTitle>
                            <p>028 12 123 123</p>
                        </FooterItem>
                    </FooterContainerLeft>
                    <FooterContainerCenter>
                        <FooterItem>
                            <FooterItemTitle>ADDRESS</FooterItemTitle>
                            <p>24 Nam Ky Khoi Nghia, Ben Nghe Ward, District 1, Ho Chi Minh City</p>
                        </FooterItem>
                    </FooterContainerCenter>
                    <FooterContainerRight>
                        <FooterItem>
                            <FooterItemTitle>CONTACT</FooterItemTitle>
                            <p></p>
                        </FooterItem>
                    </FooterContainerRight>
                </FooterContainerRow>
                <FooterContainerRow>
                    <FooterContainerLeft>
                        <FooterItem>
                            <FooterItemTitle>FLIGO</FooterItemTitle>
                            <FooterItemContent>
                                <p>About us</p>
                                <p>Corporate Social Responsibility</p>
                                <p>Online Booking Guide</p>
                                <p>Career</p>
                            </FooterItemContent>
                        </FooterItem>
                    </FooterContainerLeft>
                    <FooterContainerCenter>
                        <FooterItem>
                            <FooterItemTitle>Legal</FooterItemTitle>
                            <FooterItemContent>
                                <p>Terms & Conditions</p>
                                <p>Conditions of Carriage</p>
                                <p>Cookie Policy</p>
                                <p>Privacy Policy</p>
                            </FooterItemContent>
                        </FooterItem>
                        <FooterItem>
                            <FooterItemTitle>Support</FooterItemTitle>
                            <FooterItemContent>
                                <p>Common Question</p>
                                <p>Feedback</p>
                                <p>Web Accessibility</p>
                                <p>Advice to support ticket booking</p>
                            </FooterItemContent>
                        </FooterItem>
                    </FooterContainerCenter>
                    <FooterContainerRight>
                        <FooterItem>
                            <FooterItemTitle>Useful Infomation</FooterItemTitle>
                            <FooterItemContent>
                                <p>Baggage Fees</p>
                                <p>Optional & Special</p>
                                <p>Service Charge</p>
                            </FooterItemContent>
                        </FooterItem>
                    </FooterContainerRight>
                </FooterContainerRow>
            </FooterContainer>
        </FooterStyled>
     );
}

export default Footer;