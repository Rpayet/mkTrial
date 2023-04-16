import React from "react";

export default function DateSelect({ setData, data, minDate }) {

    const handleDateChange = (event) => {
        setData({ ...data, endAt: event.target.value });
    }

    return (

        <div>
            <span className="block text-xs text-center text-gray-500 font-bold">Fin de l'événement</span>
            <input
                name="endAt"
                className="block mx-auto px-2 py-1 border rounded-lg cursor-pointer focus:outline-none focus:border-lumi" 
                type="date"
                min={minDate}
                onChange={handleDateChange} 
                 />
        </div>
    )
}