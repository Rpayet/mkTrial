import React from "react";
import CupFilter from "../FiltersOptions/CupFilter";
import FilterResetButton from "../FiltersOptions/FilterResetButton";
import FilterMenuClosedButton from "../FiltersOptions/FilterMenuClosedButton";
import RaceFilter from "../FiltersOptions/RaceFilter";
import SpeedFilter from "../FiltersOptions/SpeedFilter";


export default function FilterMenu({ races, setVisibility, visibility, setSortList, sortList }) {
    
    return(

        <div 
            className={`absolute w-[500px] z-10 top-0 -left-28 sm:left-0 px-1 py-4 flex flex-col space-y-4 
            bg-white border-solid border-[1px] border-lite rounded-lg
            ${visibility ? 'block' : 'hidden'}`}>

                <FilterMenuClosedButton setVisibility={setVisibility} visibility={visibility}/>

                <div className="px-4 space-y-4">
                    <CupFilter 
                        races= { races }
                        setSortList= { setSortList }
                        sortList= { sortList } />
                    <RaceFilter 
                        races={ races } 
                        setSortList= { setSortList }
                        sortList= { sortList } />
                    <SpeedFilter
                        setSortList= { setSortList }
                        sortList= { sortList } />
                </div>

                <FilterResetButton setSortList= { setSortList }/>
        </div>

    )
}