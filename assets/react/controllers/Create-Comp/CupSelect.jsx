import React from "react";

export default function CupSelect({ races, cupSelection, setCupSelection }) {

    const handleSelect = (event) => {
        setCupSelection(parseInt(event.target.id));
    };

    return (

        <div 
            className="grid grid-cols-6 sm:gap-4">
            {races.filter((race, index) => index % 4 === 0).map((race, index) => (
                <img
                id={race.cup.id}
                className={ `w-38 p-1 sm:p-2 rounded-full cursor-pointer ${ cupSelection === race.cup.id ? 'bg-lumi' : '' }` }
                key={ index }
                src={ `/assets/img/base/races/Cups/${ race.cup.picture }` }
                alt={`${ race.cup.name }`}
                onClick={ handleSelect }
                />
            ))}
        </div>
    )
}