import React from "react";

export default function DateSelect({ setData, data, minDate }) {

    const handleDateChange = (event) => {
        setData({ ...data, endAt: event.target.value });
    }

    return (

        <div>
            <span className="block text-center font-bold">Fin de l'événement</span>
            <input
                name="endAt"
                className="w-1/2 sm:w-1/4 block mx-auto p-4 border rounded-lg cursor-pointer focus:outline-none focus:border-buttonHoverStroke" 
                type="date"
                min={minDate}
                onChange={handleDateChange} 
                 />
        </div>
    )
}