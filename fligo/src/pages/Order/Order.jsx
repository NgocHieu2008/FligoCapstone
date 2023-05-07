import SearchBar from "~/components/SearchBar/SearchBar";
import {SearchWrapper,TimeLineWrapper, ContentWrapper, FilterWrapper, FlightWrapper, Filter,FilterTitle, Form, Label} from "./Order.styled";
import FlightCard from "~/components/Cards/FlightCard/FlightCard";
import sort from "~/assets/sort.png";

import React from 'react';

function Order() {

    return ( 
        <>
        <SearchWrapper>
                <SearchBar/>
            </SearchWrapper>
            <TimeLineWrapper>Timeline</TimeLineWrapper>
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
                    <FlightCard></FlightCard>
                </FlightWrapper>
            </ContentWrapper>
        </>
     );
}

export default Order;