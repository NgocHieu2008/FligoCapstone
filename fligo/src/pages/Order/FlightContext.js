import React, { createContext, useState } from 'react';

export const FlightContext = createContext({});

function FlightProvider({children}) {
    const [flight, setFlight] = useState(null);

    const handleSelectFlight = (flight) => {
        setFlight(flight);
    }

    return (
        <FlightContext.Provider value={{flight, handleSelectFlight}}>
            {children}
        </FlightContext.Provider>
    );
}

export default FlightProvider;