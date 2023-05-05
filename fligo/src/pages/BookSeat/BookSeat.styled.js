import styled from "styled-components";

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background: var(--blue-secondary-color);
    padding: 10px 0;
    width: 100%;
    color: var(--white-color);
    font-size: 3rem;
    font-weight: 700;

    & > img {
        margin-right: 10px;
        height: 50px;
    }
`;

export const SeatMapContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 500px;
    overflow-y: scroll;
    background: #F2F3F3;
    padding: 20px;
`;

export const BlackText = styled.span`
    color: #000;
    font-weight: 700;
`;

export const GrayText = styled.span`
    color: #C4C4C4;
    font-weight: 500;
`;

export const SubTitle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px 20px;

    & > div{
        margin-bottom: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 30%;

        & > img {
            height: 20px;
        }
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    `;

export const LeftContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;

    & > div {
        height: 100px;
        background: #E8FFC2;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 20px;
    }
`;

export const RightContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
`;

export const DefinedSeat = styled.div`
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    width: 100%;
    background: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 20%;
        height: 100%;
        margin-right: 10px;
    }
    `;

export const Button = styled.button`
    width: 20%;
    background: var(--green-primary-color);
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    color: var(--white-color);
    font-weight: 700;
    font-size: 2rem;
    cursor: pointer;
    margin-top: 20px;
    margin-left: auto;
    margin-right: 20px;
    margin-bottom: 20px;
    `;