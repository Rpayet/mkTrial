import React, { useEffect, useRef } from "react";
import FilterMenu from "./FilterMenu";
import { GiSettingsKnobs } from 'react-icons/gi';

export default function FilterOpenButton({ races, setVisibility, visibility, setSortList, sortList }) {

    const containerRef = useRef(null);

    const toggleVisibility = () => {
        setVisibility(!visibility);
    };

    const handleClickOutside = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
          setVisibility(false);
        }
      };
    
      useEffect(() => {
        document.addEventListener("click", handleClickOutside);
    
        return () => {
          document.removeEventListener("click", handleClickOutside);
        };
      }, []);

    return (
        <div 
            ref={containerRef}
            className="relative z-10">
            <div className="flex items-center gap-2 py-2 px-2 rounded-lg 
                            border-solid border-[1px] border-silver text-silver hover:text-lumi hover:cursor-pointer"
                onClick={toggleVisibility}>
                <GiSettingsKnobs className='w-6 h-6'/>
                <span>Filtres</span>
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