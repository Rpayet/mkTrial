import React, { createContext } from "react";

export const TournamentContext = createContext();

export const TournamentProvider = ({ children }) => {


    const tournamentContextValue = {};

    return (
        <TournamentContext.Provider value={tournamentContextValue} >
            {children}
        </TournamentContext.Provider>
    );
};
