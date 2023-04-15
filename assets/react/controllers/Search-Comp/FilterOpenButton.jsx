import React from "react";
import FilterMenu from "./FilterMenu";

export default function FilterOpenButton({ races, setVisibility, visibility, setSortList, sortList }) {

    const toggleVisibility = () => {
        setVisibility(!visibility);
    };

    return (
        <div className="relative z-10">
            <div className="flex items-center gap-2 py-2 px-2 rounded-lg 
                            border-solid border-[1px] border-silver text-silver hover:text-lumi hover:cursor-pointer"
                onClick={toggleVisibility}>
                <img src="assets/img/base/filters.svg" alt="filters"/>
                Filtres
            </div>
            <FilterMenu 
                races= { races } 
                setVisibility= { setVisibility } 
                visibility= { visibility }
                setSortList= { setSortList }
                sortList= { sortList }/>
        </div>
    )
}