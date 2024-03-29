import React from "react";

export default function RaceSelect({ races, cupSelection, data, setData }) {

    const start = (cupSelection - 1) * 4;
    const end = cupSelection * 4;

    const handleSelect = (event) => {
        setData({ ...data, race: parseInt(event.target.id) });
    }

    return (
        <div className="w-full grid grid-cols-4 mt-2 justify-center
                        bg-gray-200 rounded-lg">
            {races.slice(start, end).map((race) => (
                <div
                    key={race.id} 
                    className='m-auto'>
                    <img 
                        
                        id={race.id}
                        className={`p-1 sm:p-2 w-44 rounded-lg cursor-pointer ${data.race === race.id ? 'bg-lumi' : ''}`}
                        src={`/assets/admin/img/races/${race.slug.split('_')[0]}/${race.picture}`} alt={`${race.picture}`}
                        onClick={ handleSelect } />
                    <p className='text-xs text-center text-silver font-bold p-1'>{race.name.toUpperCase()}</p>
                </div>
            ))}
        </div>
    )
}