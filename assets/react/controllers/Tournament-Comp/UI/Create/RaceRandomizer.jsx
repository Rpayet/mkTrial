import React from "react";
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';

export default function raceRandomizer({ setCupSelection, setRaceSelection, data, setData }) {

    {/* Randomizer pour sélectionner une coupe et une courses aléatoirement */}
    const randomRace = () => {

        const randomCup = Math.floor(Math.random() * 22) + 1;

        const min = (randomCup * 4) - 3;
        const max = randomCup * 4;
        const randomRace = Math.floor(Math.random() * ( max - min + 1 )) + min;

        setCupSelection(randomCup);
        setRaceSelection(randomRace);
        setData({...data, race: randomRace });
    }
    

    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <GiPerspectiveDiceSixFacesRandom 
                onClick={ randomRace }
                className="w-10 h-10 sm:w-14 sm:h-14 fill-gray-400 hover:fill-lumi
                border-solid border-[1px] border-gray-400 rounded-full
                hover:border-lumi hover:animate-spin"/>
        </div>
    )
} 