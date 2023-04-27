import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import background1 from '~/assets/bg_1.png'
import bg2 from "~/assets/bg_home_2.png"

export const ChatWrapper = styled.div`
    position: relative;
    `;
export const ChatIcon = styled(FontAwesomeIcon)`
    position: fixed;
    bottom: 40px;
    right: 40px;
    font-size: 3rem;
    color: #fff;
    background-color: #007bff;
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    z-index: 1000;
    `;

export const ChatBotContainer = styled.div`
    position: fixed;
    bottom: 100px;
    right: 40px;
    height: 500px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    z-index: 1000;
    `;

export const SearchWrapper = styled.div`
    background: url(${background1}) no-repeat center center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 70px 0;
`;

export const SectionTitle = styled.h2`
    font-size: 4rem;
    font-weight: 500;
    color: var(--blue-secondary-color);
    text-align: center;
    margin-bottom: 30px;
    margin-top: 30px;
`;

export const BoxWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-around;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 20px;
    div{
        display: flex;
        flex-direction: column;
        width: 22%;
        align-items: center;
        img{
            width: 100%;
            height: 150px;
            border-radius: 10px;
            margin-bottom: 10px;
        }
    }
`;

export const DiscountWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;

    div{
        display: flex;
        flex-direction: column;
        width: 30%;
        align-items: center;
        position: relative;
        img{
            width: 100%;
            height: 200px;
        }
        p{
            position: absolute;
            bottom: 0;
            background:  rgba(23, 21, 21, 0.6);
            color: #fff;
            width: 100%;
            text-align: center;
            padding: 10px;
            font-size: 1.5rem;
            font-weight: 500;
        }
    }
    `;

export const TopWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    div{
        display: flex;
        flex-direction: column;
        width: 30%;
        height: 500px
        align-items: center;
        position: relative;
        img{
            width: 100%;
            height: 500px;
        }
        div{
            position: absolute;
            bottom: 0;
            background:  rgba(23, 21, 21, 0.6);
            color: #fff;
            width: 100%;
            text-align: center;
            padding: 10px;
            font-size: 1.5rem;
            font-weight: 500;
            display: flex;
            justify-content: space-around;
            flex-direction: row;
            p{
                font-weight: bold;
            }
            button{
                background: none;
                border: 1px solid #fff;
                padding: 5px 15px;
                color: #fff;
            }
        }
    }
    `;

export const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 40px 0;
    div{
        display: flex;
        flex-direction: column;
        width: 30%;
        align-items: center;
        justify-content: center;
        h2{
            font-size: 2rem;
            font-weight: 500;
            text-align: center;
            margin: 10px 0;
        }
        p{
            font-size: 1.5rem;
            font-weight: 500;
            text-align: center;
        }
    }
    `;

export const FormWrapper = styled.div`
    background: url(${bg2}) no-repeat center center;
    background-size: cover;
    display: flex;
    align-items: center;
    padding: 70px 0;
    `;

export const FormContainer = styled.div`
    width: 100%;
    background: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 20px;
    `;

export const EmailInput = styled.input`
    width: 30%;
    height: 50px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 10px;
    font-size: 1.5rem;
    font-weight: 500;
    border: none;
    `;
export const Button = styled.button`
    width: 10%;
    height: 50px;
    background: #75B40D;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
border: none;
color: #fff;
font-size: 1.5rem;
font-weight: 500;
cursor: pointer;
transition: all 0.3s ease-in-out;
&:hover{
    background: #fff;
    color: #75B40D;
}
`;