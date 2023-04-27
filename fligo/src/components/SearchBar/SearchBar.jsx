import React, {useState} from 'react'
import {Wrapper, Title, OptionWrapper, Label, Input, Select,FillWrapper,Fill,FillLabel,DateInput,Button} from './SearchBar.styled'
import flight from "~/assets/flight_icon.png";
import arrowIcon from "~/assets/two-way-arrows 1.png";

function SearchBar() {

    const typeOfSeat = [
        "Economy Class",
        "Premium Economy Class",
        "Business Class"
    ];

    const Location = [
        "Ho Chi Minh City",
        "Hanoi",
        "Da Nang",
        "Da Lat"
    ]

    const today = new Date(); // Ngày hiện tại

    const [isChecked, setIsChecked] = useState(false);
    const [selectedSeat, setSelectedSeat] = useState(typeOfSeat[0]);
    const [passengerCount, setPassengerCount] = useState(1);
    const [fromLocation, setFromLocation] = useState(Location[0]);
    const [toLocation, setToLocation] = useState(Location[0]);
    const [departureDate, setDepartureDate] = useState(today.toISOString().substr(0,10));

    const handleChange = (e) => {
        setIsChecked(e.target.checked);
    };

    const handleSelect = (e) => {
        setSelectedSeat(e.target.value);
    };

    const handlePassengerCount = (e) => {
        setPassengerCount(e.target.value);
    };

    const handleFromLocation = (e) => {
        setFromLocation(e.target.value);
    };

    const handleToLocation = (e) => {
        setToLocation(e.target.value);
    };

    const handleDepartureDate = (e) => {
        setDepartureDate(e.target.value);
    };
    return ( 
        <Wrapper>
            <Title>
                <img src={flight} alt="flight" />
                <span>Flight</span>
            </Title>
            <OptionWrapper>
                <OptionWrapper>
                    <Label>
                        <Input
                            type="checkbox"
                            checked={!isChecked}
                            value="one-way"
                            onChange={handleChange}
                        />
                        One Way
                    </Label>
                    <Label>
                        <Input
                            type="checkbox"
                            checked={isChecked}
                            value="return"
                            onChange={handleChange}
                        />
                        Return
                    </Label>
                    <Label>
                        <Select value={selectedSeat} onChange={handleSelect}>
                            {typeOfSeat.map((seat, index) => (
                                <option key={index} value={seat}>
                                    {seat}
                                </option>
                            ))}
                        </Select>
                    </Label>
                </OptionWrapper>
                <OptionWrapper>
                    <Label>
                        <Input 
                            type="number"
                            min="1"
                            max="10"
                            value={passengerCount}
                            onChange={handlePassengerCount}
                        />
                        Adult
                    </Label>
                    <Label>
                        <Input 
                            type="number"
                            min="0"
                        />
                        Child
                    </Label>
                    <Label>
                        <Input 
                            type="number"
                            min="0"
                        />
                        Infant
                    </Label>
                </OptionWrapper>
            </OptionWrapper>
            <OptionWrapper>
                <FillWrapper style={{width:"50%"}}>
                    <div>
                        <FillLabel>From</FillLabel>
                        <Fill value={fromLocation} onChange={handleFromLocation}>
                            {Location.map((location, index) => (
                                <option key={index} value={location}>
                                    {location}
                                </option>
                            ))}
                        </Fill>
                    </div>
                    <img src={arrowIcon}/>
                    <div>
                        <FillLabel>To</FillLabel>
                        <Fill value={toLocation} onChange={handleToLocation}>
                            {Location.map((location, index) => (
                                <option key={index} value={location}>
                                    {location}
                                </option>
                            ))}
                        </Fill>
                    </div>
                </FillWrapper>
                <FillWrapper>
                    <div>
                        <FillLabel>Depart</FillLabel>
                        <DateInput type="date"
                            min={today.toISOString().substr(0,10)} // Giới hạn ngày khởi hành không được nhỏ hơn ngày hiện tại.
                            value={departureDate}
                            onChange={handleDepartureDate}/>
                    </div>
                </FillWrapper>
                <Button>Search</Button>
            </OptionWrapper>
        </Wrapper>
     );
}

export default SearchBar;