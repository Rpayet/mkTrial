import React, { useState, useContext } from "react";
import { formatTime } from "../../../_Services/FormatTime";
import frenchStrings from 'react-timeago/lib/language-strings/fr';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';
import { BackButton } from "../../../../_GlobalUi/Buttons";
import EntryHistoryCard from "./EntryHistoricalCard";
import { EventContext } from "../../../../_Provider/EventContext";
import { EventService } from "../../../../_Service/EventService";
import { toggleSection } from "../../../../_Service/SectionService";

export default function EntriesHighlight() {

    const { setEventData, setIsLoading, isLoading, event,
        entries, showUser, setFilled, section, setSection } = useContext(EventContext);

    const showUserEntries = entries.filter((entry) => entry.user.id === showUser).sort((a, b) => a.time - b.time);

    const formatter = buildFormatter(frenchStrings);
    const [imgFocus, setImgFocus] = useState(false);
    const [entryDelete, setEntryDelete] = useState({
        id: null,
        visibility: false,
    });

    const [hoveredEntry, setHoveredEntry] = useState(null);

    if (showUserEntries?.length === 0) {
        setSection(toggleSection(section, "ranking"));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading({...isLoading, entry: true});
        await EventService().deleteEntry(hoveredEntry, setFilled);
        await EventService().getEvent(event.id, setEventData);
        if (showUserEntries.length === 0) {
            setSection(toggleSection(section, "ranking"));
          }
        setFilled(0);
        setEntryDelete({id: null, visibility : false});
        setIsLoading({...isLoading, entry: false});
    };
    
    const handleMouseLeave = () => {
        setHoveredEntry( null );
        setEntryDelete({...entryDelete, visibility: false});
    }
    
    return (
        <div className="sm:w-2/3 flex flex-col relative">
            {/** Image Focus */}
            <div 
                onClick={() => {setImgFocus(!imgFocus)}}
                className={`absolute w-[600px] p-20 
                            left-1/2 transform -translate-x-1/2 z-50 
                            backdrop-blur-sm ${!imgFocus && 'hidden'}`}>
                <img 
                    className="rounded-lg"
                    src={`/assets/user/entries/${showUserEntries[0]?.picture}`} 
                    alt={showUserEntries[0]?.picture} />
            </div>

            <div className="flex gap-2 items-center justify-between">
                <BackButton 
                    textTitle='Retour au classement'
                    onClick={() => { setSection(toggleSection(section, 'ranking')) }} />
                <h2 className="font-bold">Consulter les temps enregistrés</h2>
            </div>

            <div className="w-full flex justify-around p-6">

                <div className="flex items-center gap-4">
                    <img
                        src={ showUserEntries[0]?.user.picture 
                                ? `/assets/user/img/${ showUserEntries[0]?.user.picture }` 
                                : '/assets/admin/img/icons/Default.png' }
                        alt="default"
                        className="h-24 rounded-full border-solid border-4 border-white"
                    />
                    <div className="h-24 flex flex-col justify-around">
                        <a 
                            href="#"
                            className="font-bold text-lg hover:text-lumi">
                                { showUserEntries[0]?.user.name }
                        </a>
                        <div>
                            <p className='text-xs border-b-2 border-solid border-lumi'>Meilleur temps</p>
                            <p className="text-lg font-bold" >{ formatTime(showUserEntries[0]?.time) }</p>
                        </div>
                        
                    </div>
                </div>

                <div className="w-1/2 cursor-pointer">
                    <img 
                        onClick={() => {setImgFocus(!imgFocus)}}
                        className="rounded-lg"
                        src={`/assets/user/entries/${showUserEntries[0]?.picture}`} 
                        alt={showUserEntries[0]?.picture} />
                </div>

            </div>

            <div className="w-full text-center">

                <p className="my-4">Historique</p>

                <div className="w-full">

                    <ul className="grid grid-cols-2 gap-4">
                        {/**  Up "li" here & make 2 components "show"/"delete" conditional view */}
                        { showUserEntries?.map((entry, i) => (
                            <li 
                                key={entry.id}
                                onMouseEnter={() => setHoveredEntry( entry?.id )}
                                onMouseLeave={handleMouseLeave}
                                className="relative bg-white px-1 py-3 rounded-lg overflow-hidden
                                        hover:scale-[1.02]">
                                    {/** TODO : Simplify Component */}
                                    <EntryHistoryCard
                                        i={i}
                                        entry={entry}
                                        formatter={formatter}
                                        hoveredEntry={hoveredEntry}
                                        entryDelete={entryDelete}
                                        setEntryDelete={setEntryDelete}
                                        handleSubmit={handleSubmit} />

                            </li>
                        ))}
                    </ul>

                </div>
            </div>

        </div>
    )
}

