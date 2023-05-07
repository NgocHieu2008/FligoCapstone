import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #f2f3f3;
    padding: 1rem 3rem;
    overflow-y: auto;
`;

export const Title = styled.h1`
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--blue-secondary-color);
`;

export const ButtonWrapper = styled.div`
    width: 80%;
    border-radius: 0 20px 20px 0;
    background-color: var(--blue-secondary-color);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-right: 12rem;
    height: 60px;
    margin-bottom: 2rem;
`;

export const Button = styled.button`
    height: ${(props) => props.active ? "80px" : "60px"};
    width: 30%;
    background-color: ${(props) => props.active ? "white" : "var(--blue-secondary-color)"};
    color: ${(props) => props.active ? "var(--blue-secondary-color)" : "white"};
    border: none;
    font-size: 2rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: white;
        color: var(--blue-secondary-color);
    }

    `;
