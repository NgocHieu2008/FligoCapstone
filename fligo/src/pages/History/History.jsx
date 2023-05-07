import {Wrapper, Title, ButtonWrapper, Button} from "./History.styled";
import { useState } from 'react';
import Upcoming from "./Upcoming";

function History() {
    const [activeButton, setActiveButton] = useState(3);
    const content = [
        {
            id: 3,
            component: <Upcoming />
        },
        {
            id: 2,
            component: "Completed"
        },
        {
            id: 1,
            component: "Cancelled"
        }
    ]
    const renderContent = () => {
        const result = content.find((item) => item.id === activeButton);
        return result.component || null;
    }
    const handleClick = (buttonId) => {
        setActiveButton(buttonId);
    };

    return ( 
        <Wrapper>
            <Title>Booking History</Title>
            <ButtonWrapper>
                <Button active={activeButton === 1} onClick={() => handleClick(1)}>Cancelled</Button>
                <Button active={activeButton === 2} onClick={() => handleClick(2)}>Completed</Button>
                <Button active={activeButton === 3} onClick={() => handleClick(3)}>Upcoming</Button>
            </ButtonWrapper>
            {renderContent()}
        </Wrapper>
     );
}

export default History;