
import React, { createContext, useState, useEffect } from 'react';

const SearchContext = createContext();

function SearchProvider({ children }) {

    const Location = [
        "Ho Chi Minh City",
        "Ha Noi",
        "Da Nang",
        "Da Lat"
    ]

    const today = new Date(); // Ngày hiện tại
    const [fromLocation, setFromLocation] = useState(Location[0]);
    const [toLocation, setToLocation] = useState(Location[0]);
    const [departureDate, setDepartureDate] = useState(today.toISOString().substr(0,10));

    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
      const searchBarContent = JSON.parse(localStorage.getItem("searchBarContent"));
      if (searchBarContent) {
          setFromLocation(searchBarContent.fromLocation);
          setToLocation(searchBarContent.toLocation);
          setDepartureDate(searchBarContent.departureDate);
          setSearchResult(searchBarContent.flights);
      }
  }, []);
  

  const onSearch = async () => {
  // toLocation must be different from fromLocation
  if (fromLocation === toLocation) {
    alert("Please choose different locations");
    return;
  }

  // fetch data from server
  const response = await fetch(
    `http://localhost:8000/flights?departure=${fromLocation}&arrival=${toLocation}`
  );
  const data = await response.json();
  setSearchResult(data.data);
  // save search bar content to local storage
  localStorage.setItem(
    "searchBarContent",
    JSON.stringify({
      fromLocation,toLocation,departureDate,flights:data.data}));

  // redirect to search result page
  if(window.location.href !== "/order")
    window.location.href = "/order";
  };



  const value = {fromLocation,setFromLocation, toLocation, setToLocation, departureDate, setDepartureDate, searchResult, setSearchResult, onSearch};

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
}

export { SearchContext, SearchProvider };