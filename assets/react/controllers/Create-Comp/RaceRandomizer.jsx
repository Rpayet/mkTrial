import React from "react";

export default function raceRandomizer({ setCupSelection, setRaceSelection, data, setData }) {

    {/* Randomizer pour sélectionner une coupe et une courses aléatoirement */}
    const randomRace = () => {

        const randomCup = Math.floor(Math.random() * 20) + 1;

        const min = (randomCup * 4) - 3;
        const max = randomCup * 4;
        const randomRace = Math.floor(Math.random() * ( max - min + 1 )) + min;

        setCupSelection(randomCup);
        setRaceSelection(randomRace);
        setData({...data, race: randomRace });
    }
    

    return (
        <div className="w-1/5 mx-auto relative">
            <button 
                className="w-full mx-auto inline-block bg-white py-1 px-2 rounded-b-lg absolute -bottom-[45px] sm:-bottom-[53px]
                text-silver text-sm sm:text-lg text-center border-solid border-r-[1px] border-b-[1px] border-l-[1px] border-silver
                hover:text-lumi"
                type="button"
                onClick={ randomRace }>
                Aléatoire
            </button>
        </div>
    )
} 