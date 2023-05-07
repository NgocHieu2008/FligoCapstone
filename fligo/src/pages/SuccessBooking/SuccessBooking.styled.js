import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #fff;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    overflow-y: auto;
`;

export const Title = styled.h1`
    font-size: 3.5rem;
    font-weight: 700;
    color: var(--blue-secondary-color);
    margin-bottom: 1rem;
`;

export const TicketWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    background: #f2f3f3;
    padding: 1.5rem 1rem;
    align-items: center;
    justify-content: space-between;
    `;

export const TicketInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    font-size: 1.8rem;
    `;

export const TicketInfoItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    p{
        margin-bottom: 0.75rem;
    }
    `;  

export const FlightInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    font-size: 1.8rem;
    margin: 2rem 0;
    `;

export const StyledDiv = styled.div`
    background: #E8FFC2;
    padding: 0.5rem 1rem;
    width: 100%;
    margin-bottom: 1rem;
    `;

export const FlightInfoItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    `;

export const FlightInfoItemLeft = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    border-right: 1px solid #000;
    `;

export const FlightInfoItemRight = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    align-items: center;
    justify-content: center;
    `;

export const LeftItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
    padding: 3rem 0;
    `;

export const Item = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #000;
    font-size: 1.3rem;
    width: 100%;
    `;

export const Code = styled.p`
    font-size: 2.8rem;
    font-weight: 700;
    `;

export const ButtonStyled = styled.button`
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: 700;
    color: var(--blue-primary-color);
    `;

export const Price = styled.p`
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--blue-secondary-color);
    margin: 1rem 0;
    `;