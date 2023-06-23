import React, { useState } from "react";
import { formatTime } from "../../../_Services/FormatTime";
import TimeAgo from 'react-timeago';
import frenchStrings from 'react-timeago/lib/language-strings/fr';
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter';


export default function EntriesHighlight({ showUserEntries, setSection }) {

    const formatter = buildFormatter(frenchStrings);
    const [visibility, setVisibility] = useState(false);

    const handleClick = () => {
        setVisibility(!visibility);
    }

    const handleSection = () => {
        setSection('ranking');
    }

    return (
        <div className="sm:w-2/3 flex flex-col relative">

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

            <div 
                onClick={handleSection}
                className="flex gap-2 w-fit text-sm border-solid border-b-2 p-1 border-lumi hover:border-mario cursor-pointer">
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" 
                        d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 
                        11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 
                        18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 
                        20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 
                        3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 
                        11.7071 4.29289Z" 
                        fill="#000000"/>
                </svg>

                <p  
                    
                    className="">
                    Retour
                </p>
            </div>

            <div className="w-full flex justify-around p-6">

                <div className="flex items-center gap-4">
                    <img
                        src={ showUserEntries[0].user.picture 
                                ? `/assets/user/img/${showUserEntries[0].user.picture}` 
                                : '/assets/admin/img/icons/Default.png' }
                        alt="default"
                        className="h-24 rounded-full border-solid border-4 border-white"
                    />
                    <div>
                        <a 
                            href="#"
                            className="font-bold text-lg hover:text-lumi">
                                { showUserEntries[0].user.name }
                        </a>
                        <p className="text-lg" >{ formatTime(showUserEntries[0].time) }</p>
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

                <h2 className="my-4">Temps enregistrés</h2>

                <div className="w-full">

                    <ul className="grid grid-cols-2 gap-4">
                        { showUserEntries.map((entry, i) => (
                            <li 
                                key={i}
                                className="bg-white p-1 rounded-lg 
                                        flex items-center justify-around
                                        hover:scale-[1.02]">
                                    <p>{ formatTime(entry.time) }</p>
                                    <span className="text-xs">
                                        <TimeAgo date={entry.createdAt} formatter={formatter} />
                                    </span>
                                    
                            </li>
                        ))}
                    </ul>

                </div>
            </div>

        </div>
    )
}

// https://www.npmjs.com/package/react-timeago

