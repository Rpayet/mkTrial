import React, { useContext } from "react";
import { TournamentContext } from "../../../_Provider/TournamentContext";

export default function InputField({ pageMode }) {

    const { data, setData, sortList, setSortList } = useContext(TournamentContext);

    const handleEventValue = (event) => {
        setData((prevData) => ({ ...prevData, name: event.target.value }));
    }

    const handleSearchValue = (event) => {
        setSortList({ ...sortList, input: event.target.value });
    }

    return (
        <div className="w-full flex gap-2">
            
            <input 
                type="text"
                className={` ${pageMode.id === "sort"  ? 'w-full' : 'w-4/5'} duration-500
                            rounded border-solid border-[1px] border-lite
                            focus:outline-none focus:border-lumi 
                            focus:ring-lumi focus:border-2`}
                placeholder={ pageMode.placeholder }
                value={pageMode.id === "sort" ? sortList.input : data.name} 
                onChange={pageMode.id === "sort" ? handleSearchValue : handleEventValue}
            />

            <button
                className={` ${pageMode.id === "sort" ? 'hidden' : 'w-1/5'} duration-500
                    inline-block bg-white py-2 sm:py-1 sm:px-2 rounded-lg
                    text-silver text-sm sm:text-lg text-center border-solid border-[1px] border-silver
                    hover:bg-lumi hover:text-white`}
                type={ pageMode.type }>
                { pageMode.text }
            </button>
        </div>
    )
}
