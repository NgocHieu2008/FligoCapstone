import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

const SearchContext = createContext();

function SearchProvider({ children }) {

    const history = useHistory();

    const Location = [
        "Ho Chi Minh City",
        "Hanoi",
        "Da Nang",
        "Da Lat"
    ]

    const today = new Date(); // Ngày hiện tại
    const [fromLocation, setFromLocation] = useState(Location[0]);
    const [toLocation, setToLocation] = useState(Location[0]);
    const [departureDate, setDepartureDate] = useState(today.toISOString().substr(0,10));

    const [searchResult, setSearchResult] = useState([]);

  const onSearch = async (event) => {
    if (event) {
        event.preventDefault();
      }
    // nếu đang ở trang home thì chuyển qua trang order (để hiển thị kết quả tìm kiếm)
    if(window.location.pathname === "/home"){
        window.location.href = "/order";
    }
    // Tìm kiếm chuyến bay dựa trên điểm khởi hành, điểm đến và ngày đi
    const result = "Kết quả tìm kiếm"
    // Lưu kết quả tìm kiếm vào state searchResult
    setSearchResult(result);
  };

  const value = {fromLocation,setFromLocation, toLocation, setToLocation, departureDate, setDepartureDate, searchResult, setSearchResult, onSearch};

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
}

export { SearchContext, SearchProvider };