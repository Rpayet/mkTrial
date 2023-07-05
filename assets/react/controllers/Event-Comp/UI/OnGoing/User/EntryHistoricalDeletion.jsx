import React from "react";
import { RxCross2, RxCheck  } from 'react-icons/rx';

export default function EntryHistoricalDeletion({ filled, setVisibility, handleSubmit }) {

    if (filled >= 100) {
        setVisibility(true);
    }

    return (
        <div className="w-full flex items-center justify-around">

            <p className="text-xs">Confirmer la supression ?</p>

            <div className="flex items-center gap-2">
                <RxCross2
                    title="Annuler"
                    onClick={() => {setVisibility(true)}}
                    className="w-6 h-6 bg-white rounded-full block
                    border-solid border-[1px] border-silver 
                    hover:bg-mario hover:text-white" />
                <RxCheck
                    title="Confirmer"
                    onClick={handleSubmit}
                    className="w-6 h-6 bg-white rounded-full block
                    border-solid border-[1px] border-silver
                    hover:bg-lumi hover:text-white" />
            </div>
            <div 
                style={{width: `${filled}%`}}
                className={`bg-red-500 absolute
                top-0 bottom-0 left-0 right-0 opacity-25 rounded-lg`}>
            </div>
            
        </div>
    )
}