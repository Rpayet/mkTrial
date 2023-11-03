import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

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

    {/* Tableau des paramètres de filtres */}
    const [sortList, setSortList] = useState({ cup: [], race: [], input: '', speed: [], });


    {/* Gestion de l'affichage du menu de filtres */}
    const [filterMenu, setFilterMenu] = useState(false);

    {/* Requête GET */}
    useEffect(() => {
        axios
            .get("/api/tournament/list")
            .then(response => setTournaments(response.data))
            .catch(error => console.error(error));
    }, []);
    
    const tournamentContextValue = {
        data, setData, tournaments, setTournaments, 
        minDate, filterMenu, setFilterMenu, sortList, setSortList,
    };

    return (
        <TournamentContext.Provider value={tournamentContextValue} >
            {children}
        </TournamentContext.Provider>
    );
};
