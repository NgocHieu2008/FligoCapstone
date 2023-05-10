import SearchBar from "~/components/SearchBar/SearchBar";
import {SearchWrapper,TimeLineWrapper, ContentWrapper, FilterWrapper, FlightWrapper, Filter,FilterTitle, Form, Label, Button} from "./Order.styled";
import FlightCard from "~/components/Cards/FlightCard/FlightCard";
import FlightCard2 from "~/components/Cards/FlightCard/FlightCard2";
import FlightCard3 from "~/components/Cards/FlightCard/FlightCard3";
import sort from "~/assets/sort.png";
import { useState } from 'react';
import React from 'react';
import moment from 'moment';

function Order() {

    const searchBarContent = JSON.parse(localStorage.getItem("searchBarContent"));
    const date = searchBarContent.departureDate;
    const nextDay = new Date(date);
    nextDay.setDate(nextDay.getDate() + 1);
    const secondDate = nextDay.toISOString().slice(0, 10);
    // third date
    const nextDay2 = new Date(date);
    nextDay2.setDate(nextDay2.getDate() + 2);
    const thirdDate = nextDay2.toISOString().slice(0, 10);

    const [activeButton, setActiveButton] = useState(1);
    const content = [
        {
            id: 1,
            component: <FlightCard/>
        },
        {
            id: 2,
            component: <FlightCard2/>
        },
        {
            id: 3,
            component: <FlightCard3/>
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
        <>
        <SearchWrapper>
                <SearchBar/>
            </SearchWrapper>
            <TimeLineWrapper>
            <Button active={activeButton === 1} onClick={() => handleClick(1)}>
                {moment.utc(date).format("DD MMM YYYY")}
            </Button>
            <Button active={activeButton === 2} onClick={() => handleClick(2)}>
                {moment.utc(secondDate).format("DD MMM YYYY")}
            </Button>
            <Button active={activeButton === 3} onClick={() => handleClick(3)}>
                {moment.utc(thirdDate).format("DD MMM YYYY")}
            </Button>
            </TimeLineWrapper>
            <ContentWrapper>
                <FilterWrapper>
                    <Filter>
                        <FilterTitle>
                            <img src={sort} alt="sort"/>
                            Sort by
                        </FilterTitle>
                        <Form>
                            <Label>
                                <input name="sort" type="radio" value="lowest price"/>
                                Lowest Price
                            </Label>
                            <Label>
                                <input name="sort" type="radio" value="earliest departure"/>
                                Earliest Departure
                            </Label>
                            <Label>
                                <input name="sort" type="radio" value="earliest arrival"/>
                                Earliest Arrival
                            </Label>
                        </Form>
                    </Filter>
                    <Filter>
                        <FilterTitle>
                            Airlines
                        </FilterTitle>
                        <Form>
                            <Label>
                                <input name="sort" type="checkbox" value="vietnam airline"/>
                                Vietnam Airline
                            </Label>
                            <Label>
                                <input name="sort" type="checkbox" value="vietjet air"/>
                                Vietjet Air
                            </Label>
                        </Form>
                    </Filter>
                </FilterWrapper>
                <FlightWrapper>
                {renderContent()}
                </FlightWrapper>
            </ContentWrapper>
        </>
     );
}

export default Order;
