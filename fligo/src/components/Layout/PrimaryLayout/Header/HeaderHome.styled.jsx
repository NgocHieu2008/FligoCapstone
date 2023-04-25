import styled from "styled-components";
import {ReactComponent as customerIcon} from "~/assets/Customer_icon.svg"

export const UserContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;
    flex-direction: row;
    justify-content: space-between;
    span{
        margin-left: 10px;
        font-size: 14px;
        font-weight: 500;
        color: #000;
    }
`;

export const CustomerIcon = styled(customerIcon)`
    width: 30px;
    height: 30px;
    fill: #000;
`;
