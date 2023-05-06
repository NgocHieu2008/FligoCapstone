import styled from "styled-components";
import { Form, Field, ErrorMessage } from "formik";

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #F2F3F3;
    padding: 20px 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    `;

export const Left = styled.div`
    width: 20%;
    height: 800px;
    background-color: var(--blue-secondary-color);
    border-radius: 20px 20px 0px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0px;
    `;

export const Middle = styled.div`
    width: 50%;
    height: 100%;
    padding: 20px 20px 0px 50px;
    display: flex;
    flex-direction: column;
    `;

export const Right = styled.div`
    width: 30%;
    padding: 20px;
    display: flex;
    flex-direction: row;
    borderLeft: 1px solid #c4c4c4;
    `;

export const Button = styled.button`
    width: ${(props) => props.active ? "108%" : "100%"};
    height: 70px;
    background-color: ${(props) => props.active ? "white" : "var(--blue-secondary-color)"};
    color: ${(props) => props.active ? "var(--blue-secondary-color)" : "white"};
    border: none;
    font-size: 2rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    margin-bottom: 20px;

    &:hover {
        background-color: white;
        color: var(--blue-secondary-color);
    }

    `;

export const FormStyled = styled(Form)`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    `;

export const FieldWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    `;

export const Label = styled.label`
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 10px;
    `;

export const Input = styled(Field)`
    width: 100%;
    height: 40px;
    outline: none;
    border: none;
    border-radius: 3px;
    box-shadow: 0px 4px 4px #c4c4c4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 10px 5px;
    font-size: 1.6rem;
    `;

export const Error = styled(ErrorMessage)`
    color: red;
    font-size: 1.2rem;
    `;

export const DetailWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #E8FFC2;
    margin-bottom: 20px;
    padding: 20px;

    h3 {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 15px;
    }

    p {
        font-size: 1.6rem;
        font-weight: 400;
        margin-bottom: 10px;
    }
    `;

export const SubmitButton = styled.button`
    width: 30%;
    height: 50px;
    background-color: var(--green-primary-color);
    color: white;
    border: none;
    font-size: 2rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    margin-bottom: 20px;
    justify-self: flex-end;
    border-radius: 10px;
    margin-left: auto;
    margin-top: 10px;

    &:hover {
        background-color: white;
        color: var(--green-primary-color);
        border: 2px solid var(--green-primary-color);
    }
    `;

export const FlightWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 20px;

    h3 {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 15px;
    }

    `;