import React from "react";

export default function HourSelect ({ data, setData }) {

    const handleHourChange = (event) => {   
        setData({ ...data, hourEnd: event.target.value });
    }

    return (
        <>
            <div className="flex items-center justify-center gap-10">

                {/* Sélection de l'heure */}
                <div>
                    <span className="block text-xs text-center text-gray-500 font-bold">Heure</span>
                    <input 
                        name="hourEnd"
                        className='block mx-auto px-2 py-1 border-solid border-[1px] 
                        rounded-lg cursor-pointer focus:outline-none 
                        focus:border-lumi' 
                        type="time"
                        value={data.hourEnd}
                        onChange={handleHourChange} />
                </div>
            </div>
        </>
    )
}