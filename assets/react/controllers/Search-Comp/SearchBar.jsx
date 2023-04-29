import React, { useState } from "react";
import FilterOpenButton from "./FilterOpenButton";
import InputField from "./InputField";
import TogglePage from "./TogglePage";
import RandomNameButton from "../Create-Comp/RandomNameButton";

export default function SearchBar({ races, page, setPage, setSortList, sortList, eventName, setEventName, data, setData, visibility, setVisibility }) {
  
    const inputFields = {
        sort : {id: 'sort', placeholder : 'Rechercher un tournoi', type: 'button', text: 'Rechercher'},
        create : {id: 'create', placeholder : 'Entrer un nom de tournoi', type: 'submit', text: 'Créer'}
    }

    return (
        <div className="bg-white py-6 px-2 sm:px-12 rounded-lg relative z-30">
            <InputField 
                page = { page }
                pageMode = { inputFields[page] } 
                eventName= { eventName }
                setEventName = { setEventName }
                sortList= { sortList }
                setSortList= { setSortList }
                data= { data }
                setData= { setData } />

            <div className="flex gap-4 items-center mt-4">

                <TogglePage
                    page={ page }
                    setPage={ setPage } 
                    />
                
                <span>|</span>

                { page== 'sort' 
                    ? <FilterOpenButton 
                        races= { races } 
                        setVisibility={ setVisibility } 
                        visibility={ visibility } 
                        setSortList= { setSortList }
                        sortList= { sortList }/> 
                        
                    : <RandomNameButton 
                        eventName= { eventName }
                        setEventName = { setEventName }
                        data= { data }
                        setData= { setData }
                        /> 
                }
                
            </div>
        </div>
    )
}