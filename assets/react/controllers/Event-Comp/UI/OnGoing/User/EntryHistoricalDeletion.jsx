import React from "react";
import { RxCross2, RxCheck  } from 'react-icons/rx';

export default function EntryHistoricalDeletion({ setVisibility, handleSubmit, hoveredEntry }) {

    return (
        <div className="flex items-center justify-around">

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
                    className="bg-red-500 absolute w-1/2 
                    top-0 bottom-0 left-0 right-0 opacity-25 z-[-1] rounded-lg">
                </div>
        </div>
    )
}