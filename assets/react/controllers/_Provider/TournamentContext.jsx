import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const TournamentContext = createContext();

export const TournamentProvider = ({ children }) => {

    const [page, setPage] = useState('sort');

    const inputFields = {
        sort : {id: 'sort', placeholder : 'Rechercher un tournoi', type: 'button', text: 'Rechercher'},
        create : {id: 'create', placeholder : 'Entrer un nom de tournoi', type: 'submit', text: 'Créer'}
    }

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
    
    const tournamentContextValue = {
        data, setData,
        minDate, filterMenu, setFilterMenu, sortList, setSortList,
        page, setPage, inputFields
    };

    return (
        <TournamentContext.Provider value={tournamentContextValue} >
            {children}
        </TournamentContext.Provider>
    );
};
