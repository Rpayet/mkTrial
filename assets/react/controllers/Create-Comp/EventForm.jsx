import React, { useEffect, useState } from "react";
import CupSelection from "./CupSelect";
import RaceSelect from "./RaceSelect";
import DateSelect from "./DateSelect";
import RaceRandomizer from "./RaceRandomizer";
import SwitchesSelect from "./SwitchesSelect";

export default function EventForm({ races, setData, data, errors, minDate }) {

    const [cupSelection, setCupSelection] = useState('');
    const [raceSelection, setRaceSelection] = useState('');
    const [dateValue, setDateValue] = useState('');

    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        if (raceSelection > 12) {
            setCurrentPage(1);
        } else if (raceSelection <= 12) {
            setCurrentPage(0);
        }
    }, [raceSelection]);
   
    return (
        <div className="">
            {/* Messages d'erreurs */}
            <div className={`text-center bg-white rounded-lg w-1/2 my-2 mx-auto`}>

                {errors.name && <p className="text-red-500" >{ errors.name }</p>}
                {errors.endAt && <p className="text-red-500" >{ errors.endAt }</p>}
                {errors.race && <p className="text-red-500" >{ errors.race }</p>}
                {errors.speed && <p className="text-red-500" >{ errors.speed }</p>}
                {errors.privacy && <p className="text-red-500" >{ errors.privacy }</p>}

            </div>

            <div className="mt-6 px-12 py-6 w-full justify-center bg-white rounded-lg">
                
                {/* Sélection date de fin de l'événement */}
                <DateSelect
                    setDateValue= { setDateValue }
                    setData= { setData }
                    dateValue= { dateValue } 
                    data= { data }
                    minDate= { minDate } />

                <div className="w-full p-4 mt-4 border-solid border-[1px] border-silver rounded-lg">
                    
                    {/* Sélection des coupes */}
                    <CupSelection
                        races= { races } 
                        cupSelection= { cupSelection } 
                        setCupSelection= { setCupSelection }
                        currentPage= { currentPage } 
                        setCurrentPage= { setCurrentPage } />
                        
                    {/* Sélection des courses */}
                    <RaceSelect
                        races= {races} 
                        cupSelection= { cupSelection } 
                        raceSelection= { raceSelection } 
                        setRaceSelection= { setRaceSelection }
                        data= { data }
                        setData= { setData } />

                    {/* Randomizer de course */}
                    <RaceRandomizer
                        setCupSelection= { setCupSelection } 
                        setRaceSelection= { setRaceSelection }
                        data= { data }
                        setData= { setData } />

                </div>

                <div className="w-full flex justify-around mt-6">

                    {/* Comp avec les switches Speed / Privacy */}
                    <SwitchesSelect
                            data= { data }
                            setData= { setData } />

                </div>

            </div>

        </div>
    )
}

