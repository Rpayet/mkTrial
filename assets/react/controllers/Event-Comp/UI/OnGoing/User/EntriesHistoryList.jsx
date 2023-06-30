import React, { useState } from "react";
import TimeAgo from 'react-timeago';
import { RxCross2, RxCheck  } from 'react-icons/rx';
import { BsTrash  } from 'react-icons/bs';
import { formatTime } from "../../../_Services/FormatTime";

export default function EntriesHistoryList({ entry, i, setHoveredEntry, hoveredEntry, handleSubmit, userAuth, formatter}) {

    const [visibility, setVisibility] = useState(true);

    return (
        <li 
            onMouseEnter={() => setHoveredEntry( {id: entry.id, key: i} )}
            onMouseLeave={() => setHoveredEntry( {id: null, key: null} )}
            className="bg-white px-1 py-3 rounded-lg 
                    hover:scale-[1.02]">

                {visibility ?

                <div className="flex items-center justify-around">
                    <p>{ formatTime(entry.time) }</p>
                    <span className="text-xs">
                        <TimeAgo date={entry.createdAt} formatter={formatter} />
                    </span>
                    { (hoveredEntry.key === i && userAuth() ) && 
                        <BsTrash 
                            title="Supprimer l'entrée"
                            onClick={() => setVisibility(false)}
                            className="w-6 h-6 p-1 bg-white rounded-full block
                                        border-solid border-[1px] border-silver
                                        hover:bg-mario hover:text-white"
                    /> }
                </div>

                :

                <div className="flex items-center justify-around">
                    <p className="text-xs">Confirmer la supression ?</p>
                    <div className="flex items-center gap-2">
                        <RxCross2
                            title="Annuler"
                            onClick={() => setVisibility(true)}
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
                </div>

                }

        </li>
    )
}