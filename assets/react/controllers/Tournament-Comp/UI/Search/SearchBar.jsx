import React, { useContext } from "react";
import FilterOpenButton from "./FilterOpenButton";
import InputField from "./InputField";
import TogglePage from "./TogglePage";
import RandomNameButton from "../Create/RandomNameButton";
import { TournamentContext } from "../../../_Provider/TournamentContext";

export default function SearchBar() {

    const {inputFields, page} = useContext(TournamentContext);

    const buttonRender = () => {
        if (page == 'sort') {
            return <FilterOpenButton /> ;
        } else {
            return <RandomNameButton /> ;
        }
    }
  
    return (
        <div className="bg-white py-6 px-2 sm:px-12 rounded-lg relative z-30">
            <InputField pageMode = { inputFields[page] } />

            <div className="flex gap-4 items-center mt-4">

                <TogglePage />
                
                <span>|</span>

                { buttonRender() }
                
            </div>
        </div>
    )
}