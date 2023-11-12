import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [userIdentifier, setUserIdentifier] = useState(null);

    const [tournaments, setTournaments] = useState([]);

    const [races, setRaces] = useState([]);

    useEffect(() => {
        // if (races.length === 0) {
            axios
            .get('/api/race/list')
            .then(response => setRaces(response.data))
        // }
        // if (tournaments.length === 0) {
            axios
            .get('/api/tournament/list')
            .then(response => setTournaments(response.data))
        // }

        axios
            .get(`/api/user`)
            .then(response => { 
                const { user } = response.data;
                setUserIdentifier(user);
            })
    }, []);

    const appContextValue = {
        userIdentifier,
        tournaments, setTournaments, races, setRaces,
    };

    return (
        <AppContext.Provider value={appContextValue} >
            {children}
        </AppContext.Provider>
    );
}
