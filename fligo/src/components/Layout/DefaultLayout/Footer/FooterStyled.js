import styled from "styled-components";

export const FooterStyled = styled.footer`
    background-color: var(--blue-secondary-color);
    padding: 5rem 4rem 3rem 4rem;
    color: var(--white-color);
`;

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FooterContainerRow = styled.div`
    display: flex;
    flex-direction: row;
`;

export const FooterContainerLeft = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    font-size: 2rem;
`;

export const FooterContainerCenter = styled.div`
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 2rem;
`;

export const FooterContainerRight = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    align-items: flex-end;

    p {
        display: flex;
        align-items: flex-end;
        flex-direction: column;
    }
`;

export const FooterItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
`;

export const FooterItemTitle = styled.h3`
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
`;

export const FooterItemContent = styled.p`
    font-size: 1.5rem;
    font-weight: 400;
`;