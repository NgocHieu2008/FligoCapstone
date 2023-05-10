
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

    const [searchResult1, setSearchResult1] = useState([]);
    const [searchResult2, setSearchResult2] = useState([]);
    const [searchResult3, setSearchResult3] = useState([]);

    const nextDay = new Date(departureDate);
    nextDay.setDate(nextDay.getDate() + 1);
    const secondDate = nextDay.toISOString().slice(0, 10);
    // third date
    const nextDay2 = new Date(departureDate);
    nextDay2.setDate(nextDay2.getDate() + 2);
    const thirdDate = nextDay2.toISOString().slice(0, 10);
    console.log(departureDate, secondDate, thirdDate);

    useEffect(() => {
      const searchBarContent = JSON.parse(localStorage.getItem("searchBarContent"));
      if (searchBarContent) {
          setFromLocation(searchBarContent.fromLocation);
          setToLocation(searchBarContent.toLocation);
          setDepartureDate(searchBarContent.departureDate);
          setSearchResult1(searchBarContent.flights1);
          setSearchResult2(searchBarContent.flights2);
          setSearchResult3(searchBarContent.flights3);
      }
  }, []);
  

  const onSearch = async () => {
  // toLocation must be different from fromLocation
  if (fromLocation === toLocation) {
    alert("Please choose different locations");
    return;
  }

  // fetch data from server
  const response1 = await fetch(
    `https://fligo.vercel.app/flights?departure=${fromLocation}&arrival=${toLocation}&date=${departureDate}`
  );
  const data1 = await response1.json();
  setSearchResult1(data1.data);
  // fetch data date + 1
  const response2 = await fetch(
    `https://fligo.vercel.app/flights?departure=${fromLocation}&arrival=${toLocation}&date=${secondDate}`
  );
  const data2 = await response2.json();
  setSearchResult2(data2.data);
  // fetch data date + 2
  const response3 = await fetch(
    `https://fligo.vercel.app/flights?departure=${fromLocation}&arrival=${toLocation}&date=${thirdDate}`
  );
  const data3 = await response3.json();
  setSearchResult3(data3.data);
  // save search bar content to local storage
  localStorage.setItem(
    "searchBarContent",
    JSON.stringify({
      fromLocation,toLocation,departureDate,flights1:data1.data, flights2:data2.data, flights3:data3.data}));

  // redirect to search result page
  if(window.location.href !== "/order")
    window.location.href = "/order";
  };



  const value = {fromLocation,setFromLocation, toLocation, setToLocation, departureDate, setDepartureDate, searchResult1, setSearchResult1, searchResult2, setSearchResult2, searchResult3, setSearchResult3, onSearch};

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
}

export { SearchContext, SearchProvider };