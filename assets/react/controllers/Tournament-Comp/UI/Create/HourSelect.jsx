import React from "react";

export default function HourSelect ({ data, setData }) {

    return (
        <>
            <div className="flex items-center justify-center gap-10">

                {/* Sélection de l'heure */}
                <div>
                    <span className="block text-xs text-center text-gray-500 font-bold">Heure</span>
                    <input className='rounded-lg' type="time" />
                </div>
            </div>
        </>
    )
}