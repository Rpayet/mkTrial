import React from "react";

export default function DateSelect({ setData, data, minDate }) {

    const handleDateChange = (event) => {
        setData({ ...data, endAt: event.target.value });
    }

    return (

        <div>
            <span className="block text-sm text-center font-bold">Fin de l'événement</span>
            <input
                name="endAt"
                className="block mx-auto p-2 border rounded-lg cursor-pointer focus:outline-none focus:border-lumi" 
                type="date"
                min={minDate}
                onChange={handleDateChange} 
                 />
        </div>
    )
}