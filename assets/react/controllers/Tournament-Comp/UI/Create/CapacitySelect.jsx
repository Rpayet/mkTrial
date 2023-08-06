import React, { useState } from "react";

export default function CapacitySelect({data, setData, event}) {

    const [capacity, setCapacity] = useState(data?.capacity || '');

    const handleCapacity = (e) => {
        setData({...data, capacity: parseInt(e.target.value)});
        setCapacity(e.target.value);
    }

    return (
        <div>
            <span className="block text-xs text-center text-gray-500 font-bold p-1">Places disponibles</span>
            <input 
                type="number"
                className="block w-36 mx-auto px-2 py-1 border rounded-lg 
                cursor-pointer focus:outline-none focus:border-lumi" 
                placeholder="Sans limite"
                min={ event?.registered.length || 3 }
                value={ capacity }
                onChange={ handleCapacity }/>

        </div>
    )
}