import React, { useContext, useEffect, useRef } from "react";
import FilterMenu from "./FilterMenu";
import { GiSettingsKnobs } from 'react-icons/gi';
import { TournamentContext } from "../../../_Provider/TournamentContext";

export default function FilterOpenButton() {

  const { filterMenu, setFilterMenu } = useContext(TournamentContext);

  const containerRef = useRef(null);

  const toggleFilterMenu = () => {
      setFilterMenu(!filterMenu);
  };

  const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setFilterMenu(false);
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
                onClick={toggleFilterMenu}>
                <GiSettingsKnobs className='w-6 h-6'/>
                <span>Filtres</span>
            </div>
            
            <FilterMenu />
        </div>
    )
}