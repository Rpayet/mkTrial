import React, { useContext } from "react";
import { TournamentContext } from "../../../_Provider/TournamentContext";
import { FaMagnifyingGlass, FaPlus } from "react-icons/fa6";

export default function TogglePage() {
    
    const {page, setPage} = useContext(TournamentContext);

    return(
        <div className="flex gap-2">

            <FaMagnifyingGlass
                title="Rechercher un tournoi"  
                className={`w-6 h-6 ${page == 'sort' ? 'text-lumi' : 'text-silver'} hover:text-lumi`}
                onClick={ () => setPage('sort') }  />

            <FaPlus
                title="Créer un tournoi"
                className={`w-6 h-6 ${page == 'create' ? 'text-lumi' : 'text-silver'} hover:text-lumi`}
                onClick={ () => setPage('create') } />

        </div>
    )
}