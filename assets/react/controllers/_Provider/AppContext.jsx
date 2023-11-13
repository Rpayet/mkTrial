import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const [userIdentifier, setUserIdentifier] = useState(null);
    const [tournaments, setTournaments] = useState([]);
    const [races, setRaces] = useState([]);

    const [mainLoading, setMainLoading] = useState(true);

    useEffect(() => {
        Promise.all([
            axios.get('/api/race/list'),
            axios.get('/api/tournament/list'),
            axios.get(`/api/user`)
        ]).then(([raceResponse, tournamentResponse, userResponse]) => {
            setRaces(raceResponse.data);
            setTournaments(tournamentResponse.data);
            const { user } = userResponse.data;
            setUserIdentifier(user);
            setMainLoading(false);
        });
    }, []);

    const appContextValue = {
        userIdentifier,
        tournaments, setTournaments, races, setRaces,
        mainLoading,
    };

    return (
        <AppContext.Provider value={appContextValue} >
            {children}
        </AppContext.Provider>
    );
}
