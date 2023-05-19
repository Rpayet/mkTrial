import React, { useState } from 'react';
import FilterToggleButton from './FilterToggleButton';

export default function  CupFilter({ setSortList, sortList }) {

    const [visibility, setVisibility] = useState(false);

    const handleInputChange = (event) => {
        
        const { id, checked } = event.target;

        if (checked) {
            setSortList({...sortList, speed: [...sortList.speed, event.target.id], });
        } else {
            setSortList({...sortList, speed: sortList.speed.filter((item) => item !== id ), });
        }
    };  

    return(
        <div>

            { <FilterToggleButton title="Vitesse" setVisibility={ setVisibility } visibility={ visibility }/> }

            {visibility && (

                <div id="speed-selector" className="flex gap-4">

                    <div className='flex gap-2'>
                        <input 
                            type="checkbox"
                            id="150cc"
                            checked={ sortList.speed.includes('150cc') }
                            onChange={ handleInputChange } />
                        <label htmlFor="150cc">150cc</label>
                    </div>
                    <div className='flex gap-2'>
                        <input 
                            type="checkbox"
                            id="200cc"
                            checked={ sortList.speed.includes('200cc') }
                            onChange={ handleInputChange } />
                        <label htmlFor="200cc">200cc</label>
                    </div>

                </div>
            )}

        </div>
    )
}