import React, { useContext } from "react";
import { formatTime } from "../../../_Services/FormatTime";
import { BsTrash  } from 'react-icons/bs';
import { RxCross2, RxCheck  } from 'react-icons/rx';
import { EventContext } from "../../../../_Provider/EventContext";
import ElapsedTime from "../../../../_GlobalUi/ElapsedTime";

export default function EntryHistoricalCard({ entry, hoveredEntry, i, userAuth, entryDelete, setEntryDelete, handleSubmit}) {

    const { isLoading, filled } = useContext(EventContext);

    return (
        <>
            { entryDelete.visibility && hoveredEntry?.key === i && userAuth()
            
            ?   <div className="w-full flex items-center justify-around">

                    <p className="text-xs">Confirmer la supression ?</p>

                    <div className="flex items-center gap-2">
                        <button
                            disabled={isLoading.entry}
                            onClick={() => {setEntryDelete({...entryDelete, visibility: false})}} >
                                <RxCross2
                                    title="Annuler"
                                    className="w-6 h-6 bg-white rounded-full block
                                    border-solid border-[1px] border-silver 
                                    hover:bg-mario hover:text-white" />
                        </button>
                        <button
                            disabled={isLoading.entry}
                            onClick={handleSubmit}>
                                <RxCheck
                                    title="Confirmer"
                                    className="w-6 h-6 bg-white rounded-full block
                                    border-solid border-[1px] border-silver
                                    hover:bg-lumi hover:text-white" />
                        </button>
                    </div>
                    
                </div>

            :   <div className="flex items-center justify-around">
                    <p>{ formatTime(entry.time) }</p>
                    <span className="text-xs">
                        <ElapsedTime date={entry.createdAt} />
                    </span>
                    { (hoveredEntry?.key === i && userAuth() ) && 
                        <button
                            disabled={isLoading.entry}
                            onClick={() => {setEntryDelete({id: hoveredEntry?.key, visibility : true})}}>
                                <BsTrash 
                                    title="Supprimer l'entrée"
                                    className={`w-6 h-6 p-1 bg-white rounded-full block
                                                border-solid border-[1px] border-silver
                                                ${isLoading.entry ? 'hover:bg-lite' : 'hover:bg-mario'} hover:text-white`}/>
                        </button>     
                    }
                </div>
            }
            { entryDelete?.id === i &&
                <div 
                    style={{width: `${filled}%`}}
                    className={`bg-red-500 absolute
                    top-0 bottom-0 left-0 right-0 opacity-25 rounded-lg`}>
                </div>
            }

        </>
    )
}

