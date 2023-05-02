import styled from "styled-components";
import {ReactComponent as customerIcon} from "~/assets/Customer_icon.svg"

export const UserContainer = styled.button`
    display: flex;
    align-items: center;
    margin-left: 10px;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
    background-color: transparent;
    border: none;
    position: relative;
`;

export const CustomerIcon = styled(customerIcon)`
    width: 30px;
    height: 30px;
    fill: #000;
`;

export const MenuList = styled.ul`
    position: absolute;
    z-index: 1;
    background: white;
    list-style-type: none;
    padding: 1.5rem;
    margin: 0.5rem 0 0 0;
    right: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    color: var(--blue-secondary-color);

    & li {
        margin-bottom: 5px;
        border-bottom: 1px solid var(--blue-secondary-color);
        cursor: pointer;
    }
`;

