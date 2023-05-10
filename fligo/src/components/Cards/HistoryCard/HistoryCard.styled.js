import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #fff;
    padding: 2rem 1rem 0 2rem;
    margin-right: 30px;
    align-items: flex-start;
    justify-content: space-between;
    width: 30%;

    p{
        margin-bottom: 10px;
        display: flex;
        align-items: center;
    }

    span{
        margin-bottom: 15px;
        text-align: end;
    }
    `;

export const Img = styled.img`
    width: 30px;
    margin-right: 10px;
    `;

export const TicketWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`