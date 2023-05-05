
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
  

  const onSearch = async (event) => {
    const result = await fetch(`http://localhost:8000/flights?departure=${fromLocation}&arrival=${toLocation}`)
      .then((res) => res.json())

      console.log(result.data);
    const flights = result.data;
      // Lưu kết quả tìm kiếm vào state searchResult
      setSearchResult(flights);
      localStorage.setItem("searchBarContent", JSON.stringify({fromLocation, toLocation, departureDate, flights}));
  // nếu đang ở trang home thì chuyển qua trang order (để hiển thị kết quả tìm kiếm)
      if(window.location.pathname === "/home"){
      localStorage.setItem("searchBarContent", JSON.stringify({fromLocation, toLocation, departureDate, flights}));
      window.location.href = "/order";
  }

  if (window.location.pathname === "/order") {
      localStorage.setItem("searchBarContent", JSON.stringify({fromLocation, toLocation, departureDate, flights}));
  }

  };

  const value = {fromLocation,setFromLocation, toLocation, setToLocation, departureDate, setDepartureDate, searchResult, setSearchResult, onSearch};

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
}

export { SearchContext, SearchProvider };