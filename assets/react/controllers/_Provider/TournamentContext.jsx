import React, { createContext, useState } from "react";

export const TournamentContext = createContext();

export const TournamentProvider = ({ children }) => {

    {/** Liste des tournois à afficher */}
    const [tournaments, setTournaments] = useState([]);

    {/** Définit la date du jour */}
    const minDate = new Date().toISOString().substring(0, 10);

    {/* Tableau des paramètres à envoyer au formulaire */}
    const [data, setData] = useState({
        name: '', endAt: minDate, hourEnd: null,
        race: '', speed: '150cc', pinCode: null, capacity: null,
    });
    
    const tournamentContextValue = {
        data, setData, tournaments, setTournaments, 
        minDate,
    };

    return (
        <TournamentContext.Provider value={tournamentContextValue} >
            {children}
        </TournamentContext.Provider>
    );
};
