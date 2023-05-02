import styled from "styled-components";
import vietjet from "~/assets/vietjet-air-logo.png";
import vietnamairline from "~/assets/vietnam-airline-logo.png";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px 30px;
    background: #Fff;
    flex-direction: column;
    border-radius: 10px;
    width: 95%;
`;

export const DetailWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 90%;
    align-self: center;
    margin: 20px 0;
`;

export const Location = styled.div`
    background: var(--blue-primary-color);
    color: #fff;
    padding: 5px 10px;
    border-radius: 10px;
    width: 60px;
    text-align: center;
    font-weight: 500;
`;

export const Time = styled.p`
    font-size: 2rem;
    font-weight: 500;
    margin: 0;
`;

export const SubWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Direct = styled.p`
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 5px;
    color: #ADA599;
`;

export const Price = styled.p`
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 5px;
    color: var(--green-primary-color);
`;

export const Button = styled.button`
    background: var(--green-primary-color);
    color: #fff;
    padding: 10px 20px;
    border-radius: 10px;
    border: none;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 5px;
    cursor: pointer;
    width: 100%;

    &:hover {
        background: #fff;
        color: var(--green-primary-color);
        border: 1px solid var(--green-primary-color);
    }
`;

export const DetailButton = styled.button`
    background: transparent;
    border: none;
    align-self: flex-start;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: var(--blue-secondary-color);
    `;