import styled from "styled-components";

export const PopularFlightCardWrapper = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0 1rem;
    border-radius: 1rem;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    position: relative;
    &:hover {
        transform: translateY(-5px);
    }
`;

export const PopularFlightCardImage = styled.img`
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 1rem 1rem 0 0;
`;

export const PopularFlightContentContainer = styled.div`
    width: 100%;
    height: 100px;
    position: relative;
    bottom: 0;
    background: #fff;
    display: flex;
    flex-direction: column;
    border-radius: 0 0 1rem 1rem;
`;

export const CardBottom = styled.div`
    width: 100%;
    height: 250px;
    position: absolute;
    bottom: 0;
    background: #EEE6E6;
    mix-blend-mode: hard-light;
    border: 1px solid rgba(0, 0, 0, 0.17);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 0 0 1rem 1rem;
    display: flex;
`;

export const CardBottomLeft = styled.div`
    height: 60%;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    h2{
        font-size: 2rem;
        font-weight: 400;
        margin-bottom: 1rem;
    }

    h3{
        font-size: 1.5rem;
        font-weight: 700;
    }
    `;

export const CardBottomRight = styled.div`
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 1.5rem;
    font-weight: 400;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    `;