import React from "react";
import { formatTime } from "../../../_Services/FormatTime";
import ReactTimeago from "react-timeago";
import { BsTrash  } from 'react-icons/bs';

export default function EntryHistoricalCard({ entry, formatter, hoveredEntry, i, setVisibility, userAuth}) {

    return (
        <div className="flex items-center justify-around">
            <p>{ formatTime(entry.time) }</p>
            <span className="text-xs">
                <ReactTimeago date={entry.createdAt} formatter={formatter} />
            </span>
            { (hoveredEntry.key === i && userAuth() ) && 
                <BsTrash 
                    title="Supprimer l'entrée"
                    onClick={() => {setVisibility(false)}}
                    className="w-6 h-6 p-1 bg-white rounded-full block
                                border-solid border-[1px] border-silver
                                hover:bg-mario hover:text-white"
            /> }
        </div>
    )
}