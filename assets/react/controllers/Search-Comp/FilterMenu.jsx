import React from "react";
import CupFilter from "./Filter-Comp/CupFilter";
import FilterResetButton from "./Filter-Comp/FilterResetButton";
import FilterMenuClosedButton from "./Filter-Comp/FilterMenuClosedButton";
import RaceFilter from "./Filter-Comp/RaceFilter";
import SpeedFilter from "./Filter-Comp/SpeedFilter";


export default function FilterMenu({ races, setVisibility, visibility, setSortList, sortList }) {
    
    return(

        <div 
            className={`absolute z-10 top-0 -left-20 sm:left-0 w-96 px-1 py-4 flex flex-col space-y-4 
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