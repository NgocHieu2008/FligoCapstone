import styled from "styled-components";
import searchbg from "~/assets/bg_2.png";

export const SearchWrapper = styled.div`
    background-image: url(${searchbg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TimeLineWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    background: #fff;
    width: 60%;
    margin: 0 auto;
    `;

export const ContentWrapper = styled.div`
    display: flex;
    padding: 20px 0;
    background: #F2F3F3;
    flex-direction: row;
`;

export const FilterWrapper = styled.div`
    display: flex;
    padding: 10px 0;
    width: 20%;
    flex-direction: column;
    align-self: flex-start;
`;

export const Filter = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    width: 95%;
    margin: 0 auto;
    flex-direction: column;
    background: #fff;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-bottom: 10px;
`;

export const FilterTitle = styled.div`
    display: inline-flex;
    align-items: center;
    font-weight: 700;
    font-size: 1.5rem;
    `;

export const FlightWrapper = styled.div`
    display: flex;
    align-self: flex-start;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    width: 80%;
    flex-direction: column;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    `;

export const Label = styled.label`
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 10px;
    color: var(--blue-secondary-color);
    `;

export const Input = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid var(--blue-secondary-color);
    border-radius: 5px;
    padding: 0 10px;
    margin-right: 10px;
    `;

export const Button = styled.button`
    color: var(--blue-secondary-color);
    background-color: ${(props) => props.active ? "background: rgba(47, 164, 255, 0.31)" : "white"};
    border: none;
    font-size: 1.8rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    width: 100%;
    height: 60px;
    border-radius: 5px;
`;