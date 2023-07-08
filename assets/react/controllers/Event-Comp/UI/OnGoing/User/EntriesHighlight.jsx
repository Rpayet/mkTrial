import axios from "axios";
import React, { useState, useContext } from "react";
import { formatTime } from "../../../_Services/FormatTime";
import frenchStrings from 'react-timeago/lib/language-strings/fr';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';
import { BackButton } from "../../../../_GlobalUi/Buttons";
import EntriesHistoryList from "./EntriesHistoricalList";
import { EventContext } from "../../../../_Provider/EventContext";
import { updateProgress } from "../../../../_Service/Loading";
import RemoveRegistration from "./RemoveRegistration";

export default function EntriesHighlight({ user, event, showUserEntries, setSection }) {

    const { eventData, setEventData } = useContext(EventContext);
    const [filled, setFilled] = useState(0);
    const formatter = buildFormatter(frenchStrings);
    const [visibility, setVisibility] = useState(false);
    const [removeRegistration, setRemoveRegistration] = useState(false);

    const [hoveredEntry, setHoveredEntry] = useState(
        { id: null, key: null }
    );


    const handleSubmit = (e) => {
        e.preventDefault();
      
        const startTime = performance.now();
      
        axios
            .delete(`/api/entry/${hoveredEntry.id}/delete`)
            .then(response => {
                const endTime = performance.now();
                const loadTime = endTime - startTime;

            updateProgress((loadTime/2), (progress) => {
                setFilled(progress);
            });
            
            axios.get(`/api/event/${event.id}`)
                .then(response => {
                    setEventData(response.data);
                    const userEntries = response.data.entries.filter(entry => {
                        return entry.user.id === user.id;
                    });
                    setFilled(0);

                    if (userEntries.length === 0) {
                    setSection('ranking');
                    }
                })
                .catch(error => {
                    console.error(error);
                });
          })
          .catch(error => {
            console.error(error);
          });
      };
      
    const userAuth = () => {
        if (user.id === showUserEntries[0].user.id ) {
            return true;
        }
    }
    
    const handleClick = () => {
        setVisibility(!visibility);
    }

    const handleSection = () => {
        setSection('ranking');
    }

    if (removeRegistration) {
        return ( <RemoveRegistration setRemoveRegistration={setRemoveRegistration} /> )
    }

    return (
        <div className="sm:w-2/3 flex flex-col relative">
            {/** Image Focus */}
            <div 
                onClick={handleClick}
                className={`absolute w-[600px] p-20 
                            left-1/2 transform -translate-x-1/2 z-50 
                            backdrop-blur-sm ${!visibility && 'hidden'}`}>
                <img 
                    className="rounded-lg"
                    src={`/assets/user/entries/${showUserEntries[0].picture}`} 
                    alt={showUserEntries[0].picture} />
            </div>

            <div className="flex gap-2 items-center justify-between">
                <BackButton onClick={ handleSection } />
                <h2 className="font-bold">Consulter les temps enregistrés</h2>
            </div>

            <div className="w-full flex justify-around p-6">

                <div className="flex items-center gap-4">
                    <img
                        src={ showUserEntries[0].user.picture 
                                ? `/assets/user/img/${ showUserEntries[0].user.picture }` 
                                : '/assets/admin/img/icons/Default.png' }
                        alt="default"
                        className="h-24 rounded-full border-solid border-4 border-white"
                    />
                    <div className="h-24 flex flex-col justify-around">
                        <a 
                            href="#"
                            className="font-bold text-lg hover:text-lumi">
                                { showUserEntries[0].user.name }
                        </a>
                        <div>
                            <p className='text-xs border-b-2 border-solid border-lumi'>Meilleur temps</p>
                            <p className="text-lg font-bold" >{ formatTime(showUserEntries[0].time) }</p>
                        </div>
                        { userAuth() && (
                            <div
                                className="text-xs p-1 border-solid border-[1px] border-silver rounded-lg
                                hover:bg-mario hover:text-white cursor-pointer" 
                                onClick={() => setRemoveRegistration(true)}>
                                <p>Se désinscrire</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="w-1/2 cursor-pointer">
                    <img 
                        onClick={handleClick}
                        className="rounded-lg"
                        src={`/assets/user/entries/${showUserEntries[0].picture}`} 
                        alt={showUserEntries[0].picture} />
                </div>

            </div>

            <div className="w-full text-center">

                <p className="my-4">Historique</p>

                <div className="w-full">

                    <ul className="grid grid-cols-2 gap-4">
                        { showUserEntries.map((entry, i) => (
                            <EntriesHistoryList
                                key={i}
                                i={i}
                                entry={entry}
                                hoveredEntry={hoveredEntry}
                                setHoveredEntry={setHoveredEntry}
                                formatter={formatter}
                                userAuth={userAuth}
                                handleSubmit={handleSubmit} 
                                filled={filled}
                            />
                        ))}
                    </ul>

                </div>
            </div>

        </div>
    )
}

// https://www.npmjs.com/package/react-timeago

