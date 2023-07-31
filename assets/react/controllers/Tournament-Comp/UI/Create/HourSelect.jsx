import React from "react";
import {RxCrossCircled} from 'react-icons/rx'

export default function HourSelect ({ event, setHour, data, setData }) {


    const handleHourChange = (event) => {   
        setData({ ...data, hourEnd: event.target.value });
    }

    const handleCancel = () => {
        setHour(false);
        setData({ ...data, hourEnd: null });
    }

    return (
        <>
            <div className="flex items-center justify-center gap-10">

                {/* Sélection de l'heure */}
                <div>
                    <div className='flex gap-1 items-center p-1 justify-center'>
                    <RxCrossCircled 
                            onClick={handleCancel}
                            className='cursor-pointer text-silver hover:text-mario' />
                        <span className="block text-xs text-center text-gray-500 font-bold">Heure</span>
                        
                    </div>
                    <input 
                        name="hourEnd"
                        className='block mx-auto px-2 py-1 border-solid border-[1px] 
                        rounded-lg cursor-pointer focus:outline-none 
                        focus:border-lumi' 
                        type="time"
                        value={data.hourEnd || '00:00'}
                        onChange={handleHourChange} />
                </div>
            </div>
        </>
    )
}