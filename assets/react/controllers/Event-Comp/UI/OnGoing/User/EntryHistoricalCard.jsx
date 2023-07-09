import React from "react";
import { formatTime } from "../../../_Services/FormatTime";
import ReactTimeago from "react-timeago";
import { BsTrash  } from 'react-icons/bs';
import { RxCross2, RxCheck  } from 'react-icons/rx';

export default function EntryHistoricalCard({ entry, formatter, hoveredEntry, i, userAuth, entryDelete, setEntryDelete, filled, handleSubmit}) {

    return (
        <div>
            { entryDelete.visibility && hoveredEntry?.key === i && userAuth()
            
            ?   <div className="w-full flex items-center justify-around">

                    <p className="text-xs">Confirmer la supression ?</p>

                    <div className="flex items-center gap-2">
                        <RxCross2
                            title="Annuler"
                            onClick={() => {setEntryDelete({...entryDelete, visibility: false})}}
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

            :   <div className="flex items-center justify-around">
                    <p>{ formatTime(entry.time) }</p>
                    <span className="text-xs">
                        <ReactTimeago date={entry.createdAt} formatter={formatter} />
                    </span>
                    { (hoveredEntry?.key === i && userAuth() ) && 
                        <BsTrash 
                            title="Supprimer l'entrée"
                            onClick={() => {setEntryDelete({id: hoveredEntry?.key, visibility : true})}}
                            className="w-6 h-6 p-1 bg-white rounded-full block
                                        border-solid border-[1px] border-silver
                                        hover:bg-mario hover:text-white"
                    /> }
                </div>
            }
            { entryDelete?.id === i &&
                <div 
                    style={{width: `${filled}%`}}
                    className={`bg-red-500 absolute
                    top-0 bottom-0 left-0 right-0 opacity-25 rounded-lg`}>
                </div>
            }

        </div>
    )
}

