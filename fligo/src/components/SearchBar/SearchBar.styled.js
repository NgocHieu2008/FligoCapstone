import styled from "styled-components";


export const Wrapper = styled.section`
    background: #fff;
    width: 90%;
    border-radius: 30px;
    padding: 20px 50px;
    margin: 30px 0;
    display: flex;
    flex-direction: column;
    `;

export const Title = styled.p`
    font-size: 2rem;
    font-weight: bold;
    color: var(--blue-secondary-color);
    justifyContent: center;
    margin-bottom: 20px;
    img{
        width: 4rem;
    }
    `;

export const OptionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin-bottom: 20px;
    `;

export const Label = styled.label`
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--blue-secondary-color);
    display: flex;
    flex-direction: row;
    margin-right: 30px;
    justify-content: center;
    align-items: center;
    `;

export const Input = styled.input`
    width: 45px;
    height: 30px;
    margin-right: 10px;
    border: 1px solid var(--blue-secondary-color);
    border-radius: 5px;
    padding: 0 10px;
    check{
        color: var(--blue-secondary-color);
    }
    `;

export const Select = styled.select`
    color: var(--blue-secondary-color);
    font-size: 1.5rem;
    font-weight: bold;
    border: 0px solid var(--blue-secondary-color);
    `;

export const FillWrapper = styled.div`
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    box-shadow: 0px 4px 4px #c4c4c4;
    padding: 10px 20px;
    img{
        width: 2rem;
        height: 2rem;
        align-self: center;
    }
    `;

export const FillLabel = styled.label`
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--blue-secondary-color);
    `;

export const Fill = styled.select`
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 1px solid var(--blue-secondary-color);
    `;

export const DateInput = styled.input`
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 1px solid var(--blue-secondary-color);
    `;

export const Button = styled.button`
    height: 40px;
    background-color: var(--blue-secondary-color);
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 10px 30px;
    `;