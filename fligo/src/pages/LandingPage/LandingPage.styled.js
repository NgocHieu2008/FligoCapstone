import styled from "styled-components";

export const LandingPageContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--white-color);
    `;

export const FirstSessionContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    `;

export const SessionTitle = styled.h2`
    font-size: 5rem;
    font-weight: 700;
    color: var(--blue-secondary-color);
    margin-bottom: 20px;
    `;

export const SecondSessionContainer = styled.div`
    width: 100%;
    height: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 100px 0 200px 0;
    margin-top: 20px;
    background-color: rgba(255, 255, 255, 0.2);
    background-image: url("https://i.ibb.co/ZcpTKt6/GMA-8264-Edit-1-XL-1.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    `;

export const SubSession = styled.div`
    width: 80%;
    height: 100%;
    ${'' /* align-items: center; */}
    justify-content: space-around;
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    background: #fff;
    border-radius: 10px;
    padding: 20px;
    `;
export const Item = styled.div`
    width: 20%;
    height: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        margin-bottom: 20px;
    }

    h3 {
        font-size: 2rem;
        font-weight: 400;
    }
    `;
export const FlightPopularContainer = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    `;