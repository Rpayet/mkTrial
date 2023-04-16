import React from "react";

export default function InputField({ page, pageMode, sortList, setSortList, eventName, setEventName, data, setData }) {

    const handleEventValue = (event) => {
        setEventName(event.target.value)
        setData({ ...data, name: event.target.value });
    }

    const handleSearchValue = (event) => {
        setSortList({...sortList, input: event.target.value });
    }

    return (
        <div className="w-full flex gap-2">
            
            <input 
                type="text"
                className="w-4/5 rounded border-solid border-[1px] border-lite
                            focus:outline-none focus:border-lumi 
                            focus:ring-lumi focus:border-2"
                placeholder={ pageMode.placeholder }
                value={ pageMode.id == page ? eventName : sortList.input }  
                onChange={ pageMode.id == page ? handleEventValue : handleSearchValue }
            />

            <button
                className="w-1/5 inline-block bg-white py-2 sm:py-1 sm:px-2 rounded-lg
                text-silver text-sm sm:text-lg text-center border-solid border-[1px] border-silver
                hover:bg-lumi hover:text-white"
                type={ pageMode.type }>
                { pageMode.text }
            </button>
        </div>
    )
}
