import background from "../../assets/flight-booking.jpg";
import styled from "styled-components";
import { Formik, Field, Form, ErrorMessage} from 'formik';

export const Wrapper = styled.section`
    background: url(${background});
    object-fit: scale-down;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 60px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

export const DivStyled = styled.div`
    width: 50%;
    height: 100%;
    background-color: #fff;
    border-radius: 0 0 20px 20px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
    /* letter-spacing: 0.6px; */
`;

export const DivTitle = styled.div`
    width: 50%;
    background-color: var(--blue-primary-color);
    color: #fff;
    border-radius: 20px 20px 0 0;
    padding: 10px;
    `;

export const DivForm = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const FormStyled = styled(Form)`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const LabelStyled = styled.label`
    font-size: 1.5rem;
    font-weight: 900;
    margin-bottom: 10px;
`;

export const InputStyled = styled(Field)`
    width: 100%;
    height: 40px;
    outline: none;
    border: none;
    border-radius: 3px;
    box-shadow: 0px 4px 4px #c4c4c4;
    border: 0.4px solid #c4c4c4;
    margin-bottom: 10px;
    padding: 8px;
    font-size: 16px;
`;

export const FieldWrapper = styled.div`
    position: relative;
`;

export const DateContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    gap: 10px;  
`;

export const ButtonStyled = styled.button`
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 1rem;
    background-color: var(--green-primary-color);
    color: #fff;
    font-size: 2rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    margin-top: 20px;
    &:hover {
        background-color: #fff;
        color: var(--green-primary-color);
        border: 1px solid var(--green-primary-color);
    }
    
`;

