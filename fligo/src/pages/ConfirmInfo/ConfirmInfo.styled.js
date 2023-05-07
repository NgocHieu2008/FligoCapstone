import styled from "styled-components";

export const ConfirmInfoWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #F2F3F3;
    padding: 20px 50px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    `;

export const Heading = styled.h1`
    font-size: 2.8rem;
    font-weight: 700;
    color: #000;
    margin-bottom: 10px;
    `;

export const ConfirmContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 20px;
    `;

export const ConfirmLeft = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    `;

export const ConfirmRight = styled.div`
    width: 35%;
    height: 100%;
    display: flex;
    flex-direction: column;
    `;

export const ConfirmItem = styled.div`
    width: 100%;
    background: #fff;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
    margin-bottom: 20px;
    position: relative;
    `;

export const EditButton = styled.button`
    width: 100px;
    height: 40px;
    background: transparent;
    border: none;
    outline: none;
    position: absolute;
    top: 15px;
    right: 10px;
    cursor: pointer;
    color: var(--blue-primary-color);
    font-weight: 700;
    font-size: 1.8rem;
    `;

export const SubHead = styled.p`
    font-weight: 700;
    color: #000;
    margin-bottom: 10px;
    margin-right: 50px;
    font-size: 1.8rem;
    display: inline-flex;
    align-items: center;
    `;

export const ItemTitle = styled.div`
    width: 100%;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 20px 10px 20px;`

export const DetailItem = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
    margin-bottom: 20px;
    align-items: center;
    justify-content: center;
    `;

export const GreenText = styled.span`
    font-weight: 600;
    color: var(--green-primary-color);
    margin-bottom: 10px;
    font-size: 1.8rem;
    `;

export const Insurance = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 20px;
    justify-content: space-between;
    `;

export const Input = styled.input`
    width: 20px;
    height: 20px;
    margin-right: 10px;
    `;

export const ButtonStyled = styled.button`
    width: 20%;
    height: 50px;
    background: var(--green-primary-color);
    border: none;
    outline: none;
    cursor: pointer;
    color: #fff;
    font-weight: 700;
    font-size: 2rem;
    margin: 0 auto;
    justify-content: center;

    &:hover {
        background: #fff;
        color: var(--green-primary-color);
        border: 1px solid var(--green-primary-color);}

    `;

export const ButtonStyled2 = styled.p`
        text-align:end;
        font-weight:700;
        color:#2A8CFF;
        cursor: pointer;
      `;
