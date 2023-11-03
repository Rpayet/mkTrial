import React from "react";
import FilterOpenButton from "./FilterOpenButton";
import InputField from "./InputField";
import TogglePage from "./TogglePage";
import RandomNameButton from "../Create/RandomNameButton";

export default function SearchBar({ races, page, setPage}) {
  
    const inputFields = {
        sort : {id: 'sort', placeholder : 'Rechercher un tournoi', type: 'button', text: 'Rechercher'},
        create : {id: 'create', placeholder : 'Entrer un nom de tournoi', type: 'submit', text: 'Créer'}
    }

    return (
        <div className="bg-white py-6 px-2 sm:px-12 rounded-lg relative z-30">
            <InputField pageMode = { inputFields[page] } />

            <div className="flex gap-4 items-center mt-4">

                <TogglePage
                    page={ page }
                    setPage={ setPage } />
                
                <span>|</span>

                { page== 'sort' 
                    ? <FilterOpenButton races= { races } /> 
                        
                    : <RandomNameButton /> 
                }
                
            </div>
        </div>
    )
}