import React, { useState } from 'react';
import FilterToggleButton from './FilterToggleButton';

export default function  CupFilter({ races, setSortList, sortList }) {

    const [visibility, setVisibility] = useState(false);

    const handleInputChange = (event) => {
        
        const { name, checked } = event.target;

        if (checked) {
            setSortList({...sortList, cup: [...sortList.cup, event.target.name], });
        } else {
            setSortList({...sortList, cup: sortList.cup.filter((item) => item !== name), });
        }
    };  

    return(
        <div>

            { <FilterToggleButton title="Coupes" setVisibility={setVisibility} visibility={visibility}/> }

            {visibility && (

                <div id="cup-selector" className="grid grid-cols-6 gap-4">

                    {races.filter((race, index) => index % 4 === 0).map((race, index) => (

                        <div key={index} className="flex">   
                            <input 
                                type="checkbox" 
                                name={`${race.cup.name}`}
                                id={`cup-${index}`}
                                value={ race.cup.picture.substring(0, race.cup.picture.indexOf("_"))}
                                checked={sortList.cup.includes(race.cup.name)} // Vérifie le tableau pour coché/décoché les cases
                                onChange={handleInputChange} // Ajoute les check au tableau des coupes sélectionnés
                            />
                                
                            <label htmlFor={`cup-${index}`}>
                                <img src={`/assets/admin/img/cups/${ race.cup.picture }`} alt={ race.cup.picture } />
                            </label>

                        </div>
                    ))}

                </div>
            )}

        </div>
    )
}