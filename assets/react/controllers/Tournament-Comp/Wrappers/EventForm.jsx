import React, { useEffect, useState } from "react";
import CupSelection from "../../Event-Form/UI/CupSelect";
import RaceSelect from "../../Event-Form/UI/RaceSelect";
import PrimaryOptions from "../UI/Create/PrimaryOptions";

export default function EventForm({ races, setData, data, errors, minDate }) {

    const [cupSelection, setCupSelection] = useState('');
    const [raceSelection, setRaceSelection] = useState('');
    const [dateValue, setDateValue] = useState('');

    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        if (cupSelection > 12) {
            setCurrentPage(1);
        } else if (cupSelection <= 12) {
            setCurrentPage(0);
        }
    }, [cupSelection]);
   
    return (
        <div className="slideLeft">
            {/* Messages d'erreurs */}
            <div className={`text-center bg-white rounded-lg w-1/2 my-2 mx-auto`}>

                {errors.name && <p className="text-red-500" >{ errors.name }</p>}
                {errors.endAt && <p className="text-red-500" >{ errors.endAt }</p>}
                {errors.race && <p className="text-red-500" >{ errors.race }</p>}
                {errors.speed && <p className="text-red-500" >{ errors.speed }</p>}
                {errors.capacity && <p className="text-red-500" >{ errors.capacity }</p>}
                {errors.hourEnd && <p className="text-red-500" >{ errors.hourEnd }</p>}
                {errors.pinCode && <p className="text-red-500" >{ errors.pinCode }</p>}

            </div>

            <div className="mt-10 px-12 py-6 w-full justify-center bg-white rounded-lg">

                <div className="">

                    {/* Comp avec les switches Speed / Privacy */}
                    <PrimaryOptions
                        data= { data }
                        setData= { setData }
                        dateValue= { dateValue } 
                        setDateValue= { setDateValue }
                        minDate= { minDate } />

                </div>

                <div className="w-full p-4 mt-4 border-solid border-[1px] border-silver rounded-lg">
                    
                    {/* Sélection des coupes */}
                    <CupSelection
                        data= { data }
                        setData= { setData }
                        races= { races } 
                        cupSelection= { cupSelection } 
                        setCupSelection= { setCupSelection }
                        currentPage= { currentPage } 
                        setCurrentPage= { setCurrentPage }
                        setRaceSelection= { setRaceSelection } />
                        
                    {/* Sélection des courses */}
                    <RaceSelect
                        races= {races} 
                        cupSelection= { cupSelection } 
                        raceSelection= { raceSelection } 
                        setRaceSelection= { setRaceSelection }
                        data= { data }
                        setData= { setData } />

                </div>

            </div>

        </div>
    )
}

