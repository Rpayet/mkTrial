import React from "react";

export default function RaceSelect({ races, cupSelection, data, setData }) {

    const start = (cupSelection - 1) * 4;
    const end = cupSelection * 4;

    const handleSelect = (event) => {
        setData({ ...data, race: parseInt(event.target.id) });
    }

    return (
        <div className="w-full grid grid-cols-4 sm:gap-2 mt-2
                        bg-D9 rounded-lg">
            {races.slice(start, end).map((race, index) => (
                <img 
                    key={index}
                    id={race.id}
                    className={`p-1 sm:p-2 m-1 w-48 rounded-lg cursor-pointer ${data.race === race.id ? 'bg-lumi' : ''}`}
                    src={`/assets/admin/img/races/${race.slug.split('_')[0]}/${race.picture}`} alt={`${race.picture}`}
                    onClick={ handleSelect } />
            ))}
        </div>
    )
}